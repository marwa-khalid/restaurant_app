import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultList from '../components/ResultList';
const SearchScreen =()=>{
	const [term,setTerm] = useState('');
	const [results,setResults] = useState([]);
	
	const searchApi = async() => {
		const response = await yelp.get('/search', {
			params:{
				limit: 50,
				term,
				location: 'san francisco'
			}
		});
		setResults(response.data.businesses);
	};
	const filterResultsByPrice = (price) => {
		return results.filter(result=>{
			return result.price===price;
		}
		);
	};
	return(
		<ScrollView>
            <SearchBar 
            term={term} 
            onTermChange={newTerm=>setTerm(newTerm)}
            onTermSubmit={() => searchApi()}
            />
            <Text>We have found {results.length} results </Text>
            <ResultList results={filterResultsByPrice('$')} title='Cost Effective'/>
            <ResultList results={filterResultsByPrice('$$')} title='Bit Pricier'/>
            <ResultList results={filterResultsByPrice('$$$')} title='Big Spender'/>
            <ResultList results={filterResultsByPrice('$$$$')} title='Burger'/>
	</ScrollView>
	);
};
const style = StyleSheet.create({});

export default SearchScreen;