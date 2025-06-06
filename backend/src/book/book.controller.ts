import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBookService } from './services/create-book.service';
import { IBookEntity } from './interfaces/IBookEntity';
import { ReadBooksService } from './services/read-books.service';

@Controller('book')
export class BookController {
    constructor(
        private readonly createBookService : CreateBookService,
        private readonly readBookService: ReadBooksService
    ){}
    @Post("")
    async create(@Body() book: IBookEntity) : Promise<IBookEntity>{
        return this.createBookService.execute(book)
    }
    @Get("")
    async getAll(){
        return this.readBookService.execute()
    }
}
