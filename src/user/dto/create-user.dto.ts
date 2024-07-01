import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly username!: string;
  
    @IsString()
    readonly email!: string;

    @IsString()
    readonly image!: string;

    @IsString()
    readonly bio!: string;

  }
  
  