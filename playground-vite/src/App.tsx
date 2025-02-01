import {
  Account,
  Notification,
  Search,
  Translation,
  React,
} from "@iis-ssb/icons";
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-4 items-center justify-between mb-8 text-white">
        <div className="text-6xl  text-yellow-400">
          <Search />
        </div>
        <div className="text-6xl text-amber-700">
          <Translation />
        </div>

        <div>
          <Account className="size-40 text-blue-500" />
        </div>
        <div>
          <Notification className="size-40 text-red-400" />
        </div>
        <div>
          <React className="size-40 text-blue-500" />
        </div>
      </div>
      <div className="bg-white w-full h-16 ">{count}</div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
