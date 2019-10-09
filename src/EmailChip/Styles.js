
import { StyleSheet } from 'react-native'
 const styles = StyleSheet.create({
    emailChipContainer: { flexDirection: 'row', flexWrap: 'wrap' },
    chipView:{flexDirection: 'row', alignItems: 'center', padding: 10, borderRadius: 15, margin: 5 },
    emailChipView: { backgroundColor: '#d2d5dd'},
    invalidEmailChipView: { backgroundColor: '#CC2D22'},
    emailChipText:{color: 'black'},
    invalidEmailChipText:{color: 'white'},
    removeView: { alignItems: 'center' },
    removeIcon: { width: 14, height: 14, marginLeft: 10 },
    textInput: { borderBottomWidth: 1, marginTop: 20, marginHorizontal: 10 },
});
export default styles;