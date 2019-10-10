import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/Action';
import Card from './Card';

export const Showcase = props => {
  return (
    <div>
      <h1>Nasa Api Data</h1>
      <button onClick={() => props.fetchData()}>
        {props.isFetching ? 'error' : 'Show Data'}
      </button>

      {props.details.map(item => (
        <Card key={item.name} details={item} />
      ))}
    </div>
  );
}; //close showcase
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    details: state.details
  };
};
export default connect(
  mapStateToProps,
  { fetchData }
)(Showcase);

//{props.isFetching ? 'error' : 'Show The Data'}
