/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import EmailChip from 'react-native-email-chip';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
    }
  }
  onChange = (emails) => {
    this.setState({ emails })
  }
  render() {
    return (
      <View style={styles.mainView}>
        <EmailChip
          emails={this.state.emails}
          onChange={this.onChange}
        // placeholder="Email"
        // placeholderTextColor="black"
        // chipContainerStyle={{backgroundColor:'red'}}
        // invalidChipContainerStyle={{backgroundColor:'blue'}}
        // chipTextStyle={{color:'#000'}}
        // invalidChipTextStyle = {{color: 'blue'}}
        // textInputStyles={{borderBottomWidth: 0}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: { flex: 1, justifyContent: 'center' }
})
export default App;
