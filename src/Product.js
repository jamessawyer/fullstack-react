import React, { Component } from 'react';

export default class Product extends Component {

	voteUp = () => {
		console.log('555', this.props.id)
		this.props.onVoteUp(this.props.id)
	}

	voteDown = () => {
		this.props.onVoteDown(this.props.id)
	}

	render() {
		const { imgUrl, title, description, votes } = this.props;
		return (
			<li className="media" style={{marginTop: 20}}>
			  <img className="d-flex mr-3" src={imgUrl} alt="image"/>
			  <div className="media-body">
			    <h5 className="mt-0">{ title }</h5>
			    { description }

			    <div>
			    	<span style={{ color: 'red' }}>{ votes }</span>
			    	<button onClick={this.voteUp}>投票 UP</button>
			    	<button onClick={this.voteDown}>投票 DOWN</button>
			    </div>
			  </div>
			</li>
		)
	}
}
