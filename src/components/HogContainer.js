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
        console.log (this.props.hogs)
        let hogs = [...this.props.hogs]
        let filteredHogs 
        if (this.state.filter){
            filteredHogs = hogs.filter(hog => hog.greased === true)
        } else {
            filteredHogs = hogs
        }
        // console.log(this.sortOption(filteredHogs))
        return this.sortOption(filteredHogs)
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

    sortOption = (filteredHogs) =>{
        let sortedHogs = filteredHogs 
        if (this.state.sort === "alphabetical"){
            // console.log(hogs.sort((a, b) => a.name.localeCompare(b.name)))
            return sortedHogs.sort((a, b) => a.name.localeCompare(b.name)).map((hog, indx) => <Hog key={indx} {...hog}/>)
        }else if (this.state.sort === "weight"){
            return sortedHogs.sort(function(a,b){return a.weight - b.weight}).map((hog, indx) => <Hog key={indx} {...hog}/>)
        }else {
            return sortedHogs.map((hog, indx) =>  <Hog key={indx} {...hog}/>)
            // return hogs.map((hog, indx) => console.log(hog))
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