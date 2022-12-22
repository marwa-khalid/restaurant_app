import React from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';
import { Image } from 'react-native';

const ResultList = ({title,results}) => {
	return (
	<View>
	<Text style={style.title}>{title}</Text>
	<FlatList
	horizontal
	data={results}
	keyExtractor={result => result.id}
	renderItem={({item}) => {
		return (
		<View style={style.box}>
			<Image source={{ uri: item.image_url }} style={style.image} />
			<Text style={style.name}> {item.name} </Text>
			<Text style={style.rating}>Rating: {item.rating}/5 Price: {item.price}</Text>
		</View>
		)
	}
		
	}
	/>
	</View>
	);
};

const style= StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 20
	},
	rating: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'grey'
	},
	
	name: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	image:{
		width: 200,
		height:150,
		borderRadius:20
	},
	box: {
		margin:10,
		borderRadius:  20,
		borderColor: 'black',
		borderWidth: 1
	}
});

export default ResultList; 