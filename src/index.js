import { log } from './utils';
import './todo.css';
import { printTodos } from './print-todos';
import { init as initFrom } from './form';

const todos = [
    {title:'HTML', isDone:false}
];

const print = ()=>{
    printTodos(todos);
}


const toggleTodo = (index) =>{
    //index에 맞는 todo의 isDone을 반전시켜야 함
    todos[index].isDone = !todos[index].isDone;
    print();
};

const deleteTodo = (index) =>{
    console.log('delete', index);
    //todos에서 index 번째 todo 삭제
    todos.splice(index, 1);
    print();
};
//delete, isDone
document.body.addEventListener('click', (event)=>{
    const index = parseInt(event.target.parentNode.dataset.index, 10);

    if(event.target.className == 'delete'){

        deleteTodo(index);
    }else if(event.target.className == 'toggle-checked'){
        toggleTodo(index);
    }
});

initFrom(todos);

//todos 뿌려주기
print();

