import express from 'express';
import { json, urlencoded } from 'body-parser';
import logger from 'morgan';
import { info } from 'npmlog';

const app = express();
const port = process.env.PORT || 5000;

// Log requests to the console.
app.use(logger('dev'));

app.use(json());
app.use(urlencoded({ extended: false }));

// console.log that your server is up and running
app.listen(port, () => info(`==> 🌎 Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.status(200).send({ message: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
