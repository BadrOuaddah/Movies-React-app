import React from 'react'

const SearchBox = (props) =>{
    return(
        <div className='col col-sm-2'>
            <input 
            className='form-control' 
            value={props.value}
            onChange={(event) => props.setSearchValue(event)}
            placeholder='Type to search...'
            />
        </div>
    )
}

export default  SearchBox;