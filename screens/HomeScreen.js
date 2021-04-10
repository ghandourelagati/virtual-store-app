import * as React from 'react';
import products from '../products';
import { StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import Product from '../components/Product';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {products.map((product, _id) => {
            return (
              <View key={_id} style={styles.container}>
                <Product product={product} />
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  card: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
