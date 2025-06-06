import { Body, Controller, Post } from '@nestjs/common';
import { CreateReviewService } from './service/create-review.service';
import { IReviewEntity } from './interfaces/IReviewEntity';
import { Review } from './schema/review.schema';

@Controller('review')
export class ReviewController {
    constructor(
        private readonly createReviewService: CreateReviewService
    
    ){}

    @Post("")
    async postReview(@Body() review: IReviewEntity):Promise<Review> {
        return await this.createReviewService.execute(review)
    }
}