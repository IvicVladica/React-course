import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Beograd", "Nis", "Novi Sad", "Kragujevac", "Kursumlija"];
  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App;
