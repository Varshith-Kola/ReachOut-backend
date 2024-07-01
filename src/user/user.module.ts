import { Module,forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { User, UserSchema } from './user.schema';
import { PostsModule } from '../post/post.module'; 

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
