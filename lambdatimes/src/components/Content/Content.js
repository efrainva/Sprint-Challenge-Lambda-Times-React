import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({tabs:tabData,cards:cardData});

  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({})
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
   if (this.state.selected === 'all'){
     return this.state.cards
   }else{     

      return this.state.cards.filter(i=>{
         i.tab === this.state.selected
      })
  
     //  this.state.cards.filter(i=>{ i.tab == this.state.selected[0]
    //   console.log(this.state.selected[0],i.tab)})

   }
  //  }else if(this.state.cards.tab === this.state.selected){
  //     this.state.cards.tabs
  //  }

    return this.state.cards;
  };
  //not working 
  selectedTab = (e) => {
    e.preventDefault();

    console.log(this.state.selected[0],"select")
  }

//working
  selectTabHandler = (calling) => {
      //this.setState({this.state.selected:this.state.tab
    const newselected = [
      calling
    ]
      this.setState({
          selected:[...this.state.selected = newselected]

      })
       console.log('click',this.state.selected[0],2,'clicking:',calling,3)
  }


  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
    {console.log(this.state.selected,"select")}
        <Tabs 
        tabs={this.state.tabs} 
        selectTabHandler={this.selectTabHandler}
        selectedTab={this.selectedTab}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
