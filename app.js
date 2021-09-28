import express from 'express';
import router from './routes/index.js';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.listen(PORT);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(router);

app.use((req, res) => {
  res.status(404).render('404');
});
