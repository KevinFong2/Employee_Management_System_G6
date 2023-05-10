import "./css/App.css";

// Router
import { Switch, Route, BrowserRouter } from "react-router-dom";
// Components
import {
  HomePageContainer,
  AllTasksContainer,
  AddTaskContainer
} from './components/containers';

import Footer from './components/views/Footer'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/tasks" component={AllTasksContainer} />
          <Route exact path="/add-task" component={AddTaskContainer} />
        </Switch>        
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;