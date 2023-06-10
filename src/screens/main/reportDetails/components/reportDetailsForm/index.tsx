import React, {useState} from 'react';

import {Alert, Text, View} from 'react-native';
import {Formik} from 'formik';
import {LoginSchema} from '../../../../../constants/schema';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {
  MAIN_COLOR,
  MAIN_COLOR_TRANSPARENT,
} from '../../../../../constants/color';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {IconButton, MD3Colors} from 'react-native-paper';
import ElevatedView from 'react-native-elevated-view';
import {ICON_SIZE} from '../../../../../constants/sizes';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './styles';
export const ReportDetailsForm = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const onPressSubmit = async (values, setFieldError) => {
    //   await userLogin(values);
  };

  return (
    <Formik
      enableReinitialize
      validateOnBlur={false}
      initialValues={{
        notes: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, {setFieldError}) => {
        await onPressSubmit(values, setFieldError);
        return false;
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <View style={styles._formMainContainer}>
            <View style={styles._formFieldContainer}>
              <TextInput
                onChangeText={handleChange('notes')}
                value={values.notes}
                style={styles._formTextInput}
                theme={{roundness: 5}}
                mode={'outlined'}
                outlineColor={'rgba(0, 0, 0, 0.5)'}
                activeOutlineColor={MAIN_COLOR_TRANSPARENT}
                multiline={true}
                //   disabled={postUserLogin.isFetching || postUserLogin.isLoading}
                onBlur={handleBlur('notes')}
              />
              <Text style={styles._formInputLabel}>Notes</Text>

              {errors.notes && touched.notes && (
                <Text style={styles._formErrorText}>{errors.notes}</Text>
              )}
            </View>
          </View>
          <ElevatedView
            elevation={3}
            style={styles._formMediaRowElevatedContainer}>
            <Text style={styles._formMediaTypeText}>Take a photo or video</Text>
            <Feather
              name="plus-circle"
              size={ICON_SIZE * 1.5}
              color={MAIN_COLOR}
              // onPress={() => {
              //   navigation.push('AppCamera');
              // }}
            />
          </ElevatedView>
          <ElevatedView
            elevation={3}
            style={styles._formMediaRowElevatedContainer}>
            <Text style={styles._formMediaTypeText}>
              Upload a photo or video
            </Text>
            <Feather
              name="plus-circle"
              size={ICON_SIZE * 1.5}
              color={MAIN_COLOR}
              // onPress={() => {
              //   navigation.push('AppCamera');
              // }}
            />
          </ElevatedView>
          <ElevatedView
            elevation={3}
            style={styles._formMediaRowElevatedContainer}>
            <Text style={styles._formMediaTypeText}>Record a voice audio</Text>
            <Feather
              name="plus-circle"
              size={ICON_SIZE * 1.5}
              color={MAIN_COLOR}
              // onPress={() => {
              //   navigation.push('AppCamera');
              // }}
            />
          </ElevatedView>
          <View style={styles._formFooterContainer}>
            <Button
              contentStyle={styles._formSubmitButton}
              mode="elevated"
              labelStyle={styles._formSubmitText}
              onPress={() => {
                Alert.alert('Submitted');
              }}>
              Submit
            </Button>
          </View>
        </>
      )}
    </Formik>
  );
};
