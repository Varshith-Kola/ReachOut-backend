import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username!: string;

  @Prop({ required: true, unique: true })
  email!: string;

  @Prop()
  image?: string;

  @Prop()
  bio?: string;

  @Prop({ type: [{ id: String }] })  // Array of liked posts
  likedPosts!: Array<{ id: string }>;
}

export const UserSchema = SchemaFactory.createForClass(User);