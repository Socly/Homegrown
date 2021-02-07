import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';

const TextInputCart = (props) => {
    return (
        <TextInput
          label={props.label}
          value={props.text}
        //   onChangeText={props.onChangeText}
        />
      );;
  };
    
  const styles = StyleSheet.create({

  });
  
  export default TextInputCart;