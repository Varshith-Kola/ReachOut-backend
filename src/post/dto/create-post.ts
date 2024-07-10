import { IsString, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString()
  readonly email!: string;

  @IsString()
  readonly postContent!: string;
}

