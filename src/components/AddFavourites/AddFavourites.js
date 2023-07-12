import React from 'react';
import { connect } from 'react-redux';
import './AddFavourites.css';
export const AddFavourites = (props) => {
  return (
    <div>AddFavourites</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddFavourites)