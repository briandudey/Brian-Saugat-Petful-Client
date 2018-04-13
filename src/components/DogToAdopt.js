import React from 'react';

function DogToAdopt (props){
  return(
    <div className = 'dogs-section'>
    <header>
      <h1>Dogs for Adoption</h1>
      </header>
      {props.dogsData.map((dog,index) => (
        <div key={index}>
          <h5>Name: {dog.name}</h5> <br /> <hr/> <img className='dog-img' src={`${dog.imageURL}`} alt='dog'/>
          <p>Gender: {dog.sex}</p><p>Breed: {dog.breed}</p> <p>Story: {dog.story}</p>
          <button>Adopt</button>
        </div>
 
      ))}
      </div>
  );
}

export default DogToAdopt;