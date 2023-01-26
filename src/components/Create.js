import { useNavigate } from "react-router-dom"
import {createTodo} from '../services/-api'

function Create() {
    const nav = useNavigate()

    const createTheTodo = (e) => {
        const todo = {description: e.target.description.value, complete: false}
        createTodo(todo)
        nav('/')
    }

return(
    <div>
        <h4>Search City</h4>
        <form onSubmit={createLocation}>
            <input type='text' name='description' id='dsc'/>
            <input type='submit'/>
        </form>
    </div>
)
}
<div className='search'>
    <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
</div>
export default Create