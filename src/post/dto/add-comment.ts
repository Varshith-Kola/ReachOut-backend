import { IsString } from 'class-validator';

export class AddCommentDto {
  @IsString()
  readonly name!: string;

  @IsString()
  readonly commentText!: string;
}