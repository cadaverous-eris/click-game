import React from 'react';

const alerts = {
	begin: {text: "Click an image to begin! Try not to click the same image twice.", type: 'primary'},
	correct: {text: "Correct!", type: 'success'},
	incorrect: {text: "You already clicked that image. Click an image to play again.", type: 'danger'},
}

export const Alert = props => (
	props.type && alerts[props.type] ?
		<div className={'alert alert-' + alerts[props.type].type} role='alert'>
			{alerts[props.type].text}
		</div> : {}
);