var TodoItem = /** @class */ (function () {
    function TodoItem(description, dueDate) {
        this.description = description;
        this.dueDate = dueDate;
        this.isCompleted = false;
    }
    TodoItem.prototype.complete = function () {
        this.isCompleted = true;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addItem = function (description, dueDate) {
        var item = new TodoItem(description, dueDate);
        this.items.push(item);
    };
    TodoList.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    TodoList.prototype.completeItem = function (index) {
        var item = this.items[index];
        item.complete();
    };
    return TodoList;
}());
// Example usage
var todoList = new TodoList();
todoList.addItem("Buy groceries", new Date(2023, 3, 1));
todoList.addItem("Finish project", new Date(2023, 3, 10));
todoList.addItem("Go to trip", new Date(2023, 3, 15));
console.log("Initial to-do list:");
console.log(todoList.items);
todoList.removeItem(1);
console.log("To-do list after removing item at index 1:");
console.log(todoList.items);
todoList.completeItem(0);
console.log("To-do list after completing item at index 0:");
console.log(todoList.items);
