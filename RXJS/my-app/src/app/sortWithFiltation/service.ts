import { BehaviorSubject, combineLatest, map } from "rxjs";

export type Task = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type Filter = 'all' | 'completed' | 'active';
export type Sort = 'newest' | 'oldest';

class TaskService {
  private _tasks$ = new BehaviorSubject<Task[]>([]);
  private _filter$ = new BehaviorSubject<Filter>('all');
  private _sort$ = new BehaviorSubject<Sort>('newest');

  public readonly filteredTasks$ = combineLatest([
    this._tasks$,
    this._filter$,
    this._sort$
  ]).pipe(
    map(([tasks, filter, sort]) => {
      let filtered = tasks;
      if (filter === 'completed') {
        filtered = filtered.filter(task => task.completed);
      } else if (filter === 'active') {
        filtered = filtered.filter(task => !task.completed);
      }

      //sort
      filtered = filtered.sort((a, b) => {
        return sort === 'newest' 
        ? b.createdAt.getTime() - a.createdAt.getTime() 
        : a.createdAt.getTime() - b.createdAt.getTime();
      })

      return filtered;
    })
  )

  addTask(text: string) {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date()
    };
    this._tasks$.next([...this._tasks$.value, newTask]);
  }

  toggleTask(id: number) {
    const updated = this._tasks$.value.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this._tasks$.next(updated);
  }

  setFilter(filter: Filter) {
    this._filter$.next(filter);
  }

  setSort(sort: Sort) {
    this._sort$.next(sort);
  }
}

export const taskService = new TaskService();
