import {
  getAnalyticsCommieTable,
  getAnalyticsIndividualTable,
  getAnalyticsStateTable,
  getCommieInfoTable,
  getCompetitorTable,
  getexploreFiltered,
} from "./dynamo";
import express, {
  Application,
  Request,
  Response,
} from 'express';
import { 
  AnalyticsCommieResponse,
  AnalyticsIndividualResponse,
  AnalyticsStateResponse,
  CommieInfoResponse,
  CompetitorResponse,
  ExploreResponse
} from 'types';

// npm run dev => runs app in /src
// npm run build => compiles /src .ts files to .js in /dist
// npm start => runs app in /dist

const app: Application = express();

app.get('/getAnalyticsCommie/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const response: AnalyticsCommieResponse = await getAnalyticsCommieTable(id);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.get('/getAnalyticsIndividual/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const response: AnalyticsIndividualResponse = await getAnalyticsIndividualTable(id);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.get('/getAnalyticsState/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const response: AnalyticsStateResponse = await getAnalyticsStateTable(id);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.get('/getCommieInfo/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const response: CommieInfoResponse = await getCommieInfoTable(id);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.get('/getCompetitor/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const response: CompetitorResponse = await getCompetitorTable(id);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.get('/getExplore/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const response: ExploreResponse = await getexploreFiltered(id);
    res.json(response);
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