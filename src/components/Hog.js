import React from 'react'
import HogDetails from './HogDetails'

class Hog extends React.Component {

    state = {
        details: false
    }

    detailToggler = () => {
        this.state.details ? this.setState({details:false}) : this.setState({details: true})
    }

    render() {
        // console.log(this.props)
      return (
        <div className="ui eight wide column pigTile" onClick={this.detailToggler}>
            <p>{this.props.name}</p>
            {this.state.details ? <HogDetails hog={this.props}/>: null}
        </div>
      );
    }
  }
  
  export default Hog;
  