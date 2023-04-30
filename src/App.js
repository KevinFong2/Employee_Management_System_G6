import "./css/App.css";

// Router
import { Switch, Route, BrowserRouter } from "react-router-dom";
// Components
import {
  HomePageContainer
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
        </Switch>        
      </BrowserRouter>
    </div>
  );
}

export default App;
