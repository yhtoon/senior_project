import {
  getAnalyticsCommieTable,
  getAnalyticsIndividualTable,
  getAnalyticsStateTable,
  getCommieInfoTable,
  getCompetitorTable,
  getCommieMaster,
  getCandidateMaster,
} from "./dynamo";
import express, {
  Application,
  Request,
  Response,
} from 'express';
import { CommieInfoResponse, CompetitorResponse, CommieInfoModal, CAND_INFO, AnalyticsCommieResponse, AnalyticsIndividualResponse, AnalyticsStateResponse } from 'types';

// npm run dev => runs app in /src
// npm run build => compiles /src .ts files to .js in /dist
// npm start => runs app in /dist
const app: Application = express();

// call commie table
app.get('/getAnalyticsCommie/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const response: AnalyticsCommieResponse = await getAnalyticsCommieTable(id);
    res.json(response);
    console.log(JSON.stringify(response))
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
    console.log(JSON.stringify(response))
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
    console.log(JSON.stringify(response))
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

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

app.get('/getCommieMaster/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const committees: CommieInfoModal = await getCommieMaster(id);
    res.json(committees);
    console.log(JSON.stringify(committees))
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
    console.log(JSON.stringify(response))
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.get('/getCandidateMaster/:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const candidate: CAND_INFO = await getCandidateMaster(id);
    res.json(candidate);
    console.log(JSON.stringify(candidate))
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});


// app.get('/getCompetitor/:id', async (req: Request, res: Response) => {
//   const id: string = req.params.id;
//   try {
//     const candidates: CompetitorResponse = await getCompetitorTable(id);
//     res.json(candidates);
//     console.log(JSON.stringify(candidates))
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ err: 'Something went wrong' });
//   }
// });

app.listen(6969, () => {
    console.log("sheeesh");
});

// Debugging common errors (windows):

// 1. If port is in use, we need to kill the PID
// netstat -ano | findstr :6969
// taskkill /PID <PID> /F