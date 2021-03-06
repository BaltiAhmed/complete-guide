import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import DefaultText from './defaultText'

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal} >
                <View>
                    <View style={{ ...styles.MealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <Text style={styles.title} >
                                {props.title}
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.MealRow, ...styles.mealDetail }}>
                        <DefaultText>
                            {props.duration}m
                        </DefaultText>
                        <DefaultText>
                            {props.complexity.toUpperCase()}
                        </DefaultText>
                        <DefaultText>
                            {props.affordability.toUpperCase()}
                        </DefaultText>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius:10,
        overflow:'hidden'
    },
    MealRow: {
        flexDirection: 'row',

    },
    mealHeader: {
        height: '85%',

    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems:'center',
        height:'15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent:'flex-end'
    },
    title:{
        fontSize:20,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign:'center'
    }
})

export default MealItem