import React, { useEffect, useState } from 'react';

type numArray = number[];
interface testResponse {
    one: number,
    two: string,
    three: numArray,
}

const App: React.FC = () => {

  const [stuff, setStuff] = useState<testResponse>();
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setStuff(data);
      }
    )
  }, []);

  console.log(stuff);

  return (
    <div>
      {
        (stuff) && [stuff.one, stuff.two, stuff.three]
      }
    </div>
  );
}

export default App;
