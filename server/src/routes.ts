import express from 'express';

import {PrismaFeedbackRepository} from './repositories/prisma/prisma-feedbacks-repository';
import {SubmitFeedbackUseCase} from './use-cases/submit-feedback-use-case';
import {NodemailerMailAdapter} from '../src/adapters/nodemailer/nodemailer-mail-adapter';

// GET, POST, PUT,PATCH, DELETE

// GET = Buscar informações
// POST = Criar informações
// PUT = Alterar informações
// PATCH = Modificar informações
// DELETE = Deletar informações

export const routes = express.Router();

// //serviço de email
// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "e5e1242fdf826f",
//     pass: "e2d4683a857181"
//   }
// });

//POST

routes.post('/feedbacks', async (req, res) => { 

  const {type, comment, screenshot} = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();


  const submitFeedbackUseCase= new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  )

 await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  });

  // //Envio de e-mail testes
  // await transport.sendMail({
  //   from: 'Teste Projeto FeedBack <teste@feedback.com',
  //   to: 'Diogo Silva <diogosilvamfc@outlook.com>',
  //   subject: 'Novo Feedback',
  //   text: 'Feedback',
  //   html: [
  //     `<div style=" font-family: sans-serif; font-size: 16px; color: #121212" >`,
  //     `<h1>Novo Feedback</h1>`,
  //     `<p>Tipo: ${type}</p>`,
  //     `<p>Comentário: ${comment}</p>`,
  //     `<p>Screenshot: ${screenshot}</p>`,
  //     `</div>`,
  //   ].join(''),
  // });




  //return res.status(201).json({ data: feedback});
  
  return res.status(201).send()
});


