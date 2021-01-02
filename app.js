
// const list=[
// {
//     item: '',
//     // brand: ' ',
//     quantity: 0,
//     units: '',
//     isPurchased: false
//   }

// const [ items, setItems] = useState([
//     {item:'item1', quantity:1, isPurchased: false},
//     {item:'item2', quantity:2, isPurchased: false},
//     {item:'item3', quantity:3, isPurchased: false},
// ]); //array

// function displayList(data){ (data, function( index, value ) {

class GroceryUnits extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('The units were added' + this.state.value);
        event.preventDefault();
    }
    
    
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Units:
              <input type="text" value={this.state.value} onChange={this.handleChange} />        
              </label>
            <input type="submit" value="Submit" />
          </form>
        );
      } 
    }

class GroceryQuantity extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('The quantity was added' + this.state.value);
        event.preventDefault();
    }
    
    
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Quantity:
              <input type="text" value={this.state.value} onChange={this.handleChange} />        
              </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

class GroceryItem extends React.Component{
constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
    this.setState({value: event.target.value});
}

handleSubmit(event) {
    alert('This item was added' + this.state.value);
    event.preventDefault();
}


render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Item:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        
          </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

class Header extends React.Component {
    render() {
      return (
        <h1>Grocery List</h1>
      )
    }
  }

// class App extends React.Component {
//     render() {
//       return (
//           <div>
//               <h1>Grocery List</h1>
//               </div>
        
//       )
//     }
//   }

  

  ReactDOM.render(
      <div id= "container">
    <Header/>
    <GroceryItem/>
    <GroceryQuantity/>
    <GroceryUnits/>
    </div>,
    document.getElementById('container', 'form'));