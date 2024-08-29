import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_SIZE = 55;
const CELL_BORDER_RADIUS = 16;
const DEFAULT_CELL_BG_COLOR = "#fff";
const NOT_EMPTY_CELL_BG_COLOR = "#FFB23F";
const ACTIVE_CELL_BG_COLOR = "#f7fafe";

const { Value, Text: AnimatedText, View: AnimatedView } = Animated;

const CELL_COUNT = 4;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const ForgetPassword = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);
    return (
      <AnimatedView
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        <Text style={styles.cellText}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      </AnimatedView>
    );
  };
  const signUpFunc = async () => {
    let data = {
      value,
    };
    console.log(`xxxvalues ==>`, data);
  };
  return (
    <View
      style={{ flexDirection: "column" }}
      className="container flex-1 mx-auto w-[95%] h-screen"
    >
      <View className="flex-1">
        <View className="mt-4">
          <Text className="text-[#FFB23F] text-4xl font-light">
            SMS Doğrulama
          </Text>
          <Text className="text-[#9E9E9E] leading-6 pr-6 mt-2">
            Telefonunuza gelen 4 haneli doğrulama kodunu giriniz
          </Text>
        </View>
        <View style={styles.root}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
        </View>
      </View>

      <View className="flex-1 justify-end mb-3">
        <TouchableOpacity
          onPress={() => {
            signUpFunc();
          }}
        >
          <Text
            className={
              "w-full bg-[#FFB23F] py-5 rounded-full text-center text-white text-base mt-12"
            }
          >
            Onayla
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    borderRadius: 16,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cellText: {
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: "center",
    color: "#FFB23F",
  },
  root: {
    minHeight: 800,
    padding: 20,
  },
});
