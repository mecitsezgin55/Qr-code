import React, { useEffect,useState,useRef } from 'react';

import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const App = () => {
  const scanner = useRef(null);
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() =>{
    setResult(null);
  },[])

  const onSuccess = e => {
    setResult(e);
    setScan(false);

    alert(e.data)
    
  };
  return !scan ? (
    <View style={styles.container}>
        <TouchableOpacity style={styles.buttonTouchable} onPress={()=> setScan(true)}>
          <Text style={styles.buttonText}>Start Scan</Text>
        </TouchableOpacity>
    </View>
    ): (
    <QRCodeScanner
      onRead={onSuccess}
      reactivate={true}
      ref={scanner}
      showMarker={true}
      
    />
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export {App};