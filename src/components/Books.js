import React from 'react';
import apiClient from '../services/api';
import {isAuth} from '../auth';
import e from 'cors';

const Books = (props) => {
    const [books, setBooks] = React.useState([]);
    const [auth, setAuth] = React.useState(false);
    React.useEffect(() => {
        isLoggedIn()
        if (props.loggedIn) {
            apiClient.get('/api/book')
            .then(response => {
                setBooks(response.data)
            })
            .catch(error => console.error(error));
        }
    }, []);
    const isLoggedIn = () => {
        setAuth(isAuth())
    }
    const bookList = books.map((book) => 
        <div key={book.id}
            className="list-group-item"
        >
            <h5>{book.title}</h5>
            <small>{book.author}</small>
        </div>
    );
    if (auth) {
        return (
            <div className="list-group">{bookList}</div>
        );
    }
    return (
        <div className="alert alert-warning">You are not logged in.</div>
    );
};

export default Books;
