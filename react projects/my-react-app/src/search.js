import React, { useState } from 'react'; // Importing the search icon


const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Pineapple',
    'Grapes',
    'Watermelon',
    'Strawberry',
    'Mango',
    'Peach',
    'Kiwi',
    'Pear',
    'Lemon',
    'Cherry',
    'Blueberry',
    'Raspberry',
    'Blackberry',
    'Apricot',
    'Pomegranate',
    'Plum',
    'Cantaloupe',
    'Honeydew',
    'Fig',
    'Guava',
    'Passion Fruit',
    'Lychee',
    'Coconut',
    'Papaya',
    'Dragon Fruit',
    'Persimmon',
    'Starfruit',
    'Durian',
  ];

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <ul className="search-results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
