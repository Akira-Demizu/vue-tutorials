// https://jp.vuejs.org/v2/examples/todomvc.html
const STORAGE_KEY = 'todos-vuejs-demo'
const todoStorage = {
  fetch: function () {
    const todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
export default todoStorage
