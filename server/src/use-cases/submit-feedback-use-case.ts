import { FeedbackRepository } from "../repositories/feedbacks-repository";
import {MailAdapter} from "../adapters/mail-adapter";

interface SubmitFeedbackUseCaseRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: FeedbackRepository,
    private mailAdapter: MailAdapter,

    ) {}
  async execute(data: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = data;

    //Regra de negócios
    if(screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error('Invalid screenshot format');
    }
    if(!type){
      throw new Error('Invalid type');
    }
    if(!comment){
      throw new Error('Invalid comment');
    }

    await this.feedbackRepository.create({
          type,
          comment,
          screenshot,
        });
        
    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        `<div style=" font-family: sans-serif; font-size: 16px; color: #121212" >`,
        `<h1>Novo Feedback</h1>`,
        `<p>Tipo: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `<p>Screenshot: ${screenshot}</p>`,
        `</div>`,
      ].join(''),
    });
  }
}