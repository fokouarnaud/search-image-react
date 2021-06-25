import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: "React is the Best!",
      fetchImages: [],
      searchField:''
    }
  }
  handlechange=(e)=>{
    this.setState({searchField:e.target.value});
  }

  componentDidMount() {
    fetch("https://api.unsplash.com/photos?client_id=tJg6Eqf4bXcHh574Yz09jXBi1a2bMxdyjyJ1j_PDyow")
      .then(response => response.json())
      .then(responseImagesJson => 
         this.setState({ fetchImages: responseImagesJson }
          ,()=>console.log(this.state.fetchImages)))
  }

  render() {
    const {fetchImages,searchField} = this.state;
    const filterFetchImages= fetchImages.filter(fetchImage=>
      fetchImage.id.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
       <SearchBox
       placeholder='Search image'
       handlechange={this.handlechange}
       />
        <CardList fetchImages={filterFetchImages}>
        </CardList>
      </div>
    );
  }
}

export default App;
