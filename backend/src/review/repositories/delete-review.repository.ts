import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from '../schema/review.schema';

//Responsible for delete the review in database

@Injectable()
export class DeleteReviewRepository {
  constructor(
    @InjectModel(Review.name) private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async delete(id: string): Promise<boolean> {
    const result = await this.reviewModel.findByIdAndDelete(id);
    return !!result;
  }
}