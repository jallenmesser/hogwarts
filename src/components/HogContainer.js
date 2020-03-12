import React from 'react'
import Hog from "./Hog"


class HogContainer extends React.Component  {

    state = {
        filter: false,
        sort: "none"
    }

    filterToggle = () => {
        this.state.filter ? this.setState({filter: false})
        : this.setState({filter: true})    }

    renderHogs = () => {
    // this.state.filter ?
    //  this.props.hogs.filter(hog => hog.greased === true).map((hog, indx) => <Hog key={indx} {...hog}/> : this.props.hogs.map((hog, indx) => <Hog key={indx} {...hog}/>
        let filteredHogs
        if (this.state.filter){
            filteredHogs = this.props.hogs.filter(hog => hog.greased === true)
        } else {
            filteredHogs = this.props.hogs
        }
        this.sortOption(filteredHogs)
    }

    sortState = (e) =>{
        switch (e.target.value){
            case "none":
                this.setState({sort: "none"})
                break
            case "alphabetical":
                this.setState({sort: "alphabetical"})
                break
            case "weight":
                this.setState({sort: "weight"})
                break
        }
    }

    sortOption = (hogs) =>{
        console.log(hogs)
        if (this.state.sort === "alphabetical"){
            return hogs.sort(function(a,b){return a.name - b.name}).map((hog, indx) => <Hog key={indx} {...hog}/>)
        }else if (this.state.sort === "weight"){
            return hogs.sort(function(a,b){return a.weight - b.weight}).map((hog, indx) => <Hog key={indx} {...hog}/>)
        }else{
            return hogs.map((hog, indx) => <Hog key={indx} {...hog}/>)
        }
        
    }


    render() {
        return(
            <div>
                <button onClick={this.filterToggle}>Filter by Greased</button>
                <select onChange={this.sortState}>
                    <option value="none">None</option>
                     <option value="weight">Weight</option>
                     <option value="alphabetical">Alphabetical</option>
                </select><br></br>
            <div className="ui grid container">
                {this.renderHogs()}
            </div>
            </div>
        )
    }
}

export default HogContainer;