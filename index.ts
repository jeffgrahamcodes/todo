import express, { Request, Express, Response } from 'express';

const app: Express = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Express application');
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
