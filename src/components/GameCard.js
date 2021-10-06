import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './GameCard.css';

const GameCard = function(props){
	return (
		<Card className="game-card" 
			onClick={() => props.cardClickHandler(props.cardID)}
		>
			<CardActionArea>
				<CardMedia
					component="img"					
					className="card-img"
					image={`/assets/images/${props.cardID}.jpg`}
				/>			
				<CardContent>				
					<Typography 
						gutterBottom
						variant="h2"
						align="center"
					>
						{props.cardName}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default GameCard;