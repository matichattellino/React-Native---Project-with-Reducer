import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  const {navigation} = props;

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button  
            title="Go to components demo"
            onPress={() => navigation.navigate("Components")}
        />
     <Button 
            title="Go to list demo"
            onPress={() => navigation.navigate("List")}
     />
     <Button 
            title="Go to image demo"
            onPress={() => navigation.navigate("Image")}
     />
     <Button 
            title="Go to Counter Demo"
            onPress={() => navigation.navigate("Counter")}
     />
      <Button 
            title="Go to Color Screen"
            onPress={() => navigation.navigate("Color")}
     /> 
     <Button 
            title="Go to Square Demo"
            onPress={() => navigation.navigate("Square")}
    />
     <Button  
            title="Go to Text Demo"
            onPress={() => navigation.navigate("Text")}
      />
      <Button  
            title="Go to Box Demo"
            onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  }
});

export default HomeScreen;
