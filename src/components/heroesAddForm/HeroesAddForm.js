import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import './heroesAddForm.css'
import {addHero} from "../../actions";


// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const filters = useSelector(state => state.filters)
    const [newHero, setNewHero] = useState(null)
    console.log(newHero)
    // console.log(filters)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addHero(newHero))
    }, [newHero])

    useEffect(() => {
        const fetchNewHero = async () => {

            const response = await fetch('https://react-homework-d18ef-default-rtdb.europe-west1.firebasedatabase.app/heroes.json', {
                method: 'POST',
                body: JSON.stringify(newHero),
                headers: {'Content-Type': 'application/json'}
            });

            const responseData = await response.json();
            // console.log(responseData)

        }
        fetchNewHero()

    }, [newHero])

    const createHero = (e) => {
        e.preventDefault()
        console.log('createHero')
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            element: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'min 2 symbols')
                .max(15, 'max 15 symbols')
                .required('required field'),
            description: Yup.string()
                .min(2, 'min 2 symbols')
                .max(70, 'max 70 symbols')
                .required('required field'),
            element: Yup.string().required('choose element')
        }),
        // onSubmit: values => console.log(JSON.stringify(values, null, 2)),
        onSubmit: values => setNewHero(values),
    })

    return (
        <form onSubmit={formik.handleSubmit} className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">name new hero?</label>
                <input 
                    type="text"
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                />
                {formik.errors.name && formik.touched.name ? <div className={'error'}>{formik.errors.name}</div> : null}
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">description</label>
                <textarea
                    name="description"
                    className="form-control" 
                    id="text" 
                    placeholder="description"
                    style={{"height": '130px'}}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                />

                {formik.errors.description && formik.touched.description ? <div className={'error'}>{formik.errors.description}</div> : null}
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">choose ....</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={formik.values.element}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}


                >

                    <option >i use element.</option>

                    {filters.map(item => <option value={`${item.element}`}>{item.element}</option>)}

                </select>
                {formik.errors.element && formik.touched.element ? <div className={'error'}>{formik.errors.element}</div> : null}
            </div>

            <button type="submit" className="btn btn-primary">create</button>
        </form>
    )
}

export default HeroesAddForm;
