import {
  getAnalyticsCommieTable,
  getAnalyticsIndividualTable,
  getAnalyticsStateTable,
  getCommieInfoTable } from "./dynamo";
import express, {
  Application,
  Request,
  Response,
} from 'express';
import { CommieInfoResponse } from 'types';

// npm run dev => runs app in /src
// npm run build => compiles /src .ts files to .js in /dist
// npm start => runs app in /dist

const app: Application = express();

// call commie table

// app.get('/test', async (req: Request, res: Response) => {
//     const id: string = req.params.id;
//     try {
//       const candidates: CommieInfoResponse = await getCommieInfoTable("C00818278");
//       res.json(candidates);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ err: 'Something went wrong' });
//     }
//   });

app.listen(6969, () => {
    console.log("sheeesh");
});

// Debugging common errors (windows):

// 1. If port is in use, we need to kill the PID
// netstat -ano | findstr :6969
// taskkill /PID <PID> /F