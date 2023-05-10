import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Homepage.css';
import { Link } from "react-router-dom";
import Footer from './Footer';

export default function HomePageView() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <main className="flex-grow-1">
        <section className="container my-5">
          <div className="row flex-column">
            <div className="col-md-12">
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

            <div className="col-md-12">
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
      <Footer />
    </div>
  );
};

