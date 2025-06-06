import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateReviewService } from './service/create-review.service';
import { IReviewEntity } from './interfaces/IReviewEntity';
import { Review } from './schema/review.schema';
import { ReadReviewByBookIdService } from './service/read-reviews-by-book-id.service';
import { DeleteReviewService } from './service/delete-review.service';
import { UpdateReviewService } from './service/update-review.service';

@Controller('review')
export class ReviewController {
    constructor(
        private readonly createReviewService: CreateReviewService,
        private readonly readReviewByBookIdService: ReadReviewByBookIdService,
        private readonly deleteReviewService: DeleteReviewService,
        private readonly updateReviewService: UpdateReviewService
        
    ){}
    //Responsible for creating a review 
    @Post("")
    async postReview(@Body() review: IReviewEntity):Promise<Review> {
        return await this.createReviewService.execute(review)
    }
    //Responsible for getting reviews by book
    @Get(':bookId')
    async getReviewsByBookId(@Param('bookId') bookId: string): Promise<IReviewEntity[]> {
        return this.readReviewByBookIdService.getReviewsByBookId(bookId);
    }
    

    //Responsible for updating a single review
     @Patch(':id')
    async updateReview(@Param('id') id: string, @Body() body: Partial<IReviewEntity>){
        return this.updateReviewService.execute(id, body);
    }

    //Deleted a review when requested
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteReview(@Param('id') id: string): Promise<void>{
        await this.deleteReviewService.execute(id);
  }
}
