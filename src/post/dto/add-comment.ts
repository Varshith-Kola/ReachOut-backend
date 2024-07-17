import { IsString } from 'class-validator';

export class AddCommentDto {
  @IsString()
  readonly commentText!: string;

  @IsString()
  readonly email!: string;
}