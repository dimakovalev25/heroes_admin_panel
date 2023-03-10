const initialState = {
    heroes: [],
    filterHero: [],
    filters: [],
    heroesLoadingStatus: 'idle',
    activeFilter: 'all'
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }

        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }

        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                filterHero: action.payload,
                heroesLoadingStatus: 'idle'
            }

        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload
            }

        case 'HEROES_FILTER':
            return {
                ...state,
                // heroes: state.heroes.filter(hero => hero.element === action.payload),
                filterHero: state.heroes.filter(hero => hero.element === action.payload)
            }

        case 'CHANGE_ACTIVE_FILTER':
            return {
                ...state,
                activeFilter: action.payload
            }

        case 'HEROES_FILTER_ALL':
            return {
                ...state,
                filterHero: state.heroes
            }

        case 'ADD_HERO':
            return {
                ...state,
                filterHero: [action.payload, ...state.heroes],
                heroes: [action.payload, ...state.heroes]
            }

        case 'DELETE_HERO':
            return {
                ...state,
                filterHero: state.heroes.filter(hero => hero.id !== action.payload),
                heroes: state.heroes.filter(hero => hero.id !== action.payload)
            }

        default:
            return state
    }
}
export default reducer;
