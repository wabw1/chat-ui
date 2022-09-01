import './App.css';

import Avatar from './components/Avatar'
import Icon from 'components/Icon';
import Badge from 'components/Badge';


import f1 from 'assets/images/face-female-1.jpg';
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg';
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
