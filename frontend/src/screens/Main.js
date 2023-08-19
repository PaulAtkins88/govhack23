import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Main = ({ navigation }) => {

  //Hardcode some items for now
  const items = [ 'One' , 'Two', 'Three']
  


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(item)}>
      <Card style={styles.card} onPress={() => console.log(item)}>
          <Title style={styles.title}>{item}</Title>
          <Paragraph style={styles.paragraph}>{formatDate(item)}</Paragraph>
      </Card>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <View style={styles.listWrapper}>
        <FlatList
          data={dwellings}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listWrapper: {
    flex: 0.8, // 80% height for the list
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
  },
  card: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginBottom: 10,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Add text shadow
    textShadowOffset: { width: 0, height: 1 }, // Add text shadow
    textShadowRadius: 1, // Add text shadow
  },

  createdAtText: { // Style for created at text
    color: '#777',
    fontSize: 12,
    textAlign: 'right',
    paddingRight: 8,
    paddingBottom: 4,
  },
  paragraph: {
    textAlign: 'center', // Center the 'added on' label
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a background to improve readability
    paddingVertical: 4, // Add some padding
  },
  flatList: {
    flexGrow: 1,
    marginBottom: 10, // Add margin to the bottom of the FlatList
  },

});


export default Main;