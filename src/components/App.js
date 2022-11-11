import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setListings(data))
  }, [])

 const displayedListings = listings
 .filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))
 
 function handleDelete(deletedItem) {
const newListings = listings
.filter((listing) => listing.id !== deletedItem.id)


  setListings(newListings)
  console.log(deletedItem)
 }

  return (
    <div className="app">
      <Header setSearch = {setSearch} search = {search}/>
      <ListingsContainer listings = {displayedListings} onDelete = {handleDelete}/>
    </div>
  );
}

export default App;
