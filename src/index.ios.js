'use strict';

// it is important to import the react-native package before anyhting else
import {
  AppRegistry
} from 'react-native';

import App from './common/components/App';

AppRegistry.registerComponent('iosApp', () => App);
