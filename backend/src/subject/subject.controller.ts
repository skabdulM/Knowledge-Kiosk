import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { RolesGuard } from '../auth/guard/role.guard';
import { GetUser, Roles } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { AddSubject } from 'src/dtos/authDtos/addSubject.dto';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Post('addSubject')
  async addSubject(@GetUser('id') adminId: string, @Body() dto: AddSubject) {
    return this.subjectService.addSubject(dto, adminId);
  }

  @Get('listSubjects')
  async listSubjects() {
    return this.subjectService.listSubjects();
  }
}
