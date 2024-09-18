import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { AddTeacher } from 'src/dtos/authDtos/addTeacher.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { AssignTeacher } from 'src/dtos/authDtos/assignTeacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}

  async addTeacher(dto: AddTeacher, id: string) {
    const hash = await argon.hash(dto.password);
    const teacherDetails = {
      email: dto.email,
      hash: hash,
      name: dto.name,
    };
    try {
      const user = await this.prisma.teacher.create({
        data: {
          ...teacherDetails,
          adminId: id,
        },
      });
      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials Taken');
        }
      }
      throw error;
    }
  }
  async assignTeacher(dto: AssignTeacher, id: string) {
    try {
      return await this.prisma.teacher.update({
        where: {
          id: dto.teacherId,
        },
        data: {
          subjects: {
            connect: {
              id: dto.subjectId,
            },
          },
        },
        include: {
          subjects: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
