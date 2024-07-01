import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User as UserEntity  } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.create(createUserDto);
  }

  @Get(':email')
  async findOne(@Param('email') email: string): Promise<UserEntity> {
    return this.usersService.findByEmail(email);
  }
}
