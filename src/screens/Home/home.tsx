import React from "react";
import {Button, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {THome} from "./types";
import {styles} from "./style";
import {APPROUTES, LANGUAGES} from "../../types/enums";
import {API_URL} from "@env";
import {APP_IMAGES} from "../../utils/imageMapper";
import dimensions from "../../utils/dimensions";
import {AppDispatch} from "../../redux/store";
import {getLanguage} from "../../redux/features/language/languageSelectors";
import {setLanguage} from "../../redux/features/language/languageSlice";
import {CustomHeader, ImageRenderer} from "../../components";

export const Home: React.FC<THome> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector(getLanguage);

  const disptachSetLanguage = (selectedLanguage: LANGUAGES) => {
    dispatch(setLanguage(selectedLanguage));
  };

  const icons = [
    {
      component: (
        <ImageRenderer
          assetSrc={APP_IMAGES.home}
          width={dimensions.viewWidth(25)}
          height={dimensions.viewWidth(25)}
        />
      ),
      onClick: () => console.log("Search Clicked"),
    },
    {
      component: (
        <ImageRenderer
          assetSrc={APP_IMAGES.home}
          width={dimensions.viewWidth(25)}
          height={dimensions.viewWidth(25)}
        />
      ),
      onClick: () => console.log("Scanner Clicked"),
    },
  ];

  return (
    <>
      <CustomHeader title={"It All Starts Here"} actionIcons={icons} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{language.homeScreen.home}</Text>
        <Text>
          {language.homeScreen.env} {"->"} {API_URL}
        </Text>
        <Button
          title={language.homeScreen.details}
          onPress={() => navigation.navigate(APPROUTES.details)}
        />
        <ImageRenderer
          assetSrc={APP_IMAGES.booking}
          width={dimensions.viewWidth(200)}
          height={dimensions.viewWidth(200)}
        />
        <Button
          title="Set Language as Hindi"
          onPress={() => disptachSetLanguage(LANGUAGES.HINDI)}
        />
        <Button
          title="Set Language as English"
          onPress={() => disptachSetLanguage(LANGUAGES.ENGLISH)}
        />
      </View>
    </>
  );
};
