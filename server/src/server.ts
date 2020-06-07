import express from 'express';
import Routes from './routes';
import path from 'path';
import cors from 'cors';

import { errors } from 'celebrate';

const app = express();

app.use(cors())

app.use(express.json());
app.use(Routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
})