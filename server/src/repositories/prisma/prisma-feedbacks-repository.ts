import { FeedbackCreateData, FeedbackRepository } from "../feedbacks-repository";
import {prisma} from "../../prisma";

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create(data: FeedbackCreateData) {
    await prisma.feedBack.create({
      data: {
        type: data.type,
        comment: data.comment,
        screenshot: data.screenshot,
      },
    });

  }
}