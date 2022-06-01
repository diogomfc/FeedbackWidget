import {MailAdapter, SendEmailData} from "../mail-adapter";
import nodemailer from 'nodemailer';

//serviço de email
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e5e1242fdf826f",
    pass: "e2d4683a857181"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail ({subject, body }: SendEmailData){
    //Envio de e-mail testes
  await transport.sendMail({
    from: 'Teste Projeto FeedBack <teste@feedback.com',
    to: 'Diogo Silva <diogosilvamfc@outlook.com>',
    subject,
    html: body
  });
 };
}