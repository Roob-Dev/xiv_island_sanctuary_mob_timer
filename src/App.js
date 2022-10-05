import "./App.css";
import MobTable from "./Table";
import EorzeaTime from "./Timer";

function App() {
  return (
    <div className="app">
      <div className="title">FFXIV Island Sanctuary Rare Mob Spawn Times</div>
      <EorzeaTime />
      <MobTable />
    </div>
  );
}

export default App;
