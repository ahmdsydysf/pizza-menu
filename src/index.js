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
  let pizz = pizzaData;
  let piz = pizz.length > 0;
  // let piz = pizzaData;

  return (
    <div className="container menu">
      <h2>Our Menu</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        deserunt inventore fugit iste nam id asperiores itaque distinctio harum
        culpa.
      </p>
      {piz ? (
        <>
          {pizz.map((pizza) => (
            <Pizza objData={pizza} key={pizza.name} />
          ))}
        </>
      ) : (
        <div> There is No Data </div>
      )}
      {/* {piz && (
        <ul>
          {pizz.map((pizza) => (
            <Pizza objData={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
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

function Pizza({ objData }) {
  return (
    <main className={`pizza ${objData.soldOut ? "sold-out" : ""} `}>
      <img src={objData.photoName} alt="funghi.jpg" />
      <div>
        <h2>{objData.name}</h2>
        <p>{objData.ingredients}</p>
        <span>{objData.soldOut ? "Sold Out CS" : objData.price + 15}</span>
      </div>
    </main>
  );
}
function OrderFooter({ cl, isopennow }) {
  return (
    <div className="footer">
      {}
      <h2>{isopennow && <p>We Are Open Now till {cl}:00 </p>}</h2>
      <button className="btn">Order</button>
    </div>
  );
}
function Footer() {
  // return React.createElement(
  //   "footer",
  //   { className: "footer" },
  //   `${new Date().toLocaleTimeString()}We Are Currently Open!!`
  // );
  const hour = new Date().getHours();
  const openH = 11;
  const closeH = 20;
  const isOpen = hour >= openH && hour <= closeH;

  return <OrderFooter cl={closeH} isopennow={isOpen.toString()} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
