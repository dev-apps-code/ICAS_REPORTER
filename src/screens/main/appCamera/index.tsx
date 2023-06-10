import React, {useEffect, useRef, useState} from 'react';
import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
  CameraButton,
} from 'react-native-vision-camera';
import {styles} from './styles';

export const AppCamera = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  useCameraDevices;
  const cameraRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const checkCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app requires camera permission.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setHasCameraPermission(true);
      } else {
        setHasCameraPermission(false);
      }
    } catch (error) {
      console.warn('Error requesting camera permission:', error);
    }
  };

  if (device == null) {
    return <ActivityIndicator size={20} color={'red'} />;
  }
  console.log(device?.id);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto();
      console.log(photo);
      console.log(photo.uri);
    }
  };

  const toggleRecording = async () => {
    if (!isRecording) {
      setIsRecording(true);
      const video = await cameraRef.current.recordVideo();
      console.log(video.uri);
      setIsRecording(false);
    } else {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={cameraRef}
        device={devices.back}
        isActive={true}
        photo={true}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.buttonText}>Take Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleRecording}>
          <Text style={styles.buttonText}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* <CameraButton
        style={styles.cameraButton}
        onPress={() => selectDevice(devices.front)}
        isActive={devices.front === cameraRef.current?.device}>
        <Text style={styles.cameraButtonText}>Switch Camera</Text>
      </CameraButton> */}
    </View>
  );
};
