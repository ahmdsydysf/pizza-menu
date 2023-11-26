import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
function Header() {
  let style = { color: "red", fontSize: "50px" };
  return (
    <header>
      <h1 className="header">Fast React Pizza Co...</h1>
    </header>
  );
}
function Main() {
  return (
    <div className="container menu">
      <h2>Our Menu</h2>
      {pizzaData.map((pizza) => (
        <Pizza objData={pizza} key={pizza.name} />
      ))}
      {/* <Pizza
        name="Pizza Funghi"
        photoOf="pizzas/funghi.jpg"
        tags="Tomato, mozarella, mushrooms, and onion"
        price={150}
      />
      <Pizza
        name="Pizza Salamino"
        photoOf="pizzas/salamino.jpg"
        tags="Tomato, mozarella, and pepperoni"
        price={250}
      /> */}
    </div>
  );
}

function Pizza(props) {
  return (
    <main className="pizza">
      <img src={props.objData.photoName} alt="funghi.jpg" />
      <div>
        <h2>{props.objData.name}</h2>
        <p>{props.objData.ingredients}</p>
        <span>Price : {props.objData.price + 15}</span>
      </div>
    </main>
  );
}

function Footer() {
  // return React.createElement(
  //   "footer",
  //   { className: "footer" },
  //   `${new Date().toLocaleTimeString()}We Are Currently Open!!`
  // );
  return (
    <div className="footer">
      <h2>{new Date().toLocaleTimeString()}We Are Currently Open!!</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
