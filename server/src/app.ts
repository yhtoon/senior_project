import express, {
    Application,
    Request,
    Response,
    NextFunction,
} from 'express';
import { testResponse } from 'types';

// npm run dev => runs app in /src
// npm run build => compiles /src .ts files to .js in /dist
// npm start => runs app in /dist

const app: Application = express();

app.get('/api', (req: Request, res: Response, next: NextFunction) => {
    res.json({"one": 1, "two": "two", "three": [3, 3, 3]} as testResponse);
});

app.listen(6969, () => {
    console.log("sheeesh");
});