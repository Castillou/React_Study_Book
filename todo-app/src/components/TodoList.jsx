import TodoListItem from './TodoListItem';
import './TodoList.scss';

export default function TodoList({ todos, onRemove, onToggle }) {
	return (
		<div className="TodoList">
			{todos.map((todo) => {
				return (
					<TodoListItem
						key={todo.id}
						todo={todo}
						onRemove={onRemove}
						onToggle={onToggle}
					/>
				);
			})}
		</div>
	);
}
