import './App.css';


// import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg';
import NavBar from 'components/NavBar';


function App(props) {
  return (
    <div className="App">

      {/* <Avatar src={f1} size="48px" status="online" statusIconSize="8px" />
      <Icon icon={SmileIcon} />
      <Badge count={22} showZero /> */}
      <NavBar> navbar</NavBar>
    </div>
  );
}

export default App;
