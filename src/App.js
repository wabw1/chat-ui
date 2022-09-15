import ChatApp from "components/ChatApp";
import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "theme";

//引入BrowserRouter通过HistoryAPI实现页面跳转
import { BrowserRouter as Router } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ChatApp />
      </ThemeProvider>
    </Router>
  );
}

export default App;
