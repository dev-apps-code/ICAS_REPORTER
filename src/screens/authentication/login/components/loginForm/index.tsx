import React, {useState} from 'react';

import {Text, View} from 'react-native';
import {Formik} from 'formik';
import {LoginSchema} from '../../../../../constants/schema';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {MAIN_COLOR_TRANSPARENT} from '../../../../../constants/color';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {styles} from './styles';
export const LoginForm = () => {
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
        username: '',
        password: '',
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
                onChangeText={handleChange('username')}
                value={values.username}
                style={styles._formTextInput}
                theme={{roundness: 5}}
                mode={'outlined'}
                outlineColor={'rgba(0, 0, 0, 0.5)'}
                activeOutlineColor={MAIN_COLOR_TRANSPARENT}
                //   disabled={postUserLogin.isFetching || postUserLogin.isLoading}
                onBlur={handleBlur('username')}
              />
              <Text style={styles._formInputLabel}>Username</Text>

              {errors.username && touched.username && (
                <Text style={styles._formErrorText}>{errors.username}</Text>
              )}
            </View>

            <View style={styles._formFieldContainer}>
              <TextInput
                onChangeText={handleChange('password')}
                value={values.password}
                style={styles._formTextInput}
                theme={{roundness: 5}}
                mode={'outlined'}
                outlineColor={'rgba(0, 0, 0, 0.5)'}
                activeOutlineColor={MAIN_COLOR_TRANSPARENT}
                secureTextEntry={!showPassword}
                onBlur={handleBlur('password')}
                textContentType="oneTimeCode"
                //   disabled={postUserLogin.isFetching || postUserLogin.isLoading}
                right={
                  <TextInput.Icon
                    icon={!showPassword ? 'eye' : 'eye-off'}
                    size={hp(3)}
                    style={{
                      marginTop: hp(1.5),
                    }}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
              />
              <Text style={styles._formInputLabel}>Password</Text>

              {errors.password && touched.password && (
                <Text style={styles._formErrorText}>{errors.password}</Text>
              )}
            </View>
          </View>
          <Button
            contentStyle={styles._formSubmitButton}
            mode="elevated"
            labelStyle={styles._formSubmitText}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'ReportStackScreen'}],
              });
            }}>
            Login
          </Button>
        </>
      )}
    </Formik>
  );
};
