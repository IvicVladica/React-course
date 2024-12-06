import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

// function App() {
//   let items = ["Beograd", "Nis", "Novi Sad", "Kragujevac", "Kursumlija"];

//   const hanleSelectItem = (item: string) => {
//     console.log(item);
//   }
//   return (
//     <div>
//       <ListGroup items={items} heading="Cities" onSelectItem={hanleSelectItem}/>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Button color="success" onClick={() => console.log('Clicked')}>
        My Button
      </Button>
    </div>
  );
}

export default App;
