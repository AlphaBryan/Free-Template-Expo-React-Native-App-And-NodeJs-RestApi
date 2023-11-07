import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../screens/home';
import { Screens } from '../../screens';
import CurrentUser from '../../screens/profile/currentUser';
import { COLORS } from '../styles/color';
import { vs } from '../styles/sizing/sizesHandler';
import { HomeIcon, UserIcon } from '../styles/icons';
import OtherUser from '../../screens/profile/otherUser';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.HOME} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screens.NAVIGATION_BAR} component={NavigationBar} />

         {/* Add screen that wont be in the navigation bar here  */}
        <Stack.Screen name={Screens.OTHER_USER_PROFILE} component={OtherUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
          paddingBottom: vs(1),
        },
        tabBarItemStyle: {
          backgroundColor: COLORS.WHITE,
        },
        // Specify special colors of the icon when it's active and inactive
        // tabBarActiveTintColor: COLORS.PRIMARY_COLOR_LIGHT_1,
        // tabBarInactiveTintColor: COLORS.SECONDARY_COLOR_LIGHT_1,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={Screens.CURRENT_USER_PROFILE}
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, color }: { size: number, color: string }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.HOME}
        component={CurrentUser}
        options={{
          tabBarLabel: '',
            tabBarIcon: ({ size, color }: { size: number, color: string }) => (
            <UserIcon size={size} color={color} />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
}