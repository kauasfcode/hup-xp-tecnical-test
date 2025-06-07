import { UpdateReviewRepository } from "../repositories/update-review.repository";
import { IReviewEntity } from "../interfaces/IReviewEntity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UpdateReviewService {
  constructor(private readonly repository: UpdateReviewRepository) {}

  async execute(id: string, data: Partial<IReviewEntity>){
    const updated = await this.repository.update(id, data);
    if (updated){
        return updated
    }
    return
  }
}