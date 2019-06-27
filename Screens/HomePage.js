
import React, { Component } from 'react';
import { connect, Provider } from "react-redux";
import configureStore from '../Store/configureStore';
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import { Button, Toast, ActivityIndicator, WingBlank, Tag, Icon } from '@ant-design/react-native';
import { fetchRank } from '../Store/fetchActions';
import { Configs } from '../Consts/Config';

class HomePage extends Component {
    state = {

    }
    componentDidMount() {
        this.props.fetchRank();
    }
    onPressItem = (item)=>{

    }
    renderItem = ({ item }) => {
        const iconUri = Configs.imageUrl + item.img;
        return (
            <TouchableHighlight onPress={()=>this.onPressItem(item)}>
                <View style={styles.item}>
                    <Image source={{ uri: iconUri }} style={{ resizeMode: "contain", width: 60, height: 60, marginEnd: 10 }} />
                    <Text>{item.localized_name}</Text>
                    <View style={{ position: "absolute", right: 26,width:120, flexDirection: "row", justifyContent: "space-between",alignItems:"center" }}>
                        <Text>{item.pro_win}</Text>
                        <Icon name="right" />
                    </View>
                </View>
            </TouchableHighlight>
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
            <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
                <FlatList
                    data={this.props.rankData}
                    renderItem={this.renderItem}
                />
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
        height: 50,
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