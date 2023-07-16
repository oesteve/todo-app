
interface Todo {
  id: string
  title: string
  completed: boolean
}
type RemoveTodoPayload = Pick<Todo, 'id'>
type CompleteTodoPayload = Pick<Todo, 'id' | 'completed'>
