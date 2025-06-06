import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from '../schema/book.schema';

//Responsible for get the reviews associated to a specific book
// based on the average rating calculated from associated reviews.


@Injectable()
export class GetTopBooksRepository {
  constructor(
    @InjectModel(Book.name)
    private readonly bookModel: Model<BookDocument>
  ) {}

  async execute(limit = 10) {
    return this.bookModel.aggregate([
      {
        // Join the "reviews" collection where review.bookId matches book._id
        $lookup: {
          from: 'reviews',
          localField: '_id',
          foreignField: 'bookId',
          as: 'reviews',  // the joined reviews will be stored in this array
        },
      },
      {

        // Add two new fields:
        // - avgRating: average of all review ratings (or 0 if there are none)
        // - reviewCount: number of reviews
        $addFields: {
          avgRating: {
            $cond: [
              { $gt: [{ $size: '$reviews' }, 0] },
              { $avg: '$reviews.rating' },
              0,
            ],
          },
          reviewCount: { $size: '$reviews' },
        },
      },
      {
        $sort: { avgRating: -1 },
      },
      {
        // Limit the number of results to the specified limit (default: 10)
        $limit: limit,
      },
      {
        // Select only the below fields to return in the final result
        $project: {
          _id: 1,
          name: 1,
          description: 1,
          author_name: 1,
          avgRating: 1,
          reviewCount: 1,
        },
      },
    ]);
  }
}