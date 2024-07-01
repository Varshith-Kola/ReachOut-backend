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
}

export const UserSchema = SchemaFactory.createForClass(User);
