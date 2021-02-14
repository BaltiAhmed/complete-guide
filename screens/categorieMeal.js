import React from 'react'
import {useSelector} from 'react-redux';
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/mealList'


const CategorieMeal = props => {

    const catID = props.navigation.getParam('categoryID')

    const availableMeals = useSelector(state => state.meals.filteredMeals
    )

    console.log(availableMeals)


    const displayMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catID) >= 0)


    return (
        <MealList data={displayMeals} navigation={props.navigation} />
    )
}

CategorieMeal.navigationOptions = (navigationData) => {
    const catID = navigationData.navigation.getParam('categoryID')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID)

    return {
        headerTitle: selectedCategory.title,

    }

}

export default CategorieMeal