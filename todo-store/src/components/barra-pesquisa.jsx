import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


const options = [
    { value: 'cadeiras', label: 'Cadeiras' },
    { value: 'poltronas', label: 'Poltronas' },
    { value: 'luminarias', label: 'Luminárias' },
    { value: 'vasos', label: 'Vasos' }
  ]
  
  const MyComponent = () => (

    <div className='w-full'>
        <Select
        closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
        options={options} className='text-black '/>
    </div>
  )


export default MyComponent;
