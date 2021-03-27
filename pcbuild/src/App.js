import './App.css';
import './index.css';
import Home from './Home';
import Laptop from './Laptop';
import Login from './Login';
import Register from './Register';
import Custom from './Custom';
import Prebuilt from './Prebuilt';
import Motherboard from './Motherboard';
import Processor from './Processor';
import Ram from './Ram';
import Storage from './Storage';
import Graphicscard from './Graphicscard';
import Psu from './Psu';
import Cabinet from './Cabinet';
import Cooler from './Cooler';
import Accessory from './Accessory';
import Cart from './Cart';
import Checkout from './Checkout';
import Orders from './Orders';
import About from './About';
import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/home' component={Home}/>
        <Route path='/laptop' component={Laptop}/>
        <Route path='/custom' component={Custom}/>
        <Route path='/prebuilt' component={Prebuilt}/>
        <Route path='/mb' component={Motherboard}/>
        <Route path='/pro' component={Processor}/>
        <Route path='/ram' component={Ram}/>
        <Route path='/storage' component={Storage}/>
        <Route path='/gfx' component={Graphicscard}/>
        <Route path='/psu' component={Psu}/>
        <Route path='/cab' component={Cabinet}/>
        <Route path='/cooler' component={Cooler}/>
        <Route path='/accessory' component={Accessory}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/aboutus' component={About}/>
      </Switch>
    
  </>
  );
}

export default App;
