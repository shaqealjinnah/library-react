import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import { books } from "./data.js";
import BookInfo from "./pages/BookInfo.jsx";
import Cart from "./pages/Cart.jsx";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function removeBook(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function addToCart(book) {
      setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => item.id === book.id
        ? {
          ...item,
          quantity: +quantity,
          }
        : item
    ))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
  },[cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
