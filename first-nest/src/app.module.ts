import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져오고 함수를 실행시키는 역할
  providers: [],
})
export class AppModule {}
