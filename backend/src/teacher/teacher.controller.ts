import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { JwtGuard, RolesGuard } from '../auth/guard';
import { GetUser, Roles } from '../auth/decorator';
import { AddTeacher } from 'src/dtos/authDtos/addTeacher.dto';
import { AssignTeacher } from 'src/dtos/authDtos/assignTeacher.dto';

@UseGuards(JwtGuard, RolesGuard)
@Controller('teacher')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}

  @Roles('ADMIN')
  @Post('addTeacher')
  async addTeacher(@GetUser('id') adminId: string, @Body() dto: AddTeacher) {
    return this.teacherService.addTeacher(dto, adminId);
  }

  @Roles('ADMIN')
  @Put('assignTeacher')
  async assignTeacher(
    @GetUser('id') adminId: string,
    @Body() dto: AssignTeacher,
  ) {
    return this.teacherService.assignTeacher(dto, adminId);
  }
}
