import React from "react";

import './ScoreDisplay.css';

const ScoreDisplay = function(props){	
	return (
		<div id="score-display">
			<span>Score: {props.currScore}</span>
			<span>High Score: {props.highScore}</span>
		</div>
	);
}

export default ScoreDisplay;