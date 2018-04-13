import React from 'react';
import './Dashboard.css'

function CatToAdopt(props) {
  console.log(props);
  return (
    <div className="cats-section">
      <header>
        <h1>Cats for Adoption</h1>
      </header>
      {props.catsData.map((cat, index) => (
        <div key={index}>
          <h5>Name: {cat.name}</h5> <br /> <hr/> <img className='cat-img' src={`${cat.imageURL}`} alt='cat'/>
          <p>Gender: {cat.sex}</p><p>Breed: {cat.breed}</p> <p>Story: {cat.story}</p>
          <button>Adopt</button>
        </div>
      ))}
      
    </div>
  );
}

export default CatToAdopt;
