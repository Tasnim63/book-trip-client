import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import AddNewService from './Components/AddNewService/AddNewService';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Components/Orders/MyOrders/MyOrders'
import ManageAllOrders from './Components/Orders/ManageAllOrders/ManageAllOrders';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/addNewService">
              <AddNewService />
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking />
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/manageAllBookings">
              <ManageAllOrders />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
