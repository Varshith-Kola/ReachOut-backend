import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostDto } from './dto/create-post';
import { AddCommentDto } from './dto/add-comment';
import { Post as PostEntity } from './post.schema';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postsService.create(createPostDto);
  }

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postsService.findAll();
  }

  @Get(':email')
  async findPostsByUser(@Param('email') email: string): Promise<PostEntity[]> {
    return this.postsService.findByUser(email);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.delete(id);
  }

  @Post(':id/comment')
  async addComment(@Param('id') id: string, @Body() addCommentDto: AddCommentDto): Promise<PostEntity> {
    return this.postsService.addComment(id, addCommentDto);
  }

  @Post(':id/like')
  async addLike(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.addLike(id);
  }
}