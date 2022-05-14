import React from "react";
import "./App.css";
import ClassPrint from "./components/react-to-print/ClassPrint";

import FunctionalPrint from "./components/react-to-print/FunctionalPrint";
import WrongUsageOfRefs from "./components/hooksPractice/userefs/WrongUsageOfRefs";
import Counter from "./components/hooksPractice/userefs/Counter";
import AppRef from "./components/hooksPractice/userefs/hiteshRef";
import Test from "./Test";
import ParentComponent from "./components/hooksPractice/useCallback/ParentComponent";
import MemoCounter from "./components/hooksPractice/useMemo/MemoCounter";
import EffectTest from "./components/hooksPractice/useLayoutEffect/EffectTest";
import ModalExample from "./components/hooksPractice/useLayoutEffect/ModalExample";
import SampleCallback from "./components/hooksPractice/useCallback/Sample";
import AppPerormanceLag from "./components/hooksPractice/useMemo/AppPerormanceLag";
import ExampleLayoutEffect from "./components/hooksPractice/useLayoutEffect/ExampleLayoutEffect";
import TimerUseRef from "./components/hooksPractice/userefs/TimerUseRef";
import TestGorilla from "./TestGorilla";

function App() {
  return (
    <div className="App">
      {/* <FunctionalPrint /> */}
      {/* <ClassPrint /> */}
      {/* <WrongUsageOfRefs /> */}
      {/* <Counter /> */}

      {/* <AppRef /> */}
      {/* <Test /> */}
      {/* <ParentComponent /> */}
      {/* <MemoCounter /> */}

      {/* <EffectTest /> */}
      {/* <ModalExample /> */}
      {/* <ExampleLayoutEffect /> */}

      {/* <SampleCallback /> */}
      {/* <AppPerormanceLag /> */}

      <TimerUseRef />
      <TestGorilla />
    </div>
  );
}

export default App;
