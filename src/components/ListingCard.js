import React, {useState} from "react";

function ListingCard({listing, onDelete}) {
const [fav, setFav] = useState(false)

function handleFav () {
  setFav(() => !fav)
}

function handleDeleteRequest(e) {
  fetch(`http://localhost:6001/listings/${listing.id}`, {
    method: "DELETE",
  })
    .then(res => res.json())
    .then(data => onDelete(listing) )
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick = {handleFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick = {handleDeleteRequest} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
