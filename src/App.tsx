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

import { effect } from "zod";

// import { Component, useState } from "react";

// import { Stats } from "fs";
// import { useState } from "react";

// import { useState } from "react";

// import { title } from "process";
// import { useState } from "react";
// import Button from "./components/Buttons/Button";

// import { useState } from "react";

// import { useState } from "react";

// export default App;
//====================================MOSH=======================================//
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
//     </div>
//   );
// }
// export default App;
// ===============================END==============================//
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
// import { useState } from "react";

// function App() {
//   let [count, setCount] = useState(0);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1 style={{ textShadow: "0 0 0px #171616ff" }}>Counter App 🚀</h1>
//       <h2>Count: {count}</h2>
//       <div style={{ gap: "10px" }}>
//         <button
//           style={{
//             height: "35px",
//             width: "100px",
//             borderRadius: "18px",
//             border: "none",
//             fontFamily: "Monospace",
//             fontWeight: "bold",
//             fontSize: "large",
//             color: "white",
//             backgroundImage:
//               "linear-gradient(to right, #000046 0%, #1CB5E0 51%, #000046 100%)",
//             backgroundSize: "200% auto",
//             boxShadow: "0 0 20px #5a5454ff",
//             transition: "0.5s",
//           }}
//           onClick={() => setCount(count + 5)}
//         >
//           Increase
//         </button>
//         <button
//           style={{
//             height: "35px",
//             width: "100px",
//             borderRadius: "18px",
//             border: "none",
//             fontFamily: "Monospace",
//             fontWeight: "bold",
//             fontSize: "large",
//             color: "white",
//             backgroundImage:
//               "linear-gradient(to right, #000046 0%, #1CB5E0 51%, #000046 100%)",
//             backgroundSize: "200% auto",
//             boxShadow: "0 0 20px #5a5454ff",
//             transition: "0.5s",
//           }}
//           onClick={() => setCount(count - 5)}
//         >
//           Decrease
//         </button>
//         <button
//           style={{
//             height: "35px",
//             width: "100px",
//             borderRadius: "18px",
//             border: "none",
//             fontFamily: "Monospace",
//             fontWeight: "bold",
//             fontSize: "large",
//             color: "white",
//             backgroundImage:
//               "linear-gradient(to right, #000046 0%, #1CB5E0 51%, #000046 100%)",
//             backgroundSize: "200% auto",
//             boxShadow: "0 0 20px #5a5454ff",
//             transition: "0.5s",
//           }}
//           onClick={() => setCount((count = 0))}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
//  ==============================REACT ICONS===============================//
// import { BsCalendar2DateFill } from "react-icons/bs";
// function App() {
//   return (
//     <div>
//       <BsCalendar2DateFill color="Gray" size="70" />
//     </div>
//   );
// }
// export default App;
//  ==============================Exercise use module css==============================

// import Button from "./components/Buttons/Button";

// const App = () => {
//   return (
//     <Button onClick={() => {}} >MY BUTTON THE BUTTON CALLED MY NANE </Button>
//   );
// };

// export default App;
//  ===============================Exercise build like component================================

// import Like from "./components/Like";
// import Likes from "./components/Likes";

// function App() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#00FFFF",
//         minHeight: "100vh",
//         margin: 0,
//       }}
//     >
//       <Like onClick={() => console.log("CLICKED")} />
//       <Like onClick={() => console.log("CLICKED")} />
//       <Like onClick={() => console.log("CLICKED")} />
//       <Likes onClick={() => console.log("CLICKED MUDASSIR")} />
//       <Likes onClick={() => console.log("CLICKED MUDASSIR")} />
//       <Likes onClick={() => console.log("CLICKED MUDASSIR")} />
//     </div>
//   );
// }
// export default App;
// <<<====================== understandin the hook state ========================>>>

// function App() {
//   const [isVisible, setVisible] = useState(false);

//   const handleClick = () => {
//     setVisible(true);
//     console.log(isVisible);
//   };

//   return (
//     <div>
//       {"`>>>>"}
//       <button
//         style={{
//           width: 100,
//           borderRadius: 8,
//           margin: 10,
//         }}
//         onClick={handleClick}
//       >
//         Show
//       </button>
//       {"<<<<"}
//     </div>
//   );
// }
// export default App;
// ======================= choosing a state structure ======================= //
// import { useState } from "react";

// function App() {
//   // const [firstName, setFirstName] = useState(" ");
//   // const [lastName, setLastName] = useState(" ");
//   const [person, setPeeson] = useState({
//     firstName: "",
//     LastName: "",
//     contact: {
//       address: {
//         street: "",
//       },
//     },
//   });
//   const [isLoading, setLoading] = useState(false);
//   return <div> </div>;
// }

// export default App;
// import { useState } from "react";
// function App() {
//   const [person, setPerson] = useState({
//     firstName: "  ",
//     lastName: " ",
//     contact: {
//       address: {
//         street: " ",
//       },
//     },
//   });

//   // const [isLoading, setLoading] = useState(false);

//   return <div></div>;
// }

// export default App;

//========================== keeping components pure ========================//
// import Massage from "./components/Message";
// function App() {
//   return (
//     <div>
//       <Massage />
//     </div>
//   );
// }
// export default App;
//  ============================ updating object ============================
// import { useState } from "react";
// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });
//   const handleClick = () => {
//     const newDrink = {
//       title: drink.title,
//       price: 6,
//     };
//     setDrink(newDrink);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";

// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americanoo",
//     price: 5,
//   });

//   const handleClick = () => {
//     // const newDrink = { ...drink, price: 10 };
//     // setDrink(newDrink);
//     setDrink({ ...drink, price: 10 });
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>{drink.title}</h2>
//       <p>Price: ${drink.price}</p>
//       <button
//         style={{
//           backgroundColor: "#ff6347",
//           width: 230,
//           height: 45,
//           border: "5px solid  yellow",
//           borderRadius: 18,
//           fontSize: 17,
//         }}
//         onClick={handleClick}
//       >
//         + Update Price{" "}
//       </button>
//     </div>
//   );
// }

// export default App;
// =========================== updating nested object ===========================
// function App() {
//   const [customer, setCustomer] = useState({
//     name: "jhon",
//     adderss: {
//       city: "france",
//       zipCode: 94111,
//     },
//   });

//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       adderss: { ...customer.adderss, zipCode: 94112 },
//     });
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       // <p>ZipCode: ${customer.adderss.zipCode}</p>
//       <button
//         style={{
//           backgroundColor: "#ff6347",
//           width: 230,
//           height: 45,
//           border: "5px solid  yellow",
//           borderRadius: 18,
//           fontSize: 17,
//           cursor: "pointer",
//         }}
//         onClick={handleClick}
//       >
//         Update zipCode{" "}
//       </button>
//     </div>
//   );
// }
// export default App;
// =========================== updating array ===========================
// import { useState } from "react";
// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [tags, setTags] = useState(["Happy", "Cheerful", "Good"]);

//   const handleClick = () => {
//     // setTags([...tags, "Exciting"]); // to add
//     // setTags(tags.filter((tag) => tag !== "Happy")); // to remove
//     setTags(tags.map((tag) => (tag === "Happy" ? "Engry" : tag))); // to update
//   };

//   return (
//     <div
//       style={{
//         padding: "20px",
//         background: "#d36d36ff",
//         minHeight: "100vh",
//         margin: 0,
//       }}
//     >
//       <p style={{ font: "19px Arial, sans-serif", color: "yellow" }}>
//         {tags.join(", ")}
//       </p>

//       <button
//         style={{
//           backgroundColor: "#d36d36ff",
//           width: 230,
//           height: 45,
//           border: "3px solid yellow",
//           borderRadius: 18,
//           fontSize: 17,
//           cursor: "pointer",
//           color: "yellow",
//         }}
//         onClick={handleClick}
//       >
//         Update Tags
//       </button>
//     </div>
//   );
// }

// export default App;

// ================================== updating array object =====================================

// import { useState } from "react";
// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, tittle: "bug 1", fixed: false },
//     { id: 2, tittle: "bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//   };

//   return (
//     <div
//       style={{
//         padding: "20px",
//         background: "#d36d36ff",
//         minHeight: "100vh",
//         margin: 0,
//       }}
//     >
//       {bugs.map((bug) => (
//         <p
//           key={bug.id}
//           style={{ font: "19px Arial, sans-serif", color: "yellow" }}
//         >
//           {bug.tittle} — {bug.fixed ? "Fixed" : "Not Fixed"}
//         </p>
//       ))}
//       <button
//         style={{
//           backgroundColor: "#d36d36ff",
//           width: 230,
//           height: 45,
//           border: "3px solid yellow",
//           borderRadius: 18,
//           fontSize: 17,
//           cursor: "pointer",
//           color: "yellow",
//         }}
//         onClick={handleClick}
//       >
//         Update Bugs
//       </button>
//     </div>
//   );
// }

// export default App;

// ======================= sinmplifying update logic with immer =======================

// pehle wale se simmler he ========
// import { useState } from "react";
// import produce from "immer";
// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, tittle: "bug 1", fixed: false },
//     { id: 2, tittle: "bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };
//   return (
//     <div
//       style={{
//         padding: "20px",
//         background: "#d36d36ff",
//         minHeight: "100vh",
//       }}
//     >
//       {bugs.map((bug) => (
//         <p
//           key={bug.id}
//           style={{ font: "19px Arial, sans-serif", color: "yellow" }}
//         >
//           {bug.tittle} — {bug.fixed ? "Fixed" : "Not Fixed"}
//         </p>
//       ))}
//       <button
//         style={{
//           backgroundColor: "#d36d36ff",
//           width: 230,
//           height: 45,
//           border: "3px solid yellow",
//           borderRadius: 18,
//           fontSize: 17,
//           cursor: "pointer",
//           color: "yellow",
//         }}
//         onClick={handleClick}
//       >
//         Update Bugs
//       </button>
//     </div>
//   );
// }

// export default App;

// ========================= shairing stats between component ========================
// import { useState } from "react";
// import Cart from "./components/Cart";
// import NavBar from "./components/NavBar";
// function App() {
//   const [cartTtems, setCartItems] = useState([
//     "product 1",
//     " product 2",
//     " product 3",
//     " product 4",
//     " product 5",
//     " product 6",
//     " product 7",
//     " product 8",
//     " product 9",
//   ]);
//   return (
//     <div>
//       <NavBar cartItemsCount={cartTtems.length} />
//       <Cart cartItems={cartTtems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }
// export default App;

// ===========================e xrcise updating Stats ===========================

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     Player: {
//       Name: "Jhon",
//     },
//   });
//   const handleOnclick = () => {
//     setGame({ ...game, Player: { ...game.Player, Name: "Bob" } });
//   };
//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "50px",
//         fontFamily: "sans-serif",
//         fontSize: 18,
//         fontWeight: "bolder",
//         color: "#d36d36ff",
//       }}
//     >
//       <p> Player Name {game.Player.Name}</p>
//       <button
//         style={{
//           backgroundColor: "#d36d36ff",
//           width: 230,
//           height: 45,
//           border: "3px solid yellow",
//           borderRadius: 18,
//           fontSize: 17,
//           cursor: "pointer",
//           color: "yellow",
//         }}
//         onClick={handleOnclick}
//       >
//         Update
//       </button>
//     </div>
//   );
// }
// export default App;
// ==============================  exercise update array ==============================

// function App() {
//   const [pizza, setPizza] = useState({
//     name: "spicy pepperoni",
//     topping: ["mushroom"],
//   });
//   const handleOnclick = () => {
//     setPizza({ ...pizza, topping: [...pizza.topping, "Cnheese"] });
//   };
//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "50px",
//         fontFamily: "sans-serif",
//         fontSize: 18,
//         fontWeight: "bolder",
//         color: "#d36d36ff",
//       }}
//     >
//       <p>Topping : {pizza.topping.join(",")}</p>
//       <button
//         style={{
//           backgroundColor: "#d36d36ff",
//           width: 230,
//           height: 45,
//           border: "3px solid yellow",
//           borderRadius: 18,
//           fontSize: 17,
//           cursor: "pointer",
//           color: "yellow",
//         }}
//         onClick={handleOnclick}
//       >
//         Update
//       </button>
//     </div>
//   );
// }
// export default App;
// import { useState } from "react";
// function App() {
//   const [cart, setCart] = useState({
//     dicount: 0.1,
//     items: [
//       { id: 1, tittle: "prodect 1 ", quentity: 2 },
//       { id: 1, tittle: "prodect 2 ", quentity: 1 },
//     ],
//   });
//   const handleonClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quentity: item.quentity + 1 } : item
//       ),
//     });
//   };
//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "50px",
//         fontFamily: "sans-serif",
//         fontSize: 18,
//         fontWeight: "bolder",
//         color: "#d36d36ff",
//       }}
//     >
//       <p>Quentity Update {cart.items[1].quentity}</p>
//       <button
//         style={{
//           backgroundColor: "#d36d36ff",
//           width: 230,
//           height: 45,
//           border: "3px solid yellow",
//           borderRadius: 18,
//           fontSize: 17,
//           cursor: "pointer",
//           color: "yellow",
//         }}
//         onClick={handleonClick}
//       >
//         Update
//       </button>
//     </div>
//   );
// }

// // export default App;

// =========================== exercise builling expandableText component =============================

// import ExpandableText from "./components/ExpandableText";

// const App = () => {
//   return (
//     <div>
//       <ExpandableText>
//         React is a powerful JavaScript library developed by Facebook for
//         building user interfaces, especially single-page applications where
//         performance and dynamic user experience are important. It allows
//         developers to create reusable UI components, which means you can break
//         down a large interface into smaller, independent pieces of code that
//         manage their own state and logic. One of the biggest advantages of React
//         is its virtual DOM — instead of updating the entire webpage whenever
//         something changes, React updates only the specific parts that need to
//         change, which makes applications faster and more efficient. React also
//         supports server-side rendering, hooks for managing state and side
//         effects, and integration with tools like Redux for advanced state
//         management. Because of its component-based architecture, React promotes
//         clean, maintainable, and scalable code. Developers around the world use
//         React for everything from simple websites to complex applications such
//         as social networks, dashboards, and e-commerce platforms. The large
//         community, strong documentation, and ecosystem of third-party libraries
//         make React one of the most popular technologies in modern web
//         development. If you understand React fundamentals such as components,
//         props, state, and lifecycle, you can easily build interactive and
//         responsive UIs with less effort and better performance
//       </ExpandableText>
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import Form from "./components/Form";

// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// };

// export default App;

// ============================== project expense tracker ================================

// import { useState } from "react";
// import ExpenseList from "./Expense_tracker/component/ExpenseList";
// import ExpenseFilter from "./Expense_tracker/ExpenseFilter";
// import ExpenseForm from "./components/ExpenseForm";
// const App_Expense = () => {
//   const [selectCategory, setSelectCategory] = useState("");
//   const [expense, setExpense] = useState([
//     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 2, description: "bbb", amount: 20, category: "Utilities" },
//     { id: 3, description: "ccc", amount: 30, category: "Grocaries" },
//     { id: 4, description: "ddd", amount: 40, category: "Entertainment" },
//     { id: 5, description: "eee", amount: 50, category: "Utilities" },
//   ]);

//   const visibleExpense = selectCategory
//     ? expense.filter((e) => e.category === selectCategory)
//     : expense;
//   return (
//     <div>
//       <div
//         className="mb-5"
//         style={{
//           color: "GrayText",
//           fontFamily: "sans-serif",
//         }}
//       >
//         <ExpenseForm
//           onSubmit={(newExpense) =>
//             setExpense([
//               ...expense,
//               {
//                 ...newExpense,
//                 id: Date.now(),
//                 description: "",
//               },
//             ])
//           }
//         />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectCategory(category)}
//         />
//       </div>

//       <ExpenseList
//         expenses={visibleExpense}
//         onDelete={(id) => setExpense(expense.filter((e) => e.id !== id))}
//       />
//     </div>
//   );
// };

// export default App_Expense;

// =============================== understanding the use effect ================================

// import React, { useEffect, useRef } from "react";

// function App() {
//   const ref = useRef<HTMLInputElement>(null);
//   // AfterRander
//   useEffect(() => {
//     if (ref.current) ref.current.focus();
//   });
//   // Side effect
//   useEffect(() => {
//     document.title = "my App";
//   });

//   return (
//     <div>
//       <div> Ask Question</div>
//       <input
//         style={{
//           borderRadius: "16px",
//           backgroundColor: "#87CEEB",
//           border: "none",
//           marginTop: "4px",
//         }}
//         ref={ref}
//         type="text"
//         className="form-control"
//       />
//     </div>
//   );
// }

// export default App;
// =============================== effect dependencies ================================

// import React, { useEffect, useState } from "react";
// import ProductList from "./Expense_tracker/component/ProductList";

// function App() {
//   const [category, setCategory] = useState("");
//   return (
//     <div>
//       <select
//         name=""
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option style={{ backgroundColor: "yellow" }} value="">
//           Select an option
//         </option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category} />{" "}
//     </div>
//   );
// }

// export default App;
// ============================ effect clean up ==========================

// import React, { useEffect } from "react";
// const connect = () => console.log("Connect");
// const disconnect = () => console.log("Disconnect");

// function App() {
//   useEffect(() => {
//     connect();
//     return () => disconnect();
//   });
//   return <div></div>;
// }

// export default App;

// ================================ fatchig data ===============================
// import React, { useEffect, useState } from "react";
// import axios, { AxiosError } from "axios";
// interface User {
//   id: number;
//   name: string;
// }

// function App() {
//   const [user, setUser] = useState<User[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get<User[]>(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         setUser(res.data);
//       } catch (err) {
//         setError((err as AxiosError).message);
//       }
//     };
//     fetchUser();

//     // get ->
//     // .then((res) => setUser(res.data))
//     // .catch((err) => setError(err.message));
//   }, []);
//   return (
//     <>
//       {error && <p className="text-danger">{error} </p>}
//       <ul>
//         {user.map((user) => (
//           <li key={user.id}> {user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// ========================= cancelling a fetch request ==========================

import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface User {
  filter: React.SetStateAction<User[]>;
  id: number;
  name: string;
}

function App() {
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loding, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users/", {
        signal: controller.signal,
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    setLoading(false);
    return () => controller.abort();
  }, []);
  const deleteUser = (userToDelete: User) => {
    const originalUsers = [...user];
    setUser((prevUsers) => prevUsers.filter((u) => u.id !== userToDelete.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + userToDelete.id)
      .catch((err) => {
        setError(err.message);
        setUser(originalUsers);
      });
  };
  const addUser = () => {
    const originalUsers = [...user];
    const newUser: User = {
      id: 0,
      name: "Mudassir",
      filter: [],
    };
    setUser([newUser, ...user]);
    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then(({ data: savedUser }) => setUser([savedUser, ...user]))
      .catch((err) => {
        setError(err.message);
        setUser(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error} </p>}
      {loding && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {user.map((user) => (
          <li
            style={{ backgroundColor: "PapayaWhip", color: "Olive" }}
            key={user.id}
            className="list-group-item d-flex justify-content-between "
          >
            {" "}
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
