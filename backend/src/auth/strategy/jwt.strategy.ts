import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: {
    sub: string;
    email: string;
    roles: 'ADMIN' | 'STUDENT' | 'TEACHER';
  }) {
    try {
      console.log(payload.roles);

      if (payload.roles === 'ADMIN') {
        const admin = await this.prisma.admin.findUnique({
          where: { id: payload.sub },
        });
        if (admin) {
          delete admin.hash;
          return admin;
        }
      }

      if (payload.roles === 'TEACHER') {
        const teacher = await this.prisma.teacher.findUnique({
          where: { id: payload.sub },
        });
        if (teacher) {
          delete teacher.hash;
          return teacher;
        }
      }

      if (payload.roles === 'STUDENT') {
        const student = await this.prisma.student.findUnique({
          where: { id: payload.sub },
        });
        if (student) {
          delete student.hash;
          return student;
        }
      }

      // Handle the case when no matching user is found
      throw new Error('User not found or invalid role');
    } catch (error) {
      console.error('Error in validate function:', error);
      throw new Error('Validation failed');
    }
  }
}
