
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Animated
} from 'react-native';

import LineProgressBar from './LineProgressBar'

const AnimatedLineProgressBars = Animated.createAnimatedComponent(LineProgressBar);

export default class AnimatedLineProgressBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progressNumber: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.startAnimate(this.props.progressNumber)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps != this.props && nextProps.progressNumber != this.props.progressNumber) {
            this.startAnimate(nextProps.progressNumber)
        }
    }

    startAnimate(progress) {
        this.state.progressNumber.setValue(0);
        Animated.timing(this.state.progressNumber, {
            toValue: progress,
            duration: 1000
        }).start();
    }

    render() {

        const {progressNumber, ...other} = this.props;

        return (
            <AnimatedLineProgressBars
                {...other}
                progressNumber = {this.state.progressNumber}
            />
        )
    }

    componentWillUnmount() {
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4'
    },
})
