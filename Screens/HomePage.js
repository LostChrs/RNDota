
import React, { Component } from 'react';
import { connect, Provider } from "react-redux";
import configureStore from '../Store/configureStore';
import { Platform, StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Button, Toast, ActivityIndicator, WingBlank } from '@ant-design/react-native';
import { fetchRank } from '../Store/fetchActions';

class HomePage extends Component {
    state = {

    }
    componentDidMount() {
        this.props.fetchRank();
        console.log("hhhh");
    }
    renderItem = (item) => {
        return (
            <View style={styles.item}>
                <Image source={{ uri: item.avatar }} style={{ resizeMode: "contain", width: 40, height: 40, marginEnd: 10 }} />
                <Text>{item.personaname}</Text>
            </View>
        );
    }
    render() {
        const { loadingRank, rankErr, rankData } = this.props;
        if (loadingRank) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
                <ScrollView>
                    <WingBlank>
                        {rankData.map(item => this.renderItem(item))}
                    </WingBlank>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    item: {
        flexDirection: "row",
        width: "100%",
        height: 60,
        marginBottom: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        paddingStart: 10,
        paddingEnd: 10,
    }
});

const mapStateToProps = state => {
    return {
        loadingRank: state.dota.loadingRank,
        rankErr: state.dota.rankErr,
        rankData: state.dota.rankData,
    };
};

//同样的映射方法
const mapDispatchToProps = dispatch => {
    return {
        fetchRank: () => dispatch(fetchRank()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);