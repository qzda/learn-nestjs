import { IsInt, IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @IsInt()
  readonly limit: number;

  @IsOptional()
  @IsPositive()
  @IsInt()
  readonly offset: number;
}
