import React, { useContext, useState } from "react";
import { ToDoContext } from './../Context/ToDoContext';
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupText
} from "reactstrap";
import { v4 } from "uuid";
import { ADD_TODO, REMOVE_TODO } from "../Context/action.types";

const ToDoForm = () => {

    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(ToDoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todoString === ""){
            return alert("Please Enter Your ToDo Task");
        }

        const todo = {
            todoString,
            id: v4()
        }

        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodoString("");
    };

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="ToDo"
                        id="todo"
                        placeholder="Your Next Todo"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                        //ToDo: value, onchange 
                    />
                    <InputGroupText>
                        <Button
                        color="warning"
                        // ToDo : onclick
                        >
                        ADD
                        </Button>
                    </InputGroupText>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default ToDoForm;