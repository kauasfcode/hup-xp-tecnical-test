import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteReviewRepository } from '../repositories/delete-review.repository';

@Injectable()
export class DeleteReviewService {
  constructor(private readonly repository: DeleteReviewRepository) {}

  async execute(id: string): Promise<void> {
    const deleted = await this.repository.delete(id);
    return      
  }
}