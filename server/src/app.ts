// npm run dev => runs app in /src
// npm run build => compiles /src .ts files to .js in /dist
// npm start => runs app in /dist

import express, {
    Application,
    Request,
    Response,
    NextFunction,
} from 'express';

const app: Application = express();

type numArray = number[];
interface testResponse {
    one: number,
    two: string,
    three: numArray,
}

app.get('/api', (req: Request, res: Response, next: NextFunction) => {
    res.json({"one": 1, "two": "two", "three": [3, 3, 3]} as testResponse);
});

app.listen(6969, () => {
    console.log("sheeesh");
});