import { Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './post.schema';
import { CreatePostDto } from './dto/create-post';
import { AddCommentDto } from './dto/add-comment';
import { UsersService } from '../user/user.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    @Inject(forwardRef(() => UsersService)) private userService: UsersService,
  ) { }

  async create(createPostDto: CreatePostDto): Promise<PostDocument> {
    const { email, postContent } = createPostDto;

    // Fetch user details
    const user = await this.userService.findByEmail(email);

    const createdPost = new this.postModel({
      email: email,
      profileName: user.username,
      profileImage: user.image,
      postContent,
    });
  
    return createdPost.save();
  }

  async findAll(): Promise<PostDocument[]> {
    return this.postModel.find().exec();
  }

  async findByUser(email: string): Promise<PostDocument[]> {
    const posts = await this.postModel.find({"email" : email}).exec();
    if (!posts) {
      throw new NotFoundException('Posts not found');
    }
    return posts;
  }

  async findOne(id: string): Promise<PostDocument> {
    const post = await this.postModel.findById(id).exec();
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async delete(id: string): Promise<PostDocument> {
    const deletedPost = await this.postModel.findByIdAndDelete(id).exec();
    if (!deletedPost) {
      throw new NotFoundException('Post not found');
    }
    return deletedPost;
  }

  async addLike(id: string, email: string): Promise<PostDocument> {
    const post = await this.findOne(id);
    post.likeCount += 1;
    // Add to Liked Posts of the User
    const user = await this.userService.findByEmail(email);
    user.likedPosts.push({id});
    return post.save();
  }

  async addComment(id: string, addCommentDto: AddCommentDto): Promise<PostDocument> {
    const post = await this.findOne(id);
    const user = await this.userService.findByEmail(addCommentDto.email);
    post.comments.push({name: user.username, commentText: addCommentDto.commentText, email: addCommentDto.email, timeCommented: new Date(), image: user.image  });
    return post.save();
  }
}
