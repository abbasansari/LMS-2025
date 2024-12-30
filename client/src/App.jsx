import React from "react";
import ErrorBoundary from "./components/error";
import { Login } from "./pages/Login";

function App() {
  return (
    <ErrorBoundary>
      <Login />
    </ErrorBoundary>
  );
}

export default App;
