import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Image source={product.image} style={styles.image}></Image>
        <Card.Title>{product.name}</Card.Title>

        <Text style={styles.text}>
          <Rating value={product.rating} />
        </Text>
        <Text style={styles.text}>{`${product.numReviews} reviews`}</Text>
        <Text style={styles.price}>EGP {product.price}</Text>
        <Card.Divider />
      </Card>
    </View>
  );
};

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
  text: {
    textAlign: 'center',
  },
  price: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Product;
