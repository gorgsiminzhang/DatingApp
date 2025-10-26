// app.config.ts
import 'dotenv/config';
export default {
  expo: {
    name: 'Dating App',
    slug: 'dating-app',
    scheme: 'dating-app',
    extra: {
      EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
};
