let todoList = [
  { item: 'Go to college regularly', dueDate: '2025-07-19' },
  { item: 'Learn javaScript', dueDate: '2025-07-19' },
  { item: 'Do your homework', dueDate: '2025-07-19' }
];

function addTodo() {
  let inputElement = document.querySelector('#todo');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  if (todoItem && todoDate) {
    todoList.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
  }
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <div>
        <div>${item}</div>
        <div>${formatDate(dueDate)}</div>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
      </div>
    `;
  }

  containerElement.innerHTML = newHtml;
}

// Optional: Format date from yyyy-mm-dd to dd-mm-yyyy
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-');
  return `${day}-${month}-${year}`;
}

// Initial render
displayItems();
