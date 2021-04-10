import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class Rating extends React.Component {
  state = {
    rating: this.props.rating ?? 5,
    animation: new Animated.Value(1),
    numStars: this.props.numStars ?? 5,
  };

  rate = (star) => {
    this.setState({ rating: star });
  };

  animate = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      this.state.animation.setValue(1);
    });
  };

  render() {
    let stars = [];

    const animateScale = this.state.animation.interpolate({
      inputRange: [1, 1.5, 2],
      outputRange: [1, 1.4, 1],
    });

    const animateOpacity = this.state.animation.interpolate({
      inputRange: [1, 1.2, 2],
      outputRange: [1, 0.1, 1],
    });

    const animationStyle = {
      transform: [{ scale: animateScale }],
      opacity: animateOpacity,
    };

    for (let x = 1; x <= this.state.numStars; x++) {
      stars.push(
        <TouchableWithoutFeedback
          key={x}
          onPress={() => {
            this.rate(x), this.animate();
          }}>
          <Animated.View style={x <= this.state.rating ? animationStyle : ''}>
            <Star filled={x <= this.state.rating ? true : false} />
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    }
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>{stars}</View>
      </View>
    );
  }
}

class Star extends React.Component {
  render() {
    return (
      <FontAwesome
        name={this.props.filled === true ? 'star' : 'star-o'}
        color='#f8e825'
        size={24}
        style={{ marginHorizontal: 6 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Rating;
