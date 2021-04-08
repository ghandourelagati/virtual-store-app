import * as React from 'react';
import products from '../products';
import { StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import { Card } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  render() {
    let image = products.map((product) => {
      image = this.setState.image;
    });
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Card style={styles.card}>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider />
            {products.map((product, _id) => {
              return (
                <View key={_id} style={styles.container}>
                  <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={product.image}
                  />
                  <Text style={styles.name}>{product.name}</Text>
                </View>
              );
            })}
          </Card>
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
  },
  card: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
});
