import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeadButtons from '../components/headerButton'
import Colors from "../constants/colors";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/actions/meals';





const Filter = props => {
    const { navigation } = props


    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const FilterSwitch = props => {
        return (
            <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch
                    trackColor={{ true: Colors.primaryColor }}
                    thumbColor={Colors.primaryColor}
                    value={props.state}
                    onValueChange={props.onChange}
                />
            </View>
        )
    }

    const dispatch = useDispatch()

    const saveFilter = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        dispatch(setFilter(appliedFilters))
        console.log(appliedFilters)
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    useEffect(() => {
        navigation.setParams({
            save: saveFilter
        })
    }, [saveFilter])


    return (
        <View>
            <Text style={styles.title}>
                Available filters / Restriction
            </Text>
            <FilterSwitch
                label='Gluten-free'
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />

            <FilterSwitch
                label='Lactose-free'
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />

            <FilterSwitch
                label='Vegan'
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />

            <FilterSwitch
                label='Vegetarian'
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />


        </View>
    )
}

Filter.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (<HeaderButtons HeaderButtonComponent={HeadButtons}>
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>),
        headerRight: (<HeaderButtons HeaderButtonComponent={HeadButtons}>
            <Item
                title='Save '
                iconName='ios-save'
                onPress={navData.navigation.getParam('save')}
            />
        </HeaderButtons>)
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10,
        paddingLeft: 50
    }
})

export default Filter