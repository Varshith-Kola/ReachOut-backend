import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument as UserEntity } from './user.schema';  // Correct import statement

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.create(createUserDto);
  }

  @Get(':email')
  async findOne(@Param('email') email: string): Promise<UserEntity> {
    return this.usersService.findByEmail(email);
  }

  @Get('delete/:email')
  async deleteuser(@Param('email') email: string): Promise<UserEntity> {
    return this.usersService.findByEmail(email);
  }

  @Post('like/post/:userId/:postId')
  async likePost(@Param('email') email: string, @Param('postId') postId: string): Promise<UserEntity> {
    return this.usersService.likePost(email, postId);
  }
}
