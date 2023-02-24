const HeroesListItem = ({name, description, element}) => {

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

    return (
        <>
            <li
                className={`card flex-row mb-2 shadow-lg text-white ${elementClassName}`}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                {/*<p className="card-text">{description}</p>*/}

                </div>
                    <button type="button" className={'btn btn-primary'} aria-label="Close"> DELETE!</button>
            </li>

        </>

    )
}

export default HeroesListItem;
