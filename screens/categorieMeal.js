import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/mealItem';



const CategorieMeal = props => {

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


    const catID = props.navigation.getParam('categoryID')
    const displayMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catID) >= 0)


    return (
        <View>
            <FlatList data={displayMeals} key={(item, index) => item.id} renderItem={renderMealItem} />
        </View>
    )
}

CategorieMeal.navigationOptions = (navigationData) => {
    const catID = navigationData.navigation.getParam('categoryID')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID)

    return {
        headerTitle: selectedCategory.title,

    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategorieMeal