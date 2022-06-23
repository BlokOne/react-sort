import MainPage from "./components/main-page/main-page";
import React from "react";
import { useEffect } from 'react'
function useWindowDimensions() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return {
    width
  }

}


function App() {
  const { width } = useWindowDimensions()


  return (
    <div className="App">
      <MainPage props={width} />
    </div >
  );
}

export default App;
