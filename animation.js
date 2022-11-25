const todoInput = document.querySelector('#text');
const todoButton = document.querySelector('#addto');
const todoList = document.querySelector('.list');
const main = document.querySelector('.list-container');

const listbtn = document.querySelector('#picdown');
const listbtn1 = document.querySelector('#picup');

const liList = document.querySelector('.liststyle');
const liList1 = document.querySelector('.todos');



todoButton.addEventListener("click", todos);
todoList.addEventListener("click", deleteList);

listbtn.addEventListener("click", liststyle);
listbtn1.addEventListener("click", liststylebtn);


function todos(e){
  
  e.preventDefault();
  
  const mas = [];

  mas.push(...todoInput.value[0]);

  
  if(todoInput.value.trim().length > 5){
  main.style.display = "block";
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todos");

  const newList = document.createElement('li');
  newList.innerText = todoInput.value;
  newList.classList.add('liststyle');
  todoDiv.appendChild(newList);

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '<i id="icon" class="fa fa-close"></i>';
  delBtn.classList.add('del');
  todoDiv.appendChild(delBtn);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
  console.log("Task added Succesfully.");
  }else{
    alert("Please enter a acceptable task!");
    todoInput.value = "";
  }
}

function deleteList(e){
  e.preventDefault();

  const target = e.target;
  const main = document.querySelector('.list-container');
  
  if(target.classList[0] === "del"){
    const delList = target.parentElement;
    delList.classList.add('fall');
    delList.addEventListener('transitionend', () => {
    delList.remove();
      
    const todoList = document.querySelector('.list');

    
      // if(main.innerText.length== 0){
      //   main.style.visibility = 'hidden';
      // }else{
      //   main.style.visibility = 'visible';
      // }
      
    });

  }

}

function liststyle(e){

  e.preventDefault();

  listbtn.style.display = 'none';
  listbtn1.style.display = 'block';

  // mas.sort(function(a, b){return b - a});
  // todoList.style.list-style-type == 'b - a';


}


function liststylebtn(e){
  
  e.preventDefault();
  
  listbtn1.style.display = 'none';
  listbtn.style.display = 'block';

  // mas.sort(function(a, b){return a - b});
  // todoList.style.list-style-type == 'a - b';
  
}