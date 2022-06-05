import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LoginForm from "../../src/components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

const AccountScreen = () => {
  const auth = null;
  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

const styles = StyleSheet.create({});

export default AccountScreen;
