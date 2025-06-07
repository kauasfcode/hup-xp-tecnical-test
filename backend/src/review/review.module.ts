import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { CreateReviewService } from './service/create-review.service';
import { CreateReviewRepository } from './repositories/create-review.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './schema/review.schema';
import { ReadReviewByBookIdService } from './service/read-reviews-by-book-id.service';
import { ReviewByBookIdRepository } from './repositories/read-reviews-by-book-id.repository';
import { DeleteReviewService } from './service/delete-review.service';
import { UpdateReviewService } from './service/update-review.service';
import { DeleteReviewRepository } from './repositories/delete-review.repository';
import { UpdateReviewRepository } from './repositories/update-review.repository';

@Module({imports: [
    MongooseModule.forFeature([
      { name: Review.name, schema: ReviewSchema }, 
    ]),
  ],
  controllers: [ReviewController],
  providers: [CreateReviewService, DeleteReviewService, UpdateReviewService, ReadReviewByBookIdService, DeleteReviewService, UpdateReviewService ,ReviewByBookIdRepository, DeleteReviewRepository,UpdateReviewRepository, CreateReviewRepository]
})
export class ReviewModule {}
