import express from 'express';
import path from 'path';
import { routes } from './routes';

const app = express();
const port = 3333;

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
  `Server running on port ${port}`;
});