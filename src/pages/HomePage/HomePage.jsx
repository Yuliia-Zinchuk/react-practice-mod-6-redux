import { useSelector } from 'react-redux';
//import { booksReducer } from 'redux/Books/booksReducer';
import { selectBooks } from 'redux/Books/booksSelectors';
import { useDispatch } from 'react-redux';
//import { deleteBook } from 'redux/Books/booksAction';
import { deleteBook } from 'redux/Books/booksSlice';
export const HomePage = () => {
  const books = useSelector(selectBooks);
  //console.log(books);
  const dispath = useDispatch();
  console.log(books);
  // console.log(useDispatch());
  // console.log(dispath);
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
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
