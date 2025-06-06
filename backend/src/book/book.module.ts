import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schema/book.schema';
import { CreateBookService } from './services/create-book.service';
import { CreateBookRepository } from './repositories/create-book.repository';
import { ReadBooksService } from './services/read-books.service';
import { ReadBookRepository } from './repositories/read-books.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: Book.name, schema:BookSchema }])],
  controllers: [BookController],
  providers: [CreateBookService,ReadBooksService,ReadBookRepository,CreateBookRepository]

})
export class BookModule {}
