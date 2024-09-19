import {
  IsArray,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class AssignStudent {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsArray()
  subjects: any;
}
