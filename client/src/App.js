import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Register from './components/Register';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import Search from './components/searchBar';
import Footer from './components/Footer';
import './css/app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';

// Made App a class based component to store state
const App = () => {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar />
          <div id="main-content">
            <Routes>
              <Route path='/' element={ <Main /> } />
              <Route path='/signin' element={ <SignIn /> } />
              <Route path='/register' element={ <Register /> } />
              {/* <Route path='songs/create' element={ <CreateForm /> } /> */}
              
              {/* Page we want to protect */}
              <Route element={<ProtectedRoutes />}>
                <Route path='songs/create' element={<CreateForm />} />
                <Route path='songs/edit' element={<EditForm />} />
              </Route>

              <Route path="*" element= { <NotFound /> } />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>   
      </React.Fragment>
    );
}

const NotFound = () => {

  return <h1>Not Found</h1>

}

export default App;
