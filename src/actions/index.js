export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFilter = (element) => {
    return {
        type: 'HEROES_FILTER',
        payload: element
    }
}

export const heroesFilterAll = () => {
    return {
        type: 'HEROES_FILTER_ALL'

    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}
export const changeActiveFilter = (filter) => {
    return {
        type: 'CHANGE_ACTIVE_FILTER',
        payload: filter
    }
}
export const addHero = (data) => {
    return {
        type: 'ADD_HERO',
        payload: data

    }
}

export const deleteHero = (id) => {
    return {
        type: 'DELETE_HERO',
        payload: id

    }
}
