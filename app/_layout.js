import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font"; //added this to handle custom fonts error
import * as SplashScreen from 'expo-splash-screen';

//when app is initially loading, this will make splashcreen visible
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      //hide the splashscreen immediately since fonts have been loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])
  if (!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView } />;
}

export default Layout