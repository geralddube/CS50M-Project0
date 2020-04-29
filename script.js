const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {

  let todoText = document.createTextNode(prompt("Please enter a TODO item"))
 console.log(todoText.textContent)
  if (todoText.textContent != "null" && todoText.textContent != "") {
    let todoCheckBox = document.createElement("input")
    todoCheckBox.type="checkbox"
    let todoItem = document.createElement("li")
    let todoDelete = document.createElement("button")
    todoDelete.innerText="DEL"
    
    todoItem.className=classNames.TODO_ITEM
    todoCheckBox.className = classNames.TODO_CHECKBOX
    todoDelete.className = classNames.TODO_DELETE

    todoItem.appendChild(todoCheckBox)
    todoItem.appendChild(todoText)
    todoItem.appendChild(todoDelete)

    list.appendChild(todoItem)
    
    let itemCount = Number(itemCountSpan.innerText) + 1
    itemCountSpan.innerText = itemCount

    let uncheckedItem = Number(uncheckedCountSpan.innerText) + 1
    uncheckedCountSpan.innerText = uncheckedItem
    
  } 
  
}

list.addEventListener("change", countUnchecked)

function countUnchecked() {
  let allCheckBoxes = list.getElementsByTagName("input")
  let unCheckedItems = 0
  let checkedItems = 0
  
  for (i=0; i < allCheckBoxes.length; i++){
    if (allCheckBoxes[i].type === 'checkbox' && allCheckBoxes[i].checked) {
      checkedItems++
    } else {
      unCheckedItems++
    }

  }
 
  uncheckedCountSpan.innerText = unCheckedItems
}



  