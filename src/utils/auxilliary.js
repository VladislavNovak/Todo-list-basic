export function nextTodoId (todos) {
  const maxId = todos.reduce((total, amount) => Math.max(total, amount.id), -1);
  return maxId + 1;
}
