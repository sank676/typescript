class TodoItem {
    description: string;
    dueDate: Date;
    isCompleted: boolean;
    
    constructor(description: string, dueDate: Date) {
      this.description = description;
      this.dueDate = dueDate;
      this.isCompleted = false;
    }
    
    complete(): void {
      this.isCompleted = true;
    }
  }
  
  class TodoList {
    items: TodoItem[];
    
    constructor() {
      this.items = [];
    }
    
    addItem(description: string, dueDate: Date): void {
      const item = new TodoItem(description, dueDate);
      this.items.push(item);
    }
    
    removeItem(index: number): void {
      this.items.splice(index, 1);
    }
    
    completeItem(index: number): void {
      const item = this.items[index];
      item.complete();
    }
  }
  
  // Example usage
  const todoList = new TodoList();
  
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