import { Injectable } from '@nestjs/common';
import { AddStudent } from 'src/dtos';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { AssignStudent } from 'src/dtos/assignstudent.dto';
@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async addStudent(teacherId: string, dto: AddStudent) {
    const hash = await argon.hash(dto.password);
    try {
      const student = this.prisma.student.create({
        data: {
          name: dto.name,
          email: dto.email,
          hash: hash,
          classId: dto.classId,
        },
      });
      return student;
    } catch (error) {
      throw error;
    }
  }

  async assignStudent(dto: AssignStudent) {
    try {
      const temp = await this.prisma.student.update({
        where: {
          email: dto.email,
        },
        data: {
          subjects: {
            connect: dto.subjects.map((id) => ({ id: id })),
          },
        },
        include: {
          subjects: true,
          class: true,
        },
      });
      return temp;
    } catch (error) {
      throw error;
    }
  }
}
