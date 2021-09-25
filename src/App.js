import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import shuffle from 'shuffle-array';
import GameCard from './components/GameCard';
import ScoreDisplay from './components/ScoreDisplay';

import '@fontsource/roboto';

import './App.css';

// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
const range = (() => Array.from({ length: (20 - 1) / 1 + 1}, (_, i) => 1 + (i * 1)))(); 

const planeNames = {
	"1": "Spitfire",
	"2": "Bf-109",
	"3": "P-51",
	"4": "P-47",
	"5": "P-40",
	"6": "Hurricane",
	"7": "Tempest",
	"8": "Fw-190",
	"9": "Bf-110",
	"10": "Me-262",
	"11": "Yak-3",
	"12": "La-5",
	"13": "A6M",
	"14": "J2M",
	"15": "P-39",
	"16": "Ki-43",
	"17": "F4F",
	"18": "IL-2",
	"19": "P-38",
	"20": "Meteor",
};

const getRandomIDList = function(){
	const newPlaneList = shuffle(range, {'copy':true});	
	// console.log(newPlaneList);
	return newPlaneList;
}

const App = function() {
	
	const [currScore, setCurrScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [planeList, setPlaneList] = useState([]);
	const [clickedSet, setClickedSet] = useState(new Set());

	// randomise list on initial load
	useEffect(() => { 
		const newPlaneList = getRandomIDList();
		setPlaneList(newPlaneList);
	}, []);
	
	// randomise list on clicking a card
	useEffect(() => { 
		const newPlaneList = getRandomIDList();
		setPlaneList(newPlaneList);
	}, [currScore]);

	const cardClickHandler = function(cardID){
		if(clickedSet.has(cardID)) 
		{
			setClickedSet((new Set()).add(cardID));			
			setCurrScore(0);
		}
		else
		{
			setClickedSet(clickedSet.add(cardID));
			setHighScore((highScore > currScore) ? highScore : currScore);
			setCurrScore(currScore + 1);
			if(clickedSet.size === 20)
			{
				alert("Good job!");
				setClickedSet(clickedSet.clear());
				setCurrScore(0);
				//reset high score too?
				setHighScore(0);
			}
		}
	}

	return (
		<div>
			<AppBar position="static" className="app-bar">
				<Typography variant="h1" className="app-header">
					Warbird Memory Game
				</Typography>
			</AppBar>
			<ScoreDisplay currScore={currScore} highScore={highScore}/>
			
			<div className="game-area">
			<Grid container className="game-grid" columns="12" columnSpacing="40">
				{ planeList.map(plane => <GameCard key={plane} cardID={plane} cardName={planeNames[plane]} cardClickHandler={cardClickHandler}/>) }
			</Grid>
			</div>
		</div>
	);
}

export default App;