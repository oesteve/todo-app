import { useEffect, useState } from 'react'
import { Todos } from './components/Todos.tsx'
import Footer from './components/Footer.tsx'
import Input from './components/Input.tsx'

const todoTasks: Todo[] = [
  {
    id: '1',
    title: 'Learn React',
    completed: true
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Learn GraphQL',
    completed: false

  }, {
    id: '4',
    title: 'Learn React Native',
    completed: false
  }
]

export enum TodoFilter {
  All = 'all',
  Completed = 'completed',
  Active = 'active'
}

function App (): JSX.Element {
  const [todos, setTodos] = useState(todoTasks)
  const [visibleTodos, setVisibleTodos] = useState(todoTasks)
  const [selectedFilter, setSelectedFilter] = useState(TodoFilter.Active)

  useEffect(() => {
    setVisibleTodos(todos.filter(todo => {
      if (selectedFilter === TodoFilter.Completed) {
        return todo.completed
      }

      if (selectedFilter === TodoFilter.Active) {
        return !todo.completed
      }

      return true
    }))
  }, [todos, selectedFilter])

  function removeTodo (payload: RemoveTodoPayload): void {
    setTodos(todos.filter(todo => todo.id !== payload.id))
  }

  function completeTodo (payload: CompleteTodoPayload): void {
    setTodos(todos.map(todo => ({
      ...todo,
      completed: todo.id === payload.id ? payload.completed : todo.completed
    })))
  }

  function clearCompleted (): void {
    setTodos(todos.filter(todo => !todo.completed))
  }

  function selectFilter (filter: TodoFilter): void {
    setSelectedFilter(filter)
  }

  const itemsLeft = todos.filter(todo => !todo.completed).length

  function addTodo (taskName: string): void {
    setTodos([...todos, {
      id: crypto.randomUUID(),
      title: taskName,
      completed: false
    }])
  }

  return (
    <div className="flex flex-col justify-center items-center pt-40 text-white">
      <section className="max-w-xl w-full shadow-lg bg-gray-900 p-8 rounded-xl">
        <header>
          <h1 className="text-3xl w-full text-center text-white font-bold mb-12">
            Todo List
          </h1>
        </header>
        <Input onEnter={addTodo}/>
        <Todos todos={visibleTodos} onRemove={removeTodo} onComplete={completeTodo}/>
        <Footer onSelectFilter={selectFilter} onClearCompleted={clearCompleted} itemsLeft={itemsLeft} selectedFilter={selectedFilter}/>
      </section>
    </div>
  )
}

export default App
