import { IsNotEmpty, IsString } from 'class-validator';

export class AddSubject {
  @IsNotEmpty()
  @IsString()
  subjectName: string;

  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  classId: string;
}
