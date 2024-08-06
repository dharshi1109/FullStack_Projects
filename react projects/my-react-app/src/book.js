import React, { useState } from 'react';
import bk1 from './book1.png';
import bk2 from './book2.png';
import bk3 from './book3.png';
import bk5 from './book5.png';
function EbookShoppingApp() {
  
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Haunting Adeline',
      author: 'H.D Carlton',
      releaseYear: 2020,
      publisher: 'XXX',
      imageUrl: bk1
    },
    {
      id: 2,
      title: 'It ends with us',
      author: 'Colleen Hoover',
      releaseYear: 2021,
      publisher: 'YYY',
      imageUrl: bk5
    },
    
    {
        id: 4,
        title: 'A Good girl\' guide to murder',
        author: 'Holly Jackson',
        releaseYear: 2020,
        publisher: 'YYY',
        imageUrl: bk2
      },
      {
        id: 3,
        title: 'The God of small things',
        author: 'Arundhathi Roy',
        releaseYear: 2021,
        publisher: 'YYY',
        imageUrl: bk3
      }
  ]);

  
  const [releaseYearFilter, setReleaseYearFilter] = useState('');
  const [publisherFilter, setPublisherFilter] = useState('');

  
  const handleReleaseYearFilter = (event) => {
    setReleaseYearFilter(event.target.value);
  };

    const handlePublisherFilter = (event) => {
    setPublisherFilter(event.target.value);
  };

  
  const filteredBooks = books.filter((book) => {
    return (
      (releaseYearFilter === '' || book.releaseYear.toString() === releaseYearFilter) &&
      (publisherFilter === '' || book.publisher === publisherFilter)
    );
  });

  return (
    <div>
      <h1>Ebook Shopping</h1>

    
      <label>Filter by Release Year:</label>
      <select value={releaseYearFilter} onChange={handleReleaseYearFilter}>
        <option value="">All</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        
      </select>

     
      <label>Filter by Publisher:</label>
      <select value={publisherFilter} onChange={handlePublisherFilter}>
        <option value="">All</option>
        <option value="XXX">XXX</option>
        <option value="YYY">YYY</option>
       
      </select>

      
      <div>
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <img src={book.imageUrl} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Release Year: {book.releaseYear}</p>
            <p>Publisher: {book.publisher}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EbookShoppingApp;