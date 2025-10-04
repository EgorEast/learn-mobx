import axios from "axios";
import { action, makeAutoObservable } from "mobx";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

class TodosStore {
  todos: Todo[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getAll = action(async () => {
    this.isLoading = true;

    try {
      const res = await axios.get<{ todos: Todo[] }>(
        "https://dummyjson.com/todos",
      );
      this.todos = res.data.todos;
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  });
}

export const todosStore = new TodosStore();
