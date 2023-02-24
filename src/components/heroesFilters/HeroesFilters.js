import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {changeActiveFilter, filtersFetched, heroesFilter, heroesFilterAll} from "../../actions";

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {

    const state = useSelector(state => state)
    // console.log(state)
    const filtres = useSelector(state => state.filters)
    const dispatch = useDispatch()
    const [filter, setFilter] = useState()

    useEffect(() => {
        const fetchFilters = async () => {

            const response = await fetch('https://react-homework-d18ef-default-rtdb.europe-west1.firebasedatabase.app/filters.json')

            const responseData = await response.json();
            // console.log(responseData)

            const loadedFilters = [];
            for (const key in responseData) {
                loadedFilters.push({
                    element : key,
                    class: responseData[key]
                })
            }
            dispatch(filtersFetched(loadedFilters))
        }
        fetchFilters();
    }, [])


    const filterHeroes = (data) => {
        dispatch(changeActiveFilter(data))
        // const filter = data
        setFilter(data)
        // dispatch(heroesFilter(data))

        if (data === 'all' ) {
        dispatch(heroesFilterAll())
            // console.log('heroesFilterAll')
        } else {
        dispatch(heroesFilter(data))
        }
    };

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Filter</p>
                <div className="btn-group">

                    {filtres.map(item => <button
                        onClick={() => filterHeroes(item.element)}
                        className={`btn ${item.class} active`}>
                        {item.element}</button> )}

                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;
