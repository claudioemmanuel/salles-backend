import { IsNotEmpty } from "class-validator";

export class SignInResponseDto {
  @IsNotEmpty()
  access_token: string;
}