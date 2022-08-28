import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
		<>
			<div className="todo-app">
				<TodoList />
			</div>
			<Footer note="Copyrights Reserved &copy; Jekeel Shah (20CS080)" />
		</>
  );
}

export default App;
