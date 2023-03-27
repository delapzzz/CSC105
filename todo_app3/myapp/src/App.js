import "./App.css";
import Home from "./components/Home";
import Todo from "./components/Todo";
import TodoPage from "./pages/TodoPage";
function App(){
    return(
        <TodoPage/>
        // <div className="App">
        //     {/* <div className="home">
        //         <Home />
        //     </div>
        //     <div className="todo">
        //         <Todo />
        //     </div> */}
        // </div>
    );
}
export default App;