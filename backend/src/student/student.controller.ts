import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { JwtGuard, RolesGuard } from 'src/auth/guard';
import { StudentService } from './student.service';
import { Roles, GetUser } from 'src/auth/decorator';
import { AddStudent } from 'src/dtos';
import { AssignStudent } from 'src/dtos/assignstudent.dto';

@Controller('student')
@UseGuards(JwtGuard, RolesGuard)
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Roles('TEACHER')
  @Post('addstudent')
  async addStudent(@GetUser('id') teacherId: string, @Body() dto: AddStudent) {
    return this.studentService.addStudent(teacherId, dto);
  }

  @Roles('TEACHER')
  @Put('assignstudent')
  async assignStudent(@Body() dto: AssignStudent) {
    return this.studentService.assignStudent(dto);
  }
}
