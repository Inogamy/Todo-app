import { createTodoHTML } from "./create-todo-html";
import { Todo } from "../models/todo-models";

let element;

export const renderTodos = ( elementId, todos = [] ) => {

    if ( !element ){
        element =  document.querySelector( elementId );
    }

    if ( !element ) throw Error (`Element ${ elementId } not found`)

    element.innerHTML = '';
    
    todos.forEach( todo => {
        element.append( createTodoHTML(todo) )
    })

}