import React from 'react';

function DogToAdopt(props) {

  const deleteDogHandler = itemToFilter => {
    props.deleteDog();
   updateDog(itemToFilter);
   props.recevieDogs();
  };

  const updateDog = (itemToFilter) => {
    return dogs.filter((cat, index) => index !== itemToFilter)
  }

  
  const dogs =  props.dogsData.map((dog, index) => (
      <div key={index}>
        <h5>Name: {dog.name}</h5> <br /> <hr />{' '}
        <img className="dog-img" src={`${dog.imageURL}`} alt="dog" />
        <p>Gender: {dog.sex}</p>
        <p>Breed: {dog.breed}</p> <p>Story: {dog.story}</p>
        <button onClick={deleteDogHandler}>Adopt</button>
      </div>
    ));
  

  return (
    <div className="dogs-section">
      <header>
        <h1>Dogs for Adoption</h1>
      </header>
      {dogs}
    </div>
  );
}

export default DogToAdopt;
