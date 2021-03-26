import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
    {label: '6', value: 6},
    {label: '7', value: 7},
    {label: '8', value: 8},
    {label: '9', value: 9},
    {label: '10', value:10}

]

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'black' : 'black',
      background: state.isFocused ? 'lightgrey' : 'white',
    }),

    container: (provided, state) => ({
        ...provided,
        margin: '20px 20px 20px 20px'
      }),

    menu: (provided, state) => ({
        ...provided,
        width: '80px',
        margin: '0px 0px 0px 60px'
    })
}

function QuantityDropdown({onChange}) {
    return (
        <div className="quantity-dropdown">
            <Select options={options}
                defaultValue={options[0].value}
                onChange={onChange}
                styles={customStyles}
                placeholder= "1"
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: 'black',
                      primary50: 'black',
                      primary: 'black',
                      neutral20: 'black'
                    },
                  })}
                />
        </div>
    )
}

export default QuantityDropdown;
