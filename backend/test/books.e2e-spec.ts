import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module'; 

describe('BooksController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], 
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/books/top (GET) - should return top rated books', async () => {
    const response = await request(app.getHttpServer())
      .get('/books/top')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);

    
    const first = response.body[0];
    expect(first).toHaveProperty('_id');
    expect(first).toHaveProperty('name');
    expect(first).toHaveProperty('description');
    expect(first).toHaveProperty('author_name');
    expect(first).toHaveProperty('avgRating');
    expect(first).toHaveProperty('reviewCount');

    
    for (let i = 1; i < response.body.length; i++) {
      expect(response.body[i - 1].avgRating).toBeGreaterThanOrEqual(response.body[i].avgRating);
    }
  });
});