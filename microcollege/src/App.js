import logo from './logo.svg';
import './App.css';
import  {Menu} from './upgrad/menu';
import {Carous} from './menuc/carousel.js';
import { Awsome } from './page3/awsome';
import { Card } from './cardview/card';


function App() {
  return (
    <div>
    <Menu/>
    <Carous/>
    <Awsome/>
    <Card/>
    </div>
  );
}

export default App;
