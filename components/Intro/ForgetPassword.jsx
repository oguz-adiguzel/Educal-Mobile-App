import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
const ForgetPassword = () => {
    const [email, setEmail] = useState();

    const signUpFunc = async () => {
        let data = {
            email,
        };
        console.log(`xxxvalues ==>`, data);
    };
    return (
        <View style={{flexDirection:'column', }} className="container flex-1 mx-auto w-[95%] h-screen">
            <View className='flex-1'>
                <View className="mt-4">
                    <Text className="text-[#FFB23F] text-4xl font-light">Şifremi Unuttum</Text>
                    <Text className="text-[#9E9E9E] leading-6 pr-6 mt-2">
                        Kurtarma E-postası Gönder diyerek gelen e-posta’dan yönlendirmeleri takip ediniz
                    </Text>
                </View>

                <View className="mt-9 relative">
                    <TextInput
                        className={
                            email
                                ? "border border-[#FFB23F] py-5 rounded-[16px] pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base"
                                : "border border-[#E0E0E0] py-5 rounded-[16px] pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base"
                        }
                        placeholder="E-posta"
                        value={email}
                        onChangeText={setEmail}
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
                        className={"w-full bg-[#FFB23F] py-5 rounded-full text-center text-white text-base mt-12"}
                    >
                        Kurtarma E-postası Gönder
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default ForgetPassword;

const styles = StyleSheet.create({
    bottomTexts: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#FFB23F",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});
