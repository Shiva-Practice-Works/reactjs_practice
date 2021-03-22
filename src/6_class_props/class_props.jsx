import * as React from 'react'

class ClassCompProps extends React.Component{
    render(){
        return <div>
             Class props <br/>
             {this.props.name}
             </div>
    }
}

export default ClassCompProps;