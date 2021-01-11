
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products,
      item: ' ',
      brand: ' ',
      units: ' ',
      quantity: 0,
      isPurchased: false,
      listItems: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToCart = this.addToCart.bind(this);

  } handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const newProduct = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased,

    }
    this.setState({
      products: [newItem, ...this.state.items],
      item: ' ',
      brand: ' ',
      units: ' ',
      quantity: 0,
      isPurchased: false,
    })
  }
  addToCart(item) {
    this.setState({ cartItems: [item, ...this.state.cartItems] });

  }
  render() {
    return (
      <div className='newItem'>
        <h1>Grocery List</h1>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}
        >
          <label htmlFor='items'>Items:</label>
          <input type="text" value={this.state.items} onChange={this.handleChange} id='item' placeholder='name of item' />
          <br />
          <label htmlFor='brand'>Brand:  </label>
          <input type="text" value={this.state.brand} onChange={this.handleChange} id='brand' placeholder='name of brand' />
          <br />
          <label htmlFor='units'> Units:</label>
          <input type='number' value={this.state.units} onChange={this.handleChange} id='units' />
          <br />
          <label htmlFor='quantity'> Quantity:</label>
          <input type='number' value={this.state.quantity} onChange={this.handleChange} id='quantity' />
          <input type="submit" value='Add to list' />
        </form>
      </div>
    );
  }

}
class GroceryList extends React.Component {
  constructor(props) {
    super(props); this.state = {
      addToCart: false,
    }
    this.toggleCart = this.toggleCart.bind(this);

  } toggleCart() {
    this.setState({ inShoppingCart: !this.state.inShoppingCart })
  } render() {
    return (
      <li
        onClick={() => this.props.handleAdd(this.props.product)}
      >{this.props.item.name} {this.props.item.price} {this.state.inShoppingCart ? <span>is on the list</span> : ''}</li>
    )
  }
}
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  } render() {
    return (
      <li>{this.props.item.name} { this.props.item.price}</li>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));
