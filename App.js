import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/indexScreen';

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRoutName: 'Index',
  defaultNavigationOptions: {
    title: 'Bogs'
  }
});

export default createAppContainer(navigator);