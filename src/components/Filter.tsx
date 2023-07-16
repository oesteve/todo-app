import { TodoFilter } from '../App.tsx'
import React from 'react'

interface FilterProps {
  selectedFilter: TodoFilter
  onSelectFilter: (filter: TodoFilter) => void
}

// Capitalize the first letter of a string
function capitalize (string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Filter: React.FC<FilterProps> = ({ selectedFilter, onSelectFilter }) => {
  return (<ul className="flex flex-row items-center rounded">
      {Object.values(TodoFilter).map(filter => (
        <li key={filter}
            className={`px-2 py-1 border-e-2 last:border-e-0 border-gray-900 ${selectedFilter === filter ? 'bg-gray-700' : 'bg-gray-800'} hover:bg-gray-600 first:rounded-s-lg last:rounded-e-lg transition`}>
          <a href={`#/${filter}`} className={filter === selectedFilter ? 'selected' : ''} onClick={function () {
            onSelectFilter(filter)
          }}>{capitalize(filter) }</a>
        </li>
      ))}
    </ul>
  )
}

export default Filter
