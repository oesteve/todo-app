
interface Props extends Todo {
  onRemove: (payload: RemoveTodoPayload) => void
  onComplete: (payload: CompleteTodoPayload) => void
}

const Todo: React.FC<Props> = ({ id, onComplete, onRemove, completed, title }) => {
  function removeTask (): void {
    onRemove({ id })
  }

  function completeTask (): void {
    onComplete({ id, completed: !completed })
  }

  return (
    <li className={`${completed ? 'completed' : ''} py-3 px-5 text-gray-100 border-b-2 border-gray-900 last:border-b-0 flex items-center bg-gray-800 hover:bg-gray-700 first:rounded-t-xl last:rounded-b-xl`}>
        <input name={`todo-${id}`} id={`todo-${id}`} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 me-3" type="checkbox" onChange={completeTask} checked={completed}/>
        <label className="me-auto" htmlFor={`todo-${id}`}>{title}</label>
        <button className="rounded-xl p-2 hover:bg-gray-800 transition" onClick={removeTask} >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle"
               viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
    </li>
  )
}

export default Todo
