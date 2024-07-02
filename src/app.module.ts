import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './user/user.module'
import { PostsModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb+srv://ReachOutMain:RZcPZeGT4DgO8Gk5@reachout.mfvt0zo.mongodb.net/?retryWrites=true&w=majority&appName=ReachOut'), 
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}