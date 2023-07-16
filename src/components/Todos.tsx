import Todo from './Todo.tsx'

interface Props {
  todos: Todo[]
  onRemove: (payload: RemoveTodoPayload) => void
  onComplete: (payload: CompleteTodoPayload) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemove, onComplete }) => {
  return (
    <section>
      <ul className="todo-list">
        {todos.map((todo) =>
          <Todo key={todo.id} {...todo}
                onComplete={onComplete}
                onRemove={onRemove}
          />)}
      </ul>
    </section>
  )
}
