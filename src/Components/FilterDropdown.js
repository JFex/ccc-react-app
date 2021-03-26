import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    {label: 'All', value: 'All'},
    {label: 'Shirts', value: 'Shirts'},
    {label: 'Hoodies', value: 'Hoodies'},
    {label: 'Pants', value: 'Pants'},
    {label: 'Hats', value: 'Hats'}
]

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : 'black',
      background: state.isFocused ? 'lightgrey' : 'white',
    }),

    container: (provided, state) => ({
        ...provided,
        margin: '50px 0px 20px 0px'
      }),
}

function FilterDropdown({onChange}) {
    return (
        <div className="mx-auto product-filter">
            <Select options={options}
                onChange={onChange}
                styles={customStyles}
                placeholder="Filter by product type..."
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'lightgrey',
                      primary50: 'lightgrey',
                      primary: 'lightgrey'
                    },
                  })}
                />
        </div>
    )
}

export default FilterDropdown;
