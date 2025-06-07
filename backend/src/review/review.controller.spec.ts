import { Test, TestingModule } from '@nestjs/testing';
import { ReviewController } from './review.controller';
import { CreateReviewService } from './service/create-review.service';
import { ReadReviewByBookIdService } from './service/read-reviews-by-book-id.service';
import { DeleteReviewService } from './service/delete-review.service';
import { UpdateReviewService } from './service/update-review.service';
import { CreateReviewRepository } from './repositories/create-review.repository'; // ajuste o caminho
import { ReviewByBookIdRepository } from './repositories/read-reviews-by-book-id.repository';
import { DeleteReviewRepository } from './repositories/delete-review.repository';
import { UpdateReviewRepository } from './repositories/update-review.repository';

describe('ReviewController', () => {
  let controller: ReviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewController],
      providers: [
        CreateReviewService,
        ReadReviewByBookIdService,
        DeleteReviewService,
        UpdateReviewService,
        {
          provide: CreateReviewRepository,
          useValue: {},
        },
        {
          provide: ReviewByBookIdRepository,
          useValue: {},
        },
        {
          provide: DeleteReviewRepository,
          useValue: {},
        },
        {
          provide: UpdateReviewRepository,
          useValue: {},
        },
      ],
    }).compile();

  controller = module.get<ReviewController>(ReviewController);
});

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});