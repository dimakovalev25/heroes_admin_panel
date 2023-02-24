import {useHttp} from '../../hooks/http.hook';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {heroesFetching, heroesFetched, heroesFetchingError} from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE


const heroes = [
    {
        "id": 1,
        "name": "Iron Man",
        "description": "from Marvel!",
        "element": "all"
    },
    {
        "id": 2,
        "name": "Aqua Men",
        "description": "from DC!",
        "element": "water"
    },
    {
        "id": 3,
        "name": "Super girls",
        "description": "from DC",
        "element": "all"
    },
    {
        "id": 4,
        "name": "Groot",
        "description": "raketa's friend",
        "element": "earth"
    }
]
const filters = [
    "all",
    "fire",
    "water",
    "wind",
    "earth"
]


const HeroesList = () => {
    const {heroes, heroesLoadingStatus} = useSelector(state => state);
    console.log(heroes)
    const dispatch = useDispatch();
    const {request} = useHttp();


    const [heroesData, setHeroesData] = useState()
    // console.log(heroesData)

    //push on firebase!
    // useEffect(() => {
    //     fetch('https://react-homework-d18ef-default-rtdb.europe-west1.firebasedatabase.app/data.json', {
    //         method: 'POST',
    //         body: JSON.stringify(heroes),
    //         headers: {'Content-Type': 'application/json'}
    //     })
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err))
    //
    // }, [])

    //and get data from firebase

    useEffect(() => {
        const fetchHero = async () => {
            const response = await fetch('https://react-homework-d18ef-default-rtdb.europe-west1.firebasedatabase.app/heroes.json')
            const responseData = await response.json();
            const loadedHeroes = [];
            for (const key in responseData) {
                loadedHeroes.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    element: responseData[key].element,
                })
            }
            setHeroesData(loadedHeroes)
        }
        fetchHero()
    }, [])

    //---------------------------------------------------------------------------
    // get data from heroes.json
    // useEffect(() => {
    //     dispatch(heroesFetching());
    //     request("http://localhost:3001/heroes")
    //         .then(data => dispatch(heroesFetched(data)))
    //         .catch(() => dispatch(heroesFetchingError()))
    //
    //     // eslint-disable-next-line
    // }, []);

    useEffect(() => {
        dispatch(heroesFetching());
        request("https://react-homework-d18ef-default-rtdb.europe-west1.firebasedatabase.app/heroes.json")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))

        // eslint-disable-next-line
    }, []);


    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">error</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">not find</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem key={id} {...props}/>
        })
    }

    const elements = renderHeroesList(heroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;
