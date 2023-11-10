import { IsEmpty, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateAddressDto {

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsNumber()
  number: number;

  complement: string;

  @IsNotEmpty()
  @IsString()
  zip_code: string;

  @IsNotEmpty()
  @IsString()
  @Length(2)
  city: string;

  @IsNotEmpty()
  @IsString()
  @Length(2)
  state: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsEmpty()
  user_id: number;
}
