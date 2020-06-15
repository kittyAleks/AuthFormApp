import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/navigation/RootStackScreen';

export default class App extends React.Component {
  render() {
    return <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>

  }
}
// export default App = () => {
//   return (
//     <MainScreen />
//   )
// }
