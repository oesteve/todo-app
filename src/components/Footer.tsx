import { type TodoFilter } from '../App.tsx'
import React from 'react'
import Filter from './Filter.tsx'

interface CounterProps {
  itemsLeft: number
}

const Counter: React.FC<CounterProps> = ({ itemsLeft }) => {
  return <div>
    <strong> {itemsLeft}</strong> item left
  </div>
}

interface FooterProps extends CounterProps {
  onSelectFilter: (filter: TodoFilter) => void
  onClearCompleted: () => void
  selectedFilter: TodoFilter
}

const Footer: React.FC<FooterProps> = ({ itemsLeft, onSelectFilter, onClearCompleted, selectedFilter }) => (
  <footer className="flex flex-row justify-between items-center my-5">
    <Counter itemsLeft={itemsLeft}/>
    <Filter selectedFilter={selectedFilter} onSelectFilter={onSelectFilter}/>
    <div>
      <button className="bg-gray-800 hover:bg-gray-700 py-1 px-4 rounded-lg transition" onClick={onClearCompleted}>Clear completed</button>
    </div>
  </footer>
)

export default Footer
