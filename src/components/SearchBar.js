import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar =({term,onTermChange, onTermSubmit})=>{

	return(
	<View style= {style.background}>
	<Feather style={style.iconStyle} name="search"/>
	<TextInput 
	placeholder="Search" 
	style={style.inputStyle}
		value={term}
		onChangeText={newTerm => onTermChange(newTerm)}
		onEndEditing={()=>onTermSubmit()}
		onSubmitEditing={()=>onTermSubmit()}
	/>
	</View>
	);
};
const style = StyleSheet.create({
	background: {
		backgroundColor: '#FCFCFC',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row'
	},
	inputStyle:
	{
		fontSize: 18,
		flex: 1
	},
	iconStyle: {
		fontSize: 35, 
		alignSelf: 'center',
		marginHorizontal: 20
	}
});

export default SearchBar;