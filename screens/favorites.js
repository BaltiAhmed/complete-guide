import React from 'react'
import MealList from '../components/mealList'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeadButtons from '../components/headerButton'
import {useSelector} from 'react-redux';


const Favorite = props => {

    const favMeals = useSelector(state => 
        state.meals.favoriteMeals
    )

    

    return (
        <MealList data={favMeals} navigation={props.navigation}/>
    )
}

Favorite.navigationOptions = (navData) => {
    return {
        headerTitle: 'Favorites',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeadButtons}>
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>
    }
}


export default Favorite