import React, { Component } from 'react';
import Product from './Product';

const products = [
  { 
  	id: 1,
  	imgUrl: 'http://fillmurray.com/200/100',
  	title: 'apple pie', 
  	description: 'an apple a day keep a doctor away', 
  	votes: 55
  },
  { 
  	id: 2,
  	imgUrl: 'http://fillmurray.com/200/100',
  	title: 'orange juice', 
  	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id saepe, ratione veritatis debitis minima, alias explicabo. Possimus nostrum consequuntur dolorum, rem ipsum cupiditate expedita eligendi, iure temporibus odit quaerat minus.', 
  	votes: 12
  },
  { 
  	id: 3,
  	imgUrl: 'http://fillmurray.com/200/100',
  	title: 'time machine', 
  	description: 'how to make a time machine, so we can go back and look forward', 
  	votes: 66
  },
  { 
  	id: 4,
  	imgUrl: 'http://fillmurray.com/200/100',
  	title: 'big bang of throey', 
  	description: 'why stephen is so funny guy', 
  	votes: 8
  }
]

export default class ProductsList extends Component {
	state = {
		products: products
	}

	handleVoteUp = (productId) => {
		const nextProducts = this.state.products.map((product) => {
			if (product.id === productId) {
				return { ...product, votes: product.votes + 1 }
			} else {
				return product;
			}
		});
		this.setState({
			products: nextProducts
		});
	}

	handleVoteDown = (productId) => {
		const nextProducts = this.state.products.map((product) => {
			if (product.id === productId) {
				return { ...product, votes: product.votes - 1 }
			} else {
				return product;
			}
		});
		this.setState({
			products: nextProducts
		});
	}

	render() {
		const productsList = this.state.products.map(product => (
			<Product 
				key={'product-' + product.id}
				id={product.id}
				imgUrl={product.imgUrl}
				title={product.title}
				description={product.description}
				votes={product.votes}
				onVoteUp={this.handleVoteUp}
				onVoteDown={this.handleVoteDown}
			/>
		));
		return (
			<ul className="list-unstyled" style={{width: 800}}>
				{ productsList }
			</ul>
		)
	}
}
