import React from 'react'

class HogDetails extends React.Component {
    render() {
      return (
        <div className=''>
            <p>{this.props.hog.specialty}</p>
            <p>{this.props.hog.greased ? "Greasy" : "No Grease"}</p>
            <p>{this.props.hog.weight}</p>
            <p>{this.props.hog['highest medal achieved']}</p>
        </div>
      );
    }
  }
  
  export default HogDetails;