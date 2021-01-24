import React, { useState, useEffect } from "react";
import { TextInput, State } from "react-native-gesture-handler";
import {
  View,
  Text,
  Button,
  Platform,
  Dimensions,
  Alert,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { connect } from "react-redux";
import { tryLogin } from "../Redux/actionCreator";
import * as types from "../Redux/types";

const MenuIcon = ({ navigation }) => (
  <Icon
    name="three-bars"
    size={30}
    color="#000"
    onPress={() => navigation.openDrawer()}
  />
);

function SplashScreen({ logout }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Back to Login Page</Text>
      <Button
        onPress={() => {
          logout();
        }}
        title="LogOut"
      />
    </View>
  );
}

const LoginScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkCredentials = () => {
    props.logginIn({ username: username, password: password });
  };

  if (!props.isLoggedIn) {
    return (
      <>
        <View>
          <StatusBar backgroundColor="#0a3d0a" barStyle="light-content" />
          <MenuIcon navigation={props.navigation} />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>User Name</Text>
          <View>
            <TextInput
              placeholder="UserName"
              autoCapitalize="none"
              onChangeText={(val) => setUsername(val)}
              autoCorrect={false}
            />
          </View>
          <Text>Password</Text>
          <View>
            <TextInput
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={(val) => setPassword(val)}
              secureTextEntry
              autoCorrect={false}
            />
          </View>
          <View>
            <Button onPress={() => checkCredentials()} title="Login" />
            {props.errorMessage ? (
              <Text style={{ color: "red" }}>{props.errorMessage}</Text>
            ) : null}
          </View>
        </View>
      </>
    );
  } else {
    return <SplashScreen logout={props.logginOut} />;
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logginIn: (username, password) => dispatch(tryLogin(username, password)),
  logginOut: () =>
    dispatch({ type: types.LOGOUT, payload: { isLoggedIn: false } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
