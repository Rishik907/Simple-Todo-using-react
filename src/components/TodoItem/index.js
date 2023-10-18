// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, onDeleteTodo} = props
  const {title, id} = todo

  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="list-of-list-container">
      <p className="para">{title}</p>
      <button onClick={onDelete} className="button-val" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
