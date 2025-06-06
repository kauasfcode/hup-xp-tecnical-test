import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { CreateReviewService } from './service/create-review.service';
import { CreateReviewRepository } from './repositories/create-review.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './schema/review.schema';


@Module({imports: [
    MongooseModule.forFeature([
      { name: Review.name, schema: ReviewSchema }, 
    ]),
  ],
  controllers: [ReviewController],
  providers: [CreateReviewService, CreateReviewRepository]
})
export class ReviewModule {}
