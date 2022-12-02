import { types } from "../types/types";



export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case types.addTodo:
            return [...initialState, action.payload];

        case types.resolveTodo:
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    todo.ejecutada = true
                }
                return todo;
            });

        case types.removeTodo:
            return initialState.filter(todo => todo.id !== action.payload);

        case types.editTodo:
            return initialState.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.titulo = action.payload.valor
                }
                return todo;
            });

        default:
            return initialState;
    }
}
