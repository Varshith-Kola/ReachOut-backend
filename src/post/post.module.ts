import { Module , forwardRef} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsService } from './post.service';
import { PostsController } from './post.controller';
import { Post, PostSchema } from './post.schema';
import { UsersModule } from '../user/user.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  forwardRef(() => UsersModule)
],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
