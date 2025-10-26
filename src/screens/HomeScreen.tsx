import React from 'react';
import { View, Text, Button } from 'react-native';
import { signOut } from '../auth';
import { supabase } from '../supabase';

export default function HomeScreen() {
  const [email, setEmail] = React.useState<string | null>(null);
  React.useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
  }, []);
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', gap:12 }}>
      <Text style={{ fontSize:18 }}>Welcome {email ?? ''}</Text>
      <Button title="Sign out" onPress={() => signOut()} />
    </View>
  );
}