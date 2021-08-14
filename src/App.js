import "./App.css";
import { NavBar } from "./components/navBar/NavBar.js";
import { ItemListComponent } from "./components/container/ItemListComponent.js";

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListComponent />;
        </div>
    );
}

export default App;
