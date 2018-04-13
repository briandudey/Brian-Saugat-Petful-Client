import React, {Component} from 'react';
import CatToAdopt from './CatToAdopt'
import DogToAdopt from './DogToAdopt'
import './Dashboard.css'

class Dashboard extends Component {

  render(){
    return(
      <div className='main-container'>
      <CatToAdopt/>
      <DogToAdopt/>
      </div>
    )
  }

}

export default Dashboard;