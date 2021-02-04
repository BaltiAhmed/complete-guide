import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import HeadButtons from '../components/headerButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


const MealDetail = props => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
        <View>
            <Text>
                {selectedMeal.title}
            </Text>
            <Button title='Go back' onPress={() => {
                props.navigation.popToTop()
            }} />
        </View>
    )
}

MealDetail.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeadButtons}>
            <Item
                title='Favorite'
                iconName='ios-star'
                onPress={() => {
                    console.log('add to favorite!!')
                 }}
            />
        </HeaderButtons>
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetail