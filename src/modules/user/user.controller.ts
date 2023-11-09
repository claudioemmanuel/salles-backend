import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const result = await this.usersService.createUser(createUserDto);
      return { statusCode: HttpStatus.CREATED, data: result };

    } catch (error) {

      return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message };
    }
  }
}
