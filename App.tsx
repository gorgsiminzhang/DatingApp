
import 'react-native-gesture-handler';
import React from 'react';
// App.tsx (top of file)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import { supabase } from './src/supabase';
import { View, ActivityIndicator } from 'react-native';

type RootStackParamList = { Auth: undefined; Home: undefined };
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [checking, setChecking] = React.useState(true);
  const [isAuthed, setAuthed] = React.useState(false);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setAuthed(!!data.session); setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setAuthed(!!session);
    });
    return () => { sub.subscription.unsubscribe(); };
  }, []);

  if (checking) return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <ActivityIndicator />
    </View>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        {isAuthed ? <Stack.Screen name="Home" component={HomeScreen} /> :
                    <Stack.Screen name="Auth" component={AuthScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}