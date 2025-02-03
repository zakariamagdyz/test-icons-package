import {
  Account,
  Notification,
  Search,
  Translation,
  ReactIcon,
  FilledGrid,
} from "@iis-ssb/icons";
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-4 items-center justify-between mb-8 text-white">
        <div className="text-6xl  text-yellow-400">
          <Search className="size-24" />
        </div>
        <div className="text-3xl text-amber-700">
          <Translation size={"1em"} />
        </div>

        <div>
          <Account size={80} className="text-red-400" />
        </div>
        <div>
          <Notification className="text-red-400" variant="outline" />
        </div>
        <div>
          <ReactIcon className="text-blue-500" variant="default" />
        </div>
        <FilledGrid color="yellow" />
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
