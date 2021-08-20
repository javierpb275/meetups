import Todo from "./components/todo.component";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Learn Next.js" />
      <Todo text="Master Next.js" />
    </div>
  );
}

export default App;
