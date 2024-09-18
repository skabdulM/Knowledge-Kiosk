import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsMobilePhone,
  IsMongoId,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  ValidateNested,
} from 'class-validator';

export class AssignTeacher {
  @IsMongoId()
  @IsNotEmpty()
  teacherId: string;

  @IsString()
  @IsNotEmpty()
  subjectId: string;

  // @IsEnum(Role, { message: 'Role must be one of ADMIN, TEACHER, or STUDENT' })
  // role: Role;
}
