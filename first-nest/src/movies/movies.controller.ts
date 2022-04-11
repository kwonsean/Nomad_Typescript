import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
// movies가 인수로 들어가 있으면 localhost3000/movies로 가면 getAll함수의 리턴값이 나옴
// 따라서 controller의 인수 부분이 Entry Point를 컨트롤 함 => 아무것도 안넣으면 localhost3000에서 getAll() 실행
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return "This fnc'll return all movies";
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This fnc'll return one movie with thd movieId : ${movieId}`;
  }

  @Post()
  create() {
    return "This fnc'll create a movie";
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This fnc'll delete a movie id ${movieId}`;
  }

  // Put 도 업데이트를 하지만 전체를 업데이트한다. 반면 Patch는 일부분을 업데이트한다
  @Patch('/:id')
  patchMovie(@Param('id') movieId: string) {
    return `This fnc'll patch a movie id ${movieId}`;
  }
}
