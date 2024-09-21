import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddSubject } from '../dtos/authDtos/addSubject.dto';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaService) {}

  async addSubject(dto: AddSubject, id: string) {
    const subject = this.prisma.subject.create({
      data: {
        name: dto.subjectName,
        classId: dto.classId,
        description: dto.description,
        adminId: id,
      },
    });
    return subject;
  }
  async listSubjects() {
    return await this.prisma.subject.findMany();
  }
}
