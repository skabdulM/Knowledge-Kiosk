import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ClassService } from './class.service';
import { JwtGuard, RolesGuard } from 'src/auth/guard';
import { Roles, GetUser } from 'src/auth/decorator';
import { AddSubject } from '../dtos/authDtos/addSubject.dto';
import { AddClass } from '../dtos/authDtos/addClass.dto';

@Controller('class')
export class ClassController {
  constructor(private classService: ClassService) {}
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('ADMIN')
  @Post('addclass')
  async addClass(@GetUser('id') adminId: string, @Body() dto: AddClass) {
    return this.classService.addClass(dto, adminId);
  }
  @Get('listclass')
  async getClass() {
    return this.classService.getClass();
  }
}
