import "./css/App.css";

// Router
import { Switch, Route, BrowserRouter } from "react-router-dom";
// Components
import {
  HomePageContainer,
  AllEmployeeContainer,
  AddEmployeeContainer,
  EmployeeDetailContainer,
  EditEmployeeForm,
} from './components/containers';

import Footer from './components/views/Footer'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/employees" component={AllEmployeeContainer} />
          <Route exact path="/employees/:id" component={EmployeeDetailContainer} />
          <Route exact path="/employees/:id/edit" component={EditEmployeeForm} />
          <Route exact path="/add-employee" component={AddEmployeeContainer} />
        </Switch>        
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
