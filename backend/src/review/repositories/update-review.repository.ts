import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from '../schema/review.schema';
import { IReviewEntity } from '../interfaces/IReviewEntity';

//Responsible for updating the review in database

@Injectable()
export class UpdateReviewRepository {
  constructor(
    @InjectModel(Review.name) private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async update(id: string, data: Partial<IReviewEntity>){
    const updated = await this.reviewModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true },
    );
    return updated?.toObject();
  }
}