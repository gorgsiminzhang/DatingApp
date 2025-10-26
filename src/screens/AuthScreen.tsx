import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { signInEmail, signUpEmail } from '../auth';

export default function AuthScreen() {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState('');
  return (
    <View style={{ flex:1, justifyContent:'center', padding:16, gap:12 }}>
      <Text style={{ fontSize:24, fontWeight:'700', textAlign:'center' }}>Sign in</Text>
      <TextInput placeholder="Email" autoCapitalize="none" keyboardType="email-address"
        value={email} onChangeText={setEmail} style={{ borderWidth:1, borderRadius:8, padding:12 }} />
      <TextInput placeholder="Password" secureTextEntry value={password}
        onChangeText={setPassword} style={{ borderWidth:1, borderRadius:8, padding:12 }} />
      <Button title="Sign In" onPress={async () => {
        try { await signInEmail(email.trim(), password); } catch(e:any){ Alert.alert('Sign in error', e.message); }
      }} />
      <Button title="Create Account" onPress={async () => {
        try { await signUpEmail(email.trim(), password); Alert.alert('Check your email to verify.'); }
        catch(e:any){ Alert.alert('Sign up error', e.message); }
      }} />
      <Text style={{ opacity:0.6, textAlign:'center', marginTop:8 }}>
        Supabase sends verification emails automatically on sign-up.
      </Text>
    </View>
  );
}