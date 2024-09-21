import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AddClass } from 'src/dtos/authDtos/addClass.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}
  async addClass(dto: AddClass, id: string) {
    try {
      return await this.prisma.class.create({
        data: {
          name: dto.className,
          year: dto.year,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async getClass() {
    try {
      return await this.prisma.class.findMany();
    } catch (error) {
      throw error;
    }
  }
}
