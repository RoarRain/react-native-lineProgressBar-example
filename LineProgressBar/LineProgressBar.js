/**
 * Created by denzyl on 2018/1/12.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    ART
} from 'react-native';

const {
    Surface,
    Group,
    Shape,
    LinearGradient,
    Path,
} = ART;

export default class LineProgressBar extends Component {

    static defaultProps = {
        barColor: new LinearGradient({
                '0': 'red',
                '1': 'blue'
            },
            '', "", 100,  ''),
        backgroundPath: new Path(),
        abovePath: new Path(),
        progressNumber: 0,
        progressTotal: 100,
        backgroundLineHeight: 2,
        aboveLineHeight: 2,
        backgroundLineColor: '#EAEAEB',
        aboveLineColor: '#3D8A52'
    };

    constructor(props) {
        super(props);
        this.state = {
            aboveLineColor: '#667733',
            centerViewText: '0'
        };
    }

    componentDidMount() {

        const {style, progressTotal, progressNumber,barStartColor, barEndColor} = this.props;

        this.setState({
            backgroundPath: this.getBackGroundPath(style.width, style.height),
            abovePath: this.getAboveGroundPath(style.width / progressTotal * progressNumber, style.height),
            barColor: this.getLinearGradient(barStartColor, barEndColor)
        })

    }

    componentWillReceiveProps(nextProps) {

        if (nextProps != this.props) {
            this.setState({
                backgroundPath: this.getBackGroundPath(nextProps.style.width, nextProps.style.height),
                abovePath: this.getAboveGroundPath(nextProps.style.width / nextProps.progressTotal * nextProps.progressNumber, nextProps.style.height, 6),
                barColor: this.getLinearGradient(nextProps.barStartColor, nextProps.barEndColor),
            })
        }
    }

    getLinearGradient = (startColor, endColor) => {
        return(
            new LinearGradient({
                    '0': startColor,
                    '1': endColor
                },
                '', "", this.props.style.width,  ''
            )
        )
    };

    getBackGroundPath = (width, height) => {

        const {strokeWidth} = this.props;
        height = height - strokeWidth * 2;
        return(
            new Path()
                .moveTo(height / 2 + strokeWidth,  strokeWidth)
                .lineTo(width - height / 2 - strokeWidth, strokeWidth)
                .arcTo(width - strokeWidth, height/ 2 + strokeWidth)
                .arcTo(width - strokeWidth - height / 2, height + strokeWidth)
                .lineTo(height / 2 + strokeWidth, height + strokeWidth)
                .arcTo(strokeWidth, height / 2 + strokeWidth)
                .arcTo(height / 2 + strokeWidth, strokeWidth)
                .close()
        )
    };

    getAboveGroundPath = (width, height) => {

        const {strokeWidth, progressNumber} = this.props;

        if (width == 0){
            return new Path();
        }

        height = height - strokeWidth * 2;

        return(
            new Path()
                .moveTo(height / 2 + strokeWidth,  strokeWidth)
                .lineTo(width - height / 2 - strokeWidth, strokeWidth)
                .arcTo(width - strokeWidth, height/ 2 + strokeWidth)
                .arcTo(width - strokeWidth - height / 2, height + strokeWidth)
                .lineTo(height / 2 + strokeWidth, height + strokeWidth)
                .arcTo(strokeWidth, height / 2 + strokeWidth)
                .arcTo(height / 2 + strokeWidth, strokeWidth)
                .close()
        )
    };


    render() {
        return (
            <View {...this.props}>
                <Surface width={this.props.style.width} height={this.props.style.height}>
                    <Group>
                        <Shape
                            d={this.state.backgroundPath}
                            fill={'#F2F2F2'}
                        />
                        <Shape
                            d={this.state.abovePath}
                            fill={this.state.barColor}
                            strokeWidth={this.props.strokeWidth}
                            stroke={this.props.strokeColor}
                        />
                    </Group>
                </Surface>
            </View>
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