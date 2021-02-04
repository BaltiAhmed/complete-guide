import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Categories from '../screens/categorie'
import CategorieMeal from '../screens/categorieMeal'
import Favorite from '../screens/favorites'
import Filter from '../screens/filter'
import MealDetail from '../screens/mealDetail'
import Colors from "../constants/colors";


const MealNavigator = createStackNavigator({
    Categories: Categories,
    CategorieMeal: CategorieMeal,
    Favorite: Favorite,
    Filter: Filter,
    MealDetail: MealDetail
},
{
    
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    }
}
)

export default createAppContainer(MealNavigator)