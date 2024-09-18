import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
enum Year {
  BE = 'BE',
  TE = 'TE',
  SE = 'SE',
  FE = 'FE',
}
export class AddClass {
  @IsNotEmpty()
  @IsString()
  className: string;

  @IsEnum(Year, { message: 'year must be se te be fe' })
  year: Year;
}
