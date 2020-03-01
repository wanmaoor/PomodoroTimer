// Todos 组件声明
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
  editable: boolean
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
  addTodo: (params: any) => void
}
