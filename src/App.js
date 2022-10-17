import MobTable from "./Table";
import EorzeaTime from "./Timer";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <div> 
        <NavBar />
        <EorzeaTime />
        <MobTable />
      </div>
    </div>
  );
}

export default App;
