import { addTextbookToLibrary } from "@/api/textbook/addTextbookApi";
import { useState } from "react";
import { Modal, View, StyleSheet, Text, TextInput, TouchableHighlight, Button } from "react-native";

type Props = {
    isVisible: boolean;
    onClose: (updated: boolean) => void;
}

export default function AddTextbookOverlay({isVisible, onClose}: Props) {
    const [textbookCode, setTextbookCode] = useState('');

    const submit = async () => {
        let ret = await addTextbookToLibrary(textbookCode);
        console.log(ret);
        if(ret){
            onClose(true);
        }
    }

    const cancel = () => onClose(false);
    
    return (
        <View>
            <Modal animationType="fade" transparent={true} visible={isVisible}>
                <View style={styles.modal_content}>
                    <View style={styles.form}>
                        <Text style={styles.form_label}> Add textbook </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Textbook code(6 digits)"
                            placeholderTextColor="#777"
                            value={textbookCode}
                            onChangeText={setTextbookCode}
                            autoCapitalize="none"
                            maxLength={6}
                            />
                        <View style={styles.button_bar}>
                            <Button title="Submit" onPress={submit}></Button>
                            <Button title="Cancel" onPress={cancel}></Button>
                        </View>
                    </View>
                </View>
                
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#2C2C2E',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 16,
        color: '#FFFFFF',
        fontSize: 16,
        paddingRight: 50,
    },
    modal_content: {
        height: '100%',
        width: '100%',
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#12121266'
    },
    form: {
        backgroundColor: '#121212',
        padding: 25,
        borderRadius: 10
    },
    form_label: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        width: '50%'
    },
    button_bar: {
        flexDirection: "row",
        alignContent: 'center',
        justifyContent: 'center'
    }
});
