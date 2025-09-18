// import ListGroup from "./componenets/ListGroup";
// function App() {
//   let items = ["NewYourk", "London", "Paris", "Tokyo", "Turky"];
//   let handleSelectItems = (item: string) => {
//     console.log(item.length);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItems={handleSelectItems}
//       />
//     </div>
//   );
// }
// export default App;
// import { Alerts } from "./componenets/Alerts";
// function App() {
//   return (
//     <div>
//       <Alerts>
//         "Hello <span> World" </span>
//       </Alerts>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import Alerts from "./components/Alerts";
// import Button from "./components/Button";

// function App() {
//   let [alertVisible, setAlertVisible] = useState(false);
//   return (
//     <div>
//       {alertVisible && (
//         <Alerts onClose={() => setAlertVisible(false)}> My Alert</Alerts>
//       )}
//       <Button color="secondary" onClick={() => setAlertVisible(true)}>
//         My Button
//       </Button>{" "}
//       <Button
//         color="primary"
//         onClick={() => console.log("Button Touc kr ditta oyee")}
//       >
//         My Button
//       </Button>
//       {"   "}
//       <Button
//         color="success"
//         onClick={() => console.log("Button Touc kr ditta oyee")}
//       >
//         My Button
//       </Button>{" "}
//       <Button
//         color="info"
//         onClick={() => console.log("Button Touc kr ditta oyee")}
//       >
//         My Button
//       </Button>{" "}
//       <Button
//         color="light"
//         onClick={() => console.log("Button Touc kr ditta oyee")}
//       >
//         My Button
//       </Button>{" "}
//       <Button
//         color="dark"
//         onClick={() => console.log("Button Touc kr ditta oyee")}
//       >
//         My Button
//       </Button>{" "}
//       <Button
//         color="link"
//         onClick={() => console.log("Button Touc kr ditta oyee")}
//       >
//         My Button
//       </Button>{" "}
//     </div>
//   );
// }
// export default App;
// import ListGroup from "./components/ListItems/ListGroup";
// function App() {
//   let items = ["NewYourk", "London", "Paris", "Tokyo", "Turky"];
//   let handleSelectItems = (item: string) => {
//     console.log(item.length);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItems={handleSelectItems}
//       />
//     </div>
//   );
// }
// // export default App;
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App 🚀</h1>
      <h2>Count: {count}</h2>
      <div style={{ gap: "10px" }}>
        <button
          style={{
            height: "35px",
            width: "100px",
            borderRadius: "18px",
            border: "none",
            fontFamily: "Monospace",
            fontWeight: "bold",
            fontSize: "large",
            color: "white",
            backgroundImage:
              "linear-gradient(to right, #000046 0%, #1CB5E0 51%, #000046 100%)",
            backgroundSize: "200% auto",
            boxShadow: "0 0 20px #eee",
            transition: "0.5s",
          }}
          onClick={() => setCount(count + 5)}
        >
          Increase
        </button>
        <button
          style={{
            height: "35px",
            width: "100px",
            borderRadius: "18px",
            border: "none",
            fontFamily: "Monospace",
            fontWeight: "bold",
            fontSize: "large",
            color: "white",
            backgroundImage:
              "linear-gradient(to right, #000046 0%, #1CB5E0 51%, #000046 100%)",
            backgroundSize: "200% auto",
            boxShadow: "0 0 20px #eee",
            transition: "0.5s",
          }}
          onClick={() => setCount(count - 5)}
        >
          Decrease
        </button>
        <button
          style={{
            height: "35px",
            width: "100px",
            borderRadius: "18px",
            border: "none",
            fontFamily: "Monospace",
            fontWeight: "bold",
            fontSize: "large",
            color: "white",
            backgroundImage:
              "linear-gradient(to right, #000046 0%, 51%, #000046 100%)",
            backgroundSize: "200% auto",
            boxShadow: "0 0 20px #eee",
            transition: "0.5s",
          }}
          onClick={() => setCount((count = 0))}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
