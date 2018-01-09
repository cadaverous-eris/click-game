import React from 'react';
import './Card.css';

export const Card = props => (
	<div className='col-md-3' index={props.index} onClick={props.handleClick}>
		{/*<div className='card' index={props.index}>*/}
			<img src={props.img} alt='' index={props.index} />
		{/*</div>*/}
	</div>
);