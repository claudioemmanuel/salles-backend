import { hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  findAll(): string {
    return 'This action returns all users';
  }

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {

    const saltRounds = 10;
    const hashedPassword = await hash(createUserDto.password, saltRounds);

    return {
      ...createUserDto,
      password: hashedPassword
    }
  }
}