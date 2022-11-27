import {
  getAnalyticsCommieTable,
  getAnalyticsIndividualTable,
  getAnalyticsStateTable,
  getCommieInfoTable,
  getCompetitorTable,
} from "./dynamo";
import express, {
  Application,
  Request,
  Response,
} from 'express';
import { CommieInfoResponse, CompetitorResponse } from 'types';

// npm run dev => runs app in /src
// npm run build => compiles /src .ts files to .js in /dist
// npm start => runs app in /dist

const app: Application = express();

// call commie table

app.get('/getCommieInfo/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const candidates: CommieInfoResponse = await getCommieInfoTable(id);
    res.json(candidates);
    console.log(JSON.stringify(candidates))
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.get('/getCompetitor/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const candidates: CompetitorResponse = await getCompetitorTable(id);
    res.json(candidates);
    console.log(JSON.stringify(candidates))
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.listen(6969, () => {
    console.log("sheeesh");
});

// Debugging common errors (windows):

// 1. If port is in use, we need to kill the PID
// netstat -ano | findstr :6969
// taskkill /PID <PID> /F