import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {

      const result = await this.usersService.createUser(
        createUserDto.name,
        createUserDto.email,
        createUserDto.password
      );
      return {
        statusCode: HttpStatus.CREATED,
        data: result
      };

    } catch (error) {

      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message
      };

    }
  }
}
