import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookService } from './services/create-book.service';
import { IBookEntity } from './interfaces/IBookEntity';

@Controller('book')
export class BookController {
    constructor(
        private readonly createBookService : CreateBookService
    ){}
    @Post("")
    async create(@Body() book: IBookEntity) : Promise<IBookEntity>{
        return this.createBookService.execute(book)
    }
}
