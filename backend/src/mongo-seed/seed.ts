import { connect, disconnect, model } from 'mongoose';
import { faker } from '@faker-js/faker';
import { BookSchema, Book } from '../../src/book/schema/book.schema';
import { Review, ReviewSchema } from '../../src/review/schema/review.schema';

async function seed() {
  try {
    await connect(process.env.MONGO_URI!);

    const BookModel = model(Book.name, BookSchema);
    const ReviewModel = model(Review.name, ReviewSchema, 'reviews');

    const booksData = Array.from({ length: 20 }, () => ({
      name: faker.book.title(),
      description: faker.lorem.paragraph({ min: 2, max: 4 }),
      author_name: faker.person.fullName(),
    }));

    const books = await BookModel.insertMany(booksData);
    console.log(`📚 Inserted ${books.length} books`);

    const allReviews: Review[] = [];

    for (const book of books) {
      const reviewCount = faker.number.int({ min: 1, max: 5 });

      for (let i = 0; i < reviewCount; i++) {
        const review: Review = {
          comment: faker.lorem.paragraph({ min: 1, max: 3 }),
          rating: faker.number.int({ min: 1, max: 5 }),
          bookId: book._id,
        };
        allReviews.push(review);
      }
    }

    await ReviewModel.insertMany(allReviews);
    console.log(`⭐ Inserted ${allReviews.length} reviews`);

    console.log('📈 Seed Summary:');
    console.log(`📖 Books: ${books.length}`);
    console.log(`🌟 Reviews: ${allReviews.length}`);
    console.log(`📊 Average reviews per book: ${(allReviews.length / books.length).toFixed(1)}`);
    console.log('🎉 Seed completed successfully');

  } catch (error) {
    console.error('❌ Seed error:', error);
    throw error;
  } finally {
    await disconnect();
  }
}

seed().catch(err => {
  console.error('Erro no seed:', err);
  process.exit(1);
});