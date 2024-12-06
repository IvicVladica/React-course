import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Beograd", "Nis", "Novi Sad", "Kragujevac", "Kursumlija"];

  const hanleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={hanleSelectItem}/>
    </div>
  );
}

export default App;
