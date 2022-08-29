import React from 'react'
import loading from './loading.gif'
import '../index.css'

//export default class Spinner extends Component 
const Spinner = () => {
  // render() {
    return (
      <div 
      className='text-center'
      // className='d-flex align-items-center justify-content-center index: -1' 
      // id='busy'
      >
        <img className='my-3' src={loading} alt="loading" />
      </div>
    )
  // }
}

export default Spinner