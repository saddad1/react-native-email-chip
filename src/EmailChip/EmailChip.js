import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles.js';

class EmailChip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: this.props.emails,
            emailId: ''
        }
    }
    static getDerivedStateFromProps(props, current_state) {
        if (current_state.emails !== props.emails) {
            return {
                emails: props.emails,
            }
        }
        return null
    }
    removeEmail = (index) => {
        var tempEmails = [...this.state.emails];
        tempEmails.splice(index, 1);
        this.props.onChange(tempEmails);
        this.input.focus();
    }
    addEmail = () => {
        let regexFullSpace = /^\s*$/;
        if (this.state.emailId != "" && !regexFullSpace.test(this.state.emailId)) {
            var tempEmails = [...this.state.emails];
            tempEmails.push(this.state.emailId);
            this.props.onChange(tempEmails);
        }
        this.setState({
            emailId: ''
        }, () => {
            this.input.focus();
        });
    }


    render() {
        var regexEmail = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-z]{2,4})$/; //Email regex
        var textInputStyles = this.props.textInputStyles ? this.props.textInputStyles : styles.textInput;
        var placeholderTextColor = this.props.placeholderTextColor ? this.props.placeholderTextColor : 'grey';
        var placeholder = this.props.placeholder ? this.props.placeholder : 'Enter email';
        return (
            <>
                <View style={styles.emailChipContainer}>
                    {
                        this.state.emails.map((email, index) => {
                            // var closeIcon = regexEmail.test(email) ? 'https://icon-library.net/images/close-icon-png/close-icon-png-22.jpg' : 'https://icon-library.net/images/svg-close-icon/svg-close-icon-26.jpg';
                            var closeIcon = regexEmail.test(email) ? 'https://www.gstatic.com/images/icons/material/system/1x/close_black_16dp.png' : 'https://www.gstatic.com/images/icons/material/system/1x/close_white_16dp.png';
                            var chipContainerStyle = regexEmail.test(email) ? this.props.chipContainerStyle ? this.props.chipContainerStyle : styles.emailChipView : this.props.invalidChipContainerStyle ? this.props.invalidChipContainerStyle : styles.invalidEmailChipView
                            var chipTextStyle = regexEmail.test(email) ? this.props.chipTextStyle ? this.props.chipTextStyle : styles.emailChipText : this.props.invalidChipTextStyle ? this.props.invalidChipTextStyle : styles.invalidEmailChipText
                            return (
                                <View key={index} style={[styles.chipView, chipContainerStyle]}>
                                    <Text style={chipTextStyle}>
                                        {email}
                                    </Text>
                                    <TouchableOpacity style={styles.removeView} onPress={() => this.removeEmail(index)}>
                                        <Image style={styles.removeIcon}
                                            source={{ uri: closeIcon }} />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }

                </View>
                <TextInput ref={(input) => this.input = input} keyboardType="email-address" autoCapitalize="none" style={textInputStyles} placeholderTextColor={placeholderTextColor} placeholder={placeholder} value={this.state.emailId} onChangeText={(emailId) => this.setState({ emailId })}
                    onEndEditing={() => this.addEmail()}
                />
            </>
        );
    }
}
Component.propTypes = {
    emails: PropTypes.array,
    chipContainerStyle: PropTypes.object,
    invalidChipContainerStyle: PropTypes.object,
    chipTextStyle: PropTypes.object,
    invalidChipTextStyle: PropTypes.object,
    textInputStyles: PropTypes.object,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string
}
export default EmailChip;