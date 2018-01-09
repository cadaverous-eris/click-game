import React from 'react';
import './Navbar.css';

export const Navbar = props => (
	<div className='navbar navbar-expand-lg navbar-dark'>
		<div className='container justify-content-between'>
			<h1 className='title'>Click Game</h1>
			<div>
				<h1>Score: {props.score || 0}</h1>
				<h1>Top Score: {props.highScore || 0}</h1>
			</div>
		</div>
	</div>
);