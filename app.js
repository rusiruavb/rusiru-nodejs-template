import express from 'express';
import log from './log';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 9096;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(PORT, () => {
  log.info(`API server up and running on PORT ${PORT}`);
});