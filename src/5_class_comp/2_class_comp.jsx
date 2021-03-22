import * as React from 'react'
import PropComp from '../4_Props/Props.jsx'

class ClasscompWithMultipleComp extends React.Component{
    render(){
        return (
            <div className='class-comp'>
               <PropComp name= 'React'/> <br/>
               <PropComp name ='Anguler' />
            </div>
            );
    }
}

export default ClasscompWithMultipleComp;