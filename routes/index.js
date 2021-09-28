import express from 'express';

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amanda',
    date: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    date: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { messages });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/new', (req, res) => {
  messages.push({text:req.body.text, user:req.body.username, date: new Date()})
  res.redirect('/')
});

export default router;
