// This file is the entry for the tabs. It should redirect to the first tab (tab1) to avoid route warnings.
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function TabsIndexRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace({ pathname: '/(tabs)/tab1' });
  }, [router]);
  return null;
}
