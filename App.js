import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import MealNavigator from "./navigation/mealsNavigator";
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import mealsReducers from './store/reducers/meals'


enableScreens();

const routeReducer = combineReducers({
  meals: mealsReducers
})

const store = createStore(routeReducer)


export default function App() {
  return (
    <Provider store={store}>
      <MealNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
