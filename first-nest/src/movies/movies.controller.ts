import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
// movies가 인수로 들어가 있으면 localhost3000/movies로 가면 getAll함수의 리턴값이 나옴
// 따라서 controller의 인수 부분이 Entry Point를 컨트롤 함 => 아무것도 안넣으면 localhost3000에서 getAll() 실행
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: any) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie after ${searchingYear} YEAR!`;
  }
  // http://localhost:3000/movies/search?year=2000 요청시 입력한 쿼리 값 year를 읽어서 가져옴

  // Get 동적 주소를 사용하면 이후 Get들은 무시된다. (id로 인식한다.)
  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  // 이렇게 밑에 있으면 This fnc'll return one movie with thd movieId : search 가 리턴됨
  // @Get('search')
  // search() {
  //   return `We are searching for a movie with title`;
  // }

  // @Body를 통해서 body에 담긴 값을 가져올 수 있다.
  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  // Put 도 업데이트를 하지만 전체를 업데이트한다. 반면 Patch는 일부분을 업데이트한다
  @Patch(':id')
  patchMovie(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
