import * as React from 'react';
import { Button, Text, View, TouchableOpacity, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from "react-native-linear-gradient";
import { images, COLORS, SIZES, FONTS } from '../constants';
import CustomButton from "../components/CustomButton"


export default function AccountScreen({ navigation }) {

    function renderHeader() {
      return (
        <View
          style={{
            height: SIZES.height > 700 ? "65%" : "60%"
          }}
        >
          <ImageBackground
            source={images.loginBackground}
            style={{
              flex: 1,
              justifyContent: 'flex-end'
            }}
            resizeMode="cover"
            >
              <LinearGradient
                start={{ x: 0, y: 0}}
                end={{ x: 0, y: 1}}
                colors={[
                  COLORS.transparent,
                  COLORS.black
                ]}
                style={{
                  height: 200,
                  justifyContent: 'flex-end',
                  paddingHorizontal: SIZES.padding
                }}
              >

                <Text
                  style={{
                    width: "85%",
                    color: COLORS.white,
                    ...FONTS.largeTitle,
                    lineHeight: 45
                  }}
                >
                  Cooking a Delicous Food Easily
                </Text>

              </LinearGradient>  
          </ImageBackground>

        </View>
      )
    }

    function renderDetail() {
      return (
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.padding
          }}
        >

          <Text
            style={{
              marginTop: SIZES.radius,
              width: "70%",
              color: COLORS.gray,
              ...FONTS.body3
            }}
          >
            Discover more than 1200 food recipes in your hands and cooking it easily!
          </Text>

          {/* Button */}
          <View
          style={{
            flex: 1,
            justifyContent: 'center'
          }}
          >
          {/* Login Button */}
          <CustomButton 
            buttonText="Login"
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
          }}
          colors={[COLORS.darkGreen, COLORS.lime]}
          onPress={() => navigation.navigate("Account")}
          />
          </View>

          {/* Sign Up */}
          <CustomButton 
            buttonText="Sign Up"
            buttonContainerStyle={{
              marginBottom: SIZES.h1,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1
            }}
            colors={[]}
            onPress={() => navigation.replace("Home")}
          />
        </View>
      )
    }

    return (
      <View 
        style={{ 
          flex: 1, 
          backgroundColor: COLORS.black, 
        }}>
        <Text>Login</Text>
        
        <StatusBar barStyle="light-content" />

        {/* Header */}
        {renderHeader()}

        {/* Detail */}
        {renderDetail()}

      </View>
    );
}
