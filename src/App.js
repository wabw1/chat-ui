import ChatApp from "components/ChatApp";
import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "theme";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <ChatApp />
    </ThemeProvider>
  );
}

export default App;
