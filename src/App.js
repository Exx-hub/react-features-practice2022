import React from "react";
import "./App.css";
import ClassPrint from "./components/react-to-print/ClassPrint";

import FunctionalPrint from "./components/react-to-print/FunctionalPrint";
import WrongUsageOfRefs from "./components/hooksPractice/userefs/WrongUsageOfRefs";
import Counter from "./components/hooksPractice/userefs/Counter";
import AppRef from "./components/hooksPractice/userefs/hiteshRef";
import Test from "./Test";

function App() {
  return (
    <div className="">
      {/* <FunctionalPrint /> */}
      <ClassPrint />
      {/* <WrongUsageOfRefs /> */}
      {/* <Counter /> */}

      {/* <AppRef /> */}
      {/* <Test /> */}
    </div>
  );
}

export default App;
