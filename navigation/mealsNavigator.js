import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Categories from '../screens/categorie'
import CategorieMeal from '../screens/categorieMeal'
import Favorite from '../screens/favorites'
import Filter from '../screens/filter'
import MealDetail from '../screens/mealDetail'
import Colors from "../constants/colors";


const MealNavigator = createStackNavigator({
    Categories: Categories,
    CategorieMeal: CategorieMeal,

    Filter: Filter,
    MealDetail: MealDetail
},
    {

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    }
)

const favNavigator = createStackNavigator({
    Favorites: Favorite,
    MealDetail: MealDetail
},
    {

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white' 
        }
    }
)

const MealsFavNavigatror = createMaterialBottomTabNavigator({
    Meals: {
        screen: MealNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: favNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    }
}, {
    activeColor: 'white',
    shifting: true
})

const FilterScreen = createStackNavigator({
    Filters: Filter,
},
    {

        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    })

const mainNavigator = createDrawerNavigator({
    MealsFav: {
        screen:MealsFavNavigatror,
        navigationOptions:{
            drawerLabel:'Meals'
        }
    },
    Filters: FilterScreen
},{
    contentOptions:{
        activeTintColor:Colors.accentColor,
        labelStyle:{
            fontSize:18
        }
    }
}
)

export default createAppContainer(mainNavigator)