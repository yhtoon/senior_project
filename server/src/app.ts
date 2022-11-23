import express, {
    Application,
} from 'express';

// npm run dev => runs app in /src
// npm run build => compiles /src .ts files to .js in /dist
// npm start => runs app in /dist

const app: Application = express();

app.listen(6969, () => {
    console.log("sheeesh");
});

// Debugging common errors (windows):

// 1. If port is in use, we need to kill the PID
// netstat -ano | findstr :6969
// taskkill /PID <PID> /F