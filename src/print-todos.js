const $todos = document.querySelector('#todos');


const printTodos = (todos)=>{
    const html = todos.map((todo, index) =>{
        const isDoneclass = todo.isDone ? 'checked':'';

        return  `<li data-index="${index}" class="${isDoneclass}">
                    <button class="delete">x</button>
                    <input type="checkbox" class="toggle-checked" ${isDoneclass}/>
                    <span class="text">${todo.title}</span>
                </li>`;
    });

    $todos.innerHTML = `<ul>${html.join('')}</ul>`;
};

export {printTodos};
