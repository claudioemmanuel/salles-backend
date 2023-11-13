
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User> {

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