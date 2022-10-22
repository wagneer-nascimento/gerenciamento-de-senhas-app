import React from "react";
import mobileAds, { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';

import { ContainerBanner } from "./styles";

interface Props {
    id: string;
}
export default function BannerAdmob({ id }: Props) {
    const adUnitId = __DEV__ ? TestIds.BANNER : id;

    //import mobileAds from 'react-native-google-mobile-ads';

    /*mobileAds()
        .initialize()
        .then(adapterStatuses => {
            // Initialization complete!
        });
    */
    return (
        <ContainerBanner>

            <BannerAd
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                unitId={adUnitId} />

        </ContainerBanner>
    )
}