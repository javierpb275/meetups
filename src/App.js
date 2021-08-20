import Backdrop from "./components/backdrop.component";
import Modal from "./components/modal.component";
import Todo from "./components/todo.component";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
     <Todo text="Learn React"/>
     <Todo text="Master React"/>
     <Todo text="Learn Next.js"/>
     <Todo text="Master Next.js"/>
     <Modal/>
     <Backdrop/>
    </div>
  );
}

export default App;
