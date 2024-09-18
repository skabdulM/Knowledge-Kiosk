import {
  BadRequestException,
  ForbiddenException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  ConfimationEmail,
  ConfirmedEmail,
  Email,
  ForgotPassword,
  LoginDto,
  SignUp,
  UpdatePassword,
} from '../dtos';
import * as argon from 'argon2';
//NOTE use this import for prisma client know req
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { StudentSignUp } from 'src/dtos/authDtos/studentsignup.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: SignUp) {
    const isAdmin = dto.adminHash === process.env.ADMIN_KEY;
    const hash = await argon.hash(dto.password);
    const adminDetails = {
      email: dto.email,
      hash: hash,
      name: dto.name,
    };

    try {
      const user = await this.prisma.admin.create({
        data: {
          ...adminDetails,
        },
      });
      delete user.hash;
      const jwt_token = await this.signToken(user.id, user.email, user.roles);
      const temp = {
        ...user,
        ...jwt_token,
      };
      return temp;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials Taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: LoginDto) {
    if (dto.role === 'ADMIN') {
      const user = await this.prisma.admin
        .findUnique({
          where: {
            email: dto.email,
          },
        })
        .catch((error) => {
          throw new ForbiddenException('Invalid');
        });
      if (!user) throw new ForbiddenException('Credentials invalid');
      const passwordMatch = await argon.verify(user.hash, dto.password);
      if (!passwordMatch) throw new ForbiddenException('Credentials invalid');
      return this.signToken(user.id, user.email, user.roles);
    } else if (dto.role === 'TEACHER') {
      const user = await this.prisma.teacher
        .findUnique({
          where: {
            email: dto.email,
          },
        })
        .catch((error) => {
          throw new ForbiddenException('Invalid');
        });
      if (!user) throw new ForbiddenException('Credentials invalid');
      const passwordMatch = await argon.verify(user.hash, dto.password);
      if (!passwordMatch) throw new ForbiddenException('Credentials invalid');
      return this.signToken(user.id, user.email, user.roles);
    } else {
      const user = await this.prisma.student
        .findUnique({
          where: {
            email: dto.email,
          },
        })
        .catch((error) => {
          throw new ForbiddenException('Invalid');
        });
      if (!user) throw new ForbiddenException('Credentials invalid');
      const passwordMatch = await argon.verify(user.hash, dto.password);
      if (!passwordMatch) throw new ForbiddenException('Credentials invalid');
      return this.signToken(user.id, user.email, user.roles);
    }
  }

  async signToken(
    userId: string,
    email: string,
    roles: 'ADMIN' | 'STUDENT' | 'TEACHER',
  ): Promise<{ access_token: string }> {
    {
      const payload = {
        sub: userId,
        email,
        roles,
      };
      const secret = this.config.get('JWT_SECRET');

      const token = await this.jwt.signAsync(payload, {
        expiresIn: '24h',
        secret: secret,
      });
      return {
        access_token: token,
      };
    }
  }
}
