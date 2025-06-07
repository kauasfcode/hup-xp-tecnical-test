import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { CreateBookService } from './services/create-book.service';
import { ReadBooksService } from './services/read-books.service';
import { ReadBookByIdService } from './services/read-bookByid.service';
import { DeleteBookService } from './services/delete-book.service';
import { UpdateBookService } from './services/update-book.service';
import { TopBooksService } from './services/get-top-books.service';

const mockService = {

};

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        { provide: CreateBookService, useValue: mockService },
        { provide: ReadBooksService, useValue: mockService },
        { provide: ReadBookByIdService, useValue: mockService },
        { provide: DeleteBookService, useValue: mockService },
        { provide: UpdateBookService, useValue: mockService },
        { provide: TopBooksService, useValue: mockService },
      ],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});