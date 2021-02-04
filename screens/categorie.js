import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/categoryGrid'



const Categories = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGrid
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategorieMeal', params: {
                            categoryID: itemData.item.id
                        }
                    })
                }}
            />
        )
    }
    return (
        <FlatList
            keyExtractor={(item, index) => { item.id }}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

Categories.navigationOptions = {
    headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
})

export default Categories