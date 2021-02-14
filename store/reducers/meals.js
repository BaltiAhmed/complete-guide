import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTER } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducers = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if (existingIndex >= 0) {
                const upadatedFavMeals = [...state.favoriteMeals]
                upadatedFavMeals.splice(existingIndex, 1)
                return { ...state, favoriteMeals: upadatedFavMeals }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
            }
        case SET_FILTER:
            const appliedFilter = action.filters
            const updatedFiltredMeals =  state.meals.filter(meal => {
                if(appliedFilter.glutenFree && !meal.isGlutenFree){
                    return false
                }
                if(appliedFilter.lactoseFree && !meal.lactoseFree){
                    return false
                }
                if(appliedFilter.vegan && !meal.isVegan){
                    return false
                }
                if(appliedFilter.vegetarian && !meal.isVegetarian){
                    return false
                }
                return true
            })
            return {...state, filteredMeals: updatedFiltredMeals}
        default:
            return state
    }
}

export default mealsReducers