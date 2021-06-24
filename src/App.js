import Navbar from './Navbar';
import Home from './Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Blogdetails from './Blogdetails';
import Notfound from './Notfound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact> <Home /> </Route>
            <Route path="/create"> <Create /> </Route>
            <Route path="/blog/:id"> <Blogdetails /> </Route>
            <Route path="*"> <Notfound /> </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
