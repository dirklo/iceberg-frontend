import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import btnStyles from '../button/button.module.css'
export default function ConnectForm() {

    const users = useSelector(state => state.appReducer.users)
    const allHobbies = Array.from(new Set(users.map(user => user.hobbies.map(h => h.name)).flat()))
    const allFoods = Array.from(new Set(users.map(user => user.foods.map(f => f.name)).flat()))
    const [category, setCategory] = useState("")
    const [categoryItems, setCategoryItems] = useState([])
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setCategory(e.target.value)
        e.target.value === "Hobbies" ? setCategoryItems(allHobbies) : setCategoryItems(allFoods)
    }

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {category: category, search: search}
        dispatch({type: "SEARCH_FOR_CONNECT", payload: payload})
    }

    return (
        <form id='connect-form' onSubmit={handleSubmit}>
            <label><strong>Category</strong></label>
            <select id='category-dropdown' defaultValue={category} onChange={handleChange}>
                <option value="" disabled >Choose</option>
                <option value='Hobbies'>Hobbies</option>
                <option value='Foods'>Foods</option>
            </select>
            <br/>
            <label><strong>Search</strong></label>
            <select id='search-dropdown' defaultValue={search} onChange={(e) => setSearch(e.target.value)}>
                <option value="" disabled >Choose</option>
                {categoryItems.map((item, index)=> <option key={index} value={item}>{item}</option>)}
            </select>
            <br/>
            <input className={`${btnStyles.Btn} ${btnStyles["Primary"]}`} type="submit" value="Search"/>
        </form>
    )
}