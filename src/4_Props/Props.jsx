import * as React from 'react'
function CompProps(props){
    return (
        <div className='CompProps'>
            Props Component <br/>
            { props.name }<br/> 
        </div>
    );
}

export default CompProps;