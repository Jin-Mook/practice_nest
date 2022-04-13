import { CatsService } from './cats.service';
import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Put,
  Res,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { Response } from 'express';
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllCat() {
    throw new HttpException('api is broken', 401);
  }

  @Get(':id')
  getOneCat(@Res({ passthrough: true }) res: Response, @Param('id') id) {
    console.log(res);
    console.log(id);
    return 'one cat';
  }
  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return;
  }

  @Delete()
  deleteCat() {
    return 'delete cat';
  }
}
