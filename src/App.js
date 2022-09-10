import React from "react";
import "./App.css";
import ClassPrint from "./components/react-to-print/ClassPrint";

import FunctionalPrint from "./components/react-to-print/FunctionalPrint";

import Test from "./Test";

import TestGorilla from "./TestGorilla";

import UseAxiosComponent from "./components/customHooks/useAxiosExamples/UseAxiosComponent";
import UseAxiosFunctionComponent from "./components/customHooks/useAxiosExamples/UseAxiosFunctionComponent";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import WelcomPage from "./WelcomPage";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  return (
    <div className="App">
      {/* <FunctionalPrint /> */}
      {/* <ClassPrint /> */}

      {/* <Test /> */}

      {/* <TestGorilla /> */}

      {/* <UseAxiosComponent /> */}
      {/* <UseAxiosFunctionComponent /> */}

      {/* <ClassComponent text={hello} /> */}
      {/* <FunctionComponent /> */}

      <WelcomPage title={<WelcomeMessage userName="Joe" />} />
    </div>
  );
}

export default App;
