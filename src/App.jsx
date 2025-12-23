import { useState } from "react";
import { BrowserRouter } from 'react-router-dom'
import AppRouter from "./component/Routes/AppRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
