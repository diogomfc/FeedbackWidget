import express from 'express';
import {prisma} from './prisma'
import nodemailer from 'nodemailer';
import {routes} from './routes';
//controle de segurança
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});

// SQlLite
// Prisma
// express