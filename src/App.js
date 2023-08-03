import { useEffect } from "react";
import Wrapper from "./components/UI/Wrapper";
import Main from "./components/Main/Main";

function App() {
  useEffect(() => {
    document.title = "URL Shortener"
  }, []);

  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

export default App;
