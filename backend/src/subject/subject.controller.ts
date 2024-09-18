import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { RolesGuard } from '../auth/guard/role.guard';
import { GetUser, Roles } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { ProductDto } from '../dtos';
import { AddSubject } from 'src/dtos/authDtos/addSubject.dto';

@Controller('subject')
@UseGuards(JwtGuard, RolesGuard)
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Roles('ADMIN')
  @Post('addSubject')
  async addSubject(@GetUser('id') adminId: string, @Body() dto: AddSubject) {
    return this.subjectService.addSubject(dto, adminId);
  }
}
