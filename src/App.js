import React, { useReducer } from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { ToDoContext } from './Context/ToDoContext';
import ToDoReducer from './Context/reducer';
import ToDoForm from './Components/ToDoForm';
import ToDos from './Components/ToDos';

const App = () => {
  const [todos, dispatch] = useReducer(ToDoReducer, []);
  return (
    <ToDoContext.Provider value={{todos, dispatch}}>
      <Container>
        <h1>ToDo App With Context API</h1>
        <ToDos/>
        <ToDoForm/>
      </Container>
    </ToDoContext.Provider>
  );
}

export default App;
