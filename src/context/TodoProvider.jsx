import { useTodo } from "../hooks/useTodo";
import { TodoContext } from "./todoContext"

export const TodoProvider = ({ children }) => {
    const {todoList, addToTodoList, removeTodo, resolveTodo, editTodo } = useTodo();

    return (
        <TodoContext.Provider value= {{ todoList, addToTodoList, removeTodo, resolveTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    )
}
