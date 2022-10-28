import { useSelector } from 'react-redux';
//import { booksReducer } from 'redux/Books/booksReducer';
import { selectBooks } from 'redux/Books/booksSelectors';
import { useDispatch } from 'react-redux';
import { deleteBook } from 'redux/Books/booksAction';
export const HomePage = () => {
  const books = useSelector(selectBooks);
  const dispath = useDispatch();
  console.log(useDispatch());
  console.log(dispath);
  return (
    <>
      <ul>
        {books.map(({ id, title, author, img, plot }) => {
          return (
            <li key={id}>
              <h2>{title}</h2>
              <p>{author}</p>
              <img src={img} alt={title} />
              <p>{plot}</p>
              <button
                type="button"
                onClick={() => {
                  dispath(deleteBook(id));
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
