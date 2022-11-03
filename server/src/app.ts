import { getCandidates, getCandidatesByID } from "./dynamo";
import express, {
    Application,
    Request,
    Response,
} from 'express';
import mysql from 'mysql';
import { testResponse } from 'types';

// npm run dev => runs app in /src
// npm run build => compiles /src .ts files to .js in /dist
// npm start => runs app in /dist

const app: Application = express();

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"cs179g4",
  database:"cs179g4_db",
});

// mysql test
app.get('/mysql-getCandidates', (req: Request, res: Response) => {
  const q: string = "SELECT * FROM cs179g4_db.candidate_master;";
  db.query(q, (err, data) => {
    if (err) {
      res.json(err);
    }
    res.json(data);
  });
});

// dynamoDB test
app.get('/dynamodb-getCandidates', async (req: Request, res: Response) => {
  try {
    const candidates = await getCandidates();
    res.json(candidates);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

app.get('/dynamodb-getCandidates/id=:id', async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const candidates = await getCandidatesByID(id);
    res.json(candidates);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});

//generic api test
app.get('/api', (req: Request, res: Response) => {
  res.json({"one": 1, "two": "two", "three": [3, 3, 3]} as testResponse);
});

app.listen(6969, () => {
    console.log("sheeesh");
});

// Debugging common errors (windows):

// 1. If port is in use, we need to kill the PID
// netstat -ano | findstr :6969
// taskkill /PID <PID> /F

// 2. mysql auth error
// Execute in workbench (https://stackoverflow.com/a/50131831)
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>'; // In workbench