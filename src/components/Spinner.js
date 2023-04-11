// import React ,{Component} from 'react';
import React from 'react'

import loading from './loading.gif'

// export class Spinner extends Component {
const Spinner=()=>{

    // render() {
        return (
            <div className='text-center'>
            <img src={loading} alt="loading" />
            </div>
        )
    // }
}

export default Spinner;