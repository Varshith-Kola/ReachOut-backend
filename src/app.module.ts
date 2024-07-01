import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './user/user.module'
import { PostsModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost:27017'), // Update with your MongoDB URI
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}
