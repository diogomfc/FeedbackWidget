import { SubmitFeedbackUseCase } from './submit-feedback-use-case';
// test('sum 2 +2', () => {
//   expect(2 + 2).toBe(4);
// }
// );

//spies = espiões
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy },
);

//caso de uso de feedback
// Deve ser capaz de enviar feedback
describe('submit feedback use case', () => {
  it('should be able  to submit feedback', async () => {
   await expect(submitFeedback.execute({
      type: 'bug',
      comment: 'bug',
      screenshot: 'data:image/png;base64,1224sdsar5e4e584f841f',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });
  
  //não deve ser capaz de enviar comentários sem tipo
  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'bug',
      screenshot: 'data:image/png;base64,1224sdsar5e4e584f841f',
    })).rejects.toThrow();
  });

 //não deve ser capaz de enviar comentários sem comment
  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'bug',
      comment: '',
      screenshot: 'data:image/png;base64,1224sdsar5e4e584f841f',
    })).rejects.toThrow();
  });

  it('should be able to submit feedback with an invalid screenshot ', async () => {
    await expect(submitFeedback.execute({
       type: 'bug',
       comment: 'bug',
       screenshot: 'imag.jpg',
     })).rejects.toThrow();
   });

});
