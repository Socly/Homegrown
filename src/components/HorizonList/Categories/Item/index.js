/** @format */

import React, { Component } from "react";
import { Text, View, Image } from "react-native";

import { withTheme } from "@common";
import { TouchableScale } from "@components";

import styles from "./styles";

class Item extends Component {
  render() {
    const {
      item,
      label,
      onPress,
      theme: {
        colors: { text },
      },
    } = this.props;

    return (
      <View style={styles.container}>
        <TouchableScale
          scaleTo={0.7}
          style={styles.wrap}
          onPress={() => onPress({ ...item, circle: true, name: label })}>
          <View
            style={[
              styles.background,
              { borderWidth:2,borderColor:'#F8D22F'},
            ]}
          />

          <View style={styles.iconView}>
            <Image
              source={item.image}
              style={[styles.icon, { tintColor: "black" }]}
            />
          </View>
          <Text style={[styles.title, { color: text }]}>{label}</Text>
        </TouchableScale>
      </View>
    );
  }
}

export default withTheme(Item);
