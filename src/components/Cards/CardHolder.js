import React from 'react';
import { Card } from './Card.js';
import BojackHorseman from '../../images/Bojack_Horseman.png';
import BeatriceHorseman from '../../images/Beatrice_Horseman.png';
import ButterscotchHorseman from '../../images/Butterscotch_Horseman.png';
import DianeNguyen from '../../images/Diane_Nguyen.png';
import MrPeanutbutter from '../../images/Mr_Peanutbutter.png';
import PrincessCarolyn from '../../images/Princess_Carolyn.png';
import ToddChavez from '../../images/Todd_Chavez.png';
import SarahLynn from '../../images/Sarah_Lynn.png';
import KelseyJannings from '../../images/Kelsey_Jannings.png';
import VincentAdultman from '../../images/Vincent_Adultman.png';
import MargoMartindale from '../../images/Margo_Martindale.png';
import MeowMeowFuzzyface from '../../images/Meow_Meow_Fuzzyface.png';

const cards = [
	BojackHorseman,
	BeatriceHorseman,
	ButterscotchHorseman,
	DianeNguyen,
	MrPeanutbutter,
	PrincessCarolyn,
	ToddChavez,
	SarahLynn,
	KelseyJannings,
	VincentAdultman,
	MargoMartindale,
	MeowMeowFuzzyface,
];

export const CardHolder = props => (
	<div className='row justify-content-around'>
		{cards.map((img, i) => <Card img={img} key={i} index={i} handleClick={props.handleClick} />).sort(() => Math.random() < 0.5 ? 1 : -1)}
	</div>
);
