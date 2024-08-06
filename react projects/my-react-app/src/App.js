import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'  
import Todo from './todo.js';
import Student from './student.js';
import Weather from './weather.js';
import ImageSlider from './imageslide.js';
import SearchFilter from './search.js';
import Counter from './Counter.js';
import EbookShoppingApp from './book.js';
const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Student/>}></Route>
    <Route path="/todo" element={<Todo/>}></Route>
    <Route path="/weather" element={<Weather/>}></Route>
    <Route path="/imgslide" element={<ImageSlider/>}></Route>
    <Route path="/search" element={<SearchFilter/>}></Route>
    <Route path="/counter" element={<Counter/>}></Route>
    <Route path="/bookshopping" element={<EbookShoppingApp/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}
export default App;