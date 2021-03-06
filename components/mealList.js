import React from 'react'
import {View, FlatList, StyleSheet, } from 'react-native'
import MealItem from './mealItem';


const MealList = props =>{

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => { 
                    props.navigation.navigate({
                        routeName: 'MealDetail', params: {
                            mealId: itemData.item.id
                        }
                    })
                }}
            />
        )
    }

    return(
        <View style={styles.list}>
            <FlatList data={props.data} key={(item, index) => item.id} renderItem={renderMealItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15
    }
})

export default MealList