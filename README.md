# senior_project
repository name is temporary

# run it
0. start at root directory (/senior_project)
1. cd server
2. npm install
    - this will install all modules listed as dependencies in package.json.
3. npm run dev
4. cd ../client
5. npm install
6. npm start

front: http://localhost:3000

back : http://localhost:6969/api

# making changes
within src folders of each

# client/server type sharing
All types are declared in `server/src/types/Types.ts`. In client/server directories, types can be imported as follows:
```
import { testResponse } from 'types';
```
source: https://stackoverflow.com/a/65046066