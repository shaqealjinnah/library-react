import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Feature from "./UI/Feature";
import { books } from "../data"

function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {
              books.filter(book => book.rating === 5).slice(0, 4).map((book) => <Feature book={book} key={book.id} /> )
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
