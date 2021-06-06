import React, {useState, useEffect} from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import auth from "@react-native-firebase/auth"
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Calculate from "./screens/calculate"
import Results from "./screens/results"
import ResultInfo from "./screens/resultInfo"
import Login from "./screens/login"
import Loading from "./screens/loading"
// import Contact from "./screens/contact"
import Working from "./screens/working"
import About from "./screens/about"


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function ResultsStack ({route}) {
    return(
      <Stack.Navigator headerMode = "none">
        <Stack.Screen name = "ResultsPage" component={Results} initialParams = {{user: route.params.user}}/>
        <Stack.Screen name = "Info" component={ResultInfo} initialParams = {{user: route.params.user}}/>
      </Stack.Navigator>
    )
  }

const AuthCheck = (props) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing){
    return(
    <Loading />
    )
  };

  if (!user) {
    return (
        <>
    <StatusBar style="auto"/>
    <NavigationContainer>
    <Stack.Navigator headerMode = "none">
      <Stack.Screen name = "Login" component={Login}/>
    </Stack.Navigator>
  </NavigationContainer>
  </>
    )
  } else{
    return(
        <>
    <StatusBar style="auto"/>
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Calculate') {
            iconName = focused
              ? 'calculator'
              : 'calculator-outline';
          } else if (route.name === 'Results') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Working') {
            iconName = focused ? 'book' : 'book-outline';
          }
            else if (route.name === 'Partners'){
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }
  
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#f21d1d',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Calculate" component={Calculate} initialParams = {{user: user}}/>
        <Tab.Screen name="Results" component={ResultsStack} initialParams = {{user: user}}/>
        <Tab.Screen name="Working" component={Working} initialParams = {{user: user}}/>
        <Tab.Screen name="Partners" component={About} initialParams = {{user: user}}/>
        {/* <Tab.Screen name="Contact" component={Contact} initialParams = {{user: user}}/> */}
      </Tab.Navigator>
  </NavigationContainer>
  </>
    )
  }
}
export default AuthCheck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});