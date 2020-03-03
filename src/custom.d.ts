// Todos 声明
interface ITodo {
  id: number
  user_id: number
  completed: boolean
  completed_at: any
  deleted: boolean
  description: string
  extra: Object<any>
  created_at: string
  updated_at: string
}

interface ITodoExtend extends ITodo {
  editable?: boolean
  editTodo: (id: number) => void
  update: (id: number, params: any) => void
}

interface ITodoItemState {
  editText: string
}

interface ITodosState {
  todos: Array<ITodoExtend>
}

interface ITodoInputState {
  description: string
}

interface ITodoInputProps {
  addTodo: (payload: any) => any
}

// Tomatoes 声明

interface ITomatoActionProps {
  startTomato: () => void
  updateTomato: (payload: any) => any
  unfinishedTomato: ITomato
}

interface ITomatoesProps {
  addTomato: (payload: any) => any
  updateTomato: (payload: any) => any
  initTomatoes: (payload: any[]) => void
  tomatoes: ITomato[]
}

interface ITomato {
  id: number
  user_id: number
  started_at: string
  ended_at: string
  description: string
  aborted: boolean
  manually_created: boolean
  duration: number
  extra: {}
  crated_at: string
  updated_at: string
}

interface ITomatoActionState {
  description: string
}
