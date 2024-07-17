import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {

  @Prop({ required: true })
  email!: string;

  @Prop({ required: true })
  profileName!: string;

  @Prop()
  profileImage!: string;

  @Prop({ default: Date.now })
  timePosted!: Date;

  @Prop({ required: true })
  postContent!: string;

  @Prop({ default: 0 })
  likeCount!: number;
  
  @Prop({ type: [{ name: String, commentText: String, email: String, timeCommented: Date, image: String }], default: [] })
  comments!: Array<{ name: string, commentText: string, email: string, timeCommented: Date, image: string | undefined }>;
}

export const PostSchema = SchemaFactory.createForClass(Post);