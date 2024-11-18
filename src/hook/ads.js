import mobileAds,{MaxAdContentRating} from "react-native-google-mobile-ads";
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';

export const useAdsInit = async () => {
    const { status } = await requestTrackingPermissionsAsync();

    if (status === 'granted') {
      console.log('Yay! I have user permission to track data');
    }
    
    mobileAds()
    .setRequestConfiguration({
      // Update all future requests suitable for parental guidance
      maxAdContentRating: MaxAdContentRating.PG,

      // An array of test device IDs to allow.
      testDeviceIdentifiers: ['EMULATOR'],
    })
    .then(() => {
      // Request config successfully set!
    });
    const adapterStatuses = await mobileAds().initialize();
    console.log(adapterStatuses)
}