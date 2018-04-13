import React, {Component} from 'react';
import { connect } from 'react-redux';
import CatToAdopt from './CatToAdopt'
import DogToAdopt from './DogToAdopt'
import * as actions from '../actions';
import './Dashboard.css'

class Dashboard extends Component {

  componentDidMount(){
    this.props.getCats();
    this.props.getDogs();
  }

  render(){
    console.log(this.props)
    return(
      <div className='main-container'>
      <CatToAdopt recevieCats={this.props.getCats} deleteCat={this.props.deleteCat}catsData={this.props.cats ? this.props.cats: []} />
      <DogToAdopt recevieDogs={this.props.getDogs} deleteDog={this.props.deleteDog}dogsData={this.props.dogs ? this.props.dogs: []}/>
      </div>
    )
  }

}


const mapStateToProps =  state => ({
cats: state.cat.data,
dogs: state.dog.data
});

export default connect(mapStateToProps, actions) (Dashboard);