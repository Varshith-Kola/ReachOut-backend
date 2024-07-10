import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
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
  
  @Prop({ type: [{ name: String, content: String, postedAt: Date }], default: [] })
  comments!: Array<{ name: string, commentText: string, timeCommented: Date }>;
}

export const PostSchema = SchemaFactory.createForClass(Post);