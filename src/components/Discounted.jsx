import { books } from "../data";
import Feature from "./UI/Feature";

function Discounted() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books.filter(book => book.salePrice != null).slice(0, 8).map((book) => 
              <Feature book={book} key={book.id} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discounted;
