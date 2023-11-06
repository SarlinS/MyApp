import React, { useEffect, useState} from 'react';
import { View, Text, Button } from 'react-native';
import inspiringQuotes from '../components/Quotes';

function QuoteScreen() {

  const [quote, setQuote] = useState("");

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * inspiringQuotes.length);
    setQuote(inspiringQuotes[randomIndex]);

  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{marginBottom: 20, marginHorizontal: 20}}>
      <Text>{quote}</Text>
      </View>
      <Button title="Uusi quote" onPress={getRandomQuote} />
    </View>
  );
}

export default QuoteScreen;