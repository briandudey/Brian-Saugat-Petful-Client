import React from 'react';
import './Dashboard.css'

function CatToAdopt(props) {


  const deleteCatHandler = (itemToFilter) => {
    props.deleteCat()
    updateCat(itemToFilter);
    props.recevieCats();
  }

  const updateCat = (itemToFilter) => {
    return cats.filter((cat, index) => index !== itemToFilter)
  }

  const cats = props.catsData.map((cat, index) => (
    <div key={index}>
      <h5>Name: {cat.name}</h5> <br /> <hr/> <img className='cat-img' src={`${cat.imageURL}`} alt='cat'/>
      <p>Gender: {cat.sex}</p><p>Breed: {cat.breed}</p> <p>Story: {cat.story}</p>
      <button onClick={() => deleteCatHandler(index)}>Adopt</button>
    </div>
  ))

  return (
    <div className="cats-section">
      <header>
        <h1>Cats for Adoption</h1>
      </header>
      {cats}
    </div>
  );
}

export default CatToAdopt;
