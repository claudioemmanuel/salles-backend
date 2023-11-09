
import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password } = createUserDto;

    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword
    });

    await this.userRepository.save(user);

    return user;
  }
}