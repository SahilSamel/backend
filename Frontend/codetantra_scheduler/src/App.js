

import { createContext, useReducer } from 'react';
import './App.css';
import FrontPage from './FrontPage';
import Login from './Login';
import Navbar from './Navbar';
import { initialState, reducer } from './Reducer/UseReducer';



export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <div className="App">
    <Navbar/>

      <FrontPage/>
      {/* <Login/> */}
      
    </div>
    </UserContext.Provider>
    </>
  );
}

export default App;
