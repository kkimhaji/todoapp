import { log } from './utils';
import './todo.css';
import { printTodos } from './print-todos';

//입력했을 때 todo 추가
const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');

const todos = [
    {title:'HTML', isDone:false}
];

const print = ()=>{
    printTodos(todos);
}


const checkTodo = (event) => {
    event.preventDefault();
    console.log($input.value);

    const todo = {title: $input.value, isDone: false};
    todos.push(todo);

    //input 초기화
    $input.value = '';

    //todos 출력
    print();
};

$form.addEventListener('submit', checkTodo);

const deleteTodo = (index) =>{
    console.log('delete', index);
    //todos에서 index 번째 todo 삭제
    todos.splice(index, 1);
    print();
};

const toggleTodo = (index) =>{

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

//todos 뿌려주기
print();

