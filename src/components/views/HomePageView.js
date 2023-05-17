import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Homepage.css';

export default function HomePageView() {
  return (
    <div>
      <main>
        <section className="container my-5">
          <div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Employee Management</h5>
                  <p className="card-text">
                    Manage your employees with ease. Add, edit, and view employee information.
                  </p>
                  <Link to="/employees" className="btn btn-primary">
                    View Employees
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Task Management</h5>
                  <p className="card-text">
                    Assign and track tasks for your employees. Add, edit, and view task information.
                  </p>
                  <Link to="/tasks" className="btn btn-primary">
                    View Tasks
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

