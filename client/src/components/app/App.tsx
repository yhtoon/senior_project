import React, { useEffect, useState } from 'react';
import { testResponse } from 'types';

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
