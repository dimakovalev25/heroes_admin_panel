

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
    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">name new hero?</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="name?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">description</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="description?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">choose ....</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element">
                    <option >i use element.</option>
                    <option value="fire">fire</option>
                    <option value="water">water</option>
                    <option value="wind">water</option>
                    <option value="earth">earth</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">create</button>
        </form>
    )
}

export default HeroesAddForm;
