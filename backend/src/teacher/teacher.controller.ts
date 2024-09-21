import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { JwtGuard, RolesGuard } from '../auth/guard';
import { GetUser, Roles } from '../auth/decorator';
import { AddTeacher } from 'src/dtos/authDtos/addTeacher.dto';
import { AssignTeacher } from 'src/dtos/authDtos/assignTeacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Post('addTeacher')
  async addTeacher(@GetUser('id') adminId: string, @Body() dto: AddTeacher) {
    return this.teacherService.addTeacher(dto, adminId);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Put('assignTeacher')
  async assignTeacher(
    @GetUser('id') adminId: string,
    @Body() dto: AssignTeacher,
  ) {
    return this.teacherService.assignTeacher(dto, adminId);
  }

  @Get('listteacher')
  async listTeacher() {
    return this.teacherService.listTeacher();
  }
}
