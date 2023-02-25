import {useEffect, useState, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteHero} from "../../actions";
import {useHttp} from "../../hooks/http.hook";

const HeroesListItem = (props) => {

    const dispatch = useDispatch()

    const {request} = useHttp();

    const [deletetedId, setDeletedId] = useState(null)
    // console.log(typeof deletetedId)

    const {id, name, description, element} = props;
    let elementClassName;

    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient';
            break;
        case 'water':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'wind':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }

    const delHero = async () => {

        setDeletedId(id)
        dispatch(deleteHero(id))

        // setDeletedId(id)
        // console.log(id)
        // const response = await fetch(`https://react-homework-d18ef-default-rtdb.europe-west1.firebasedatabase.app/heroes.json/${id}`, {
        //     method: "DELETE",
        // });
        // const responseData = await response.json();

    }

    // const delHero = ((id) => {
    //     setDeletedId(id)
    //     // Удаление персонажа по его id
    //     request(`https://react-homework-d18ef-default-rtdb.europe-west1.firebasedatabase.app/heroes.json/${id}`, "DELETE")
    //         .then(data => console.log(data, 'Deleted'))
    //         .then(dispatch(deleteHero(id)))
    //         .catch(err => console.log(err));
    //     // eslint-disable-next-line
    // });


    return (
        <>
            <li key={id}
                className={`card flex-row mb-2 shadow-lg text-white ${elementClassName}`}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>

                </div>
                <button onClick={delHero} type="button" className={'btn btn-primary'}
                        aria-label="Close"> DELETE!
                </button>
            </li>

        </>

    )
}

export default HeroesListItem;
