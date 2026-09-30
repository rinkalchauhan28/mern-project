import { useState } from 'react'
import axios from "axios"

const App = () => {
    const [search, setSearch] = useState("")
    const [product, setProduct] = useState([])

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get(
                `http://localhost:5000/api/v1/product/search?search=${search}`
            )
            console.log(res.data)
            setProduct(res.data.pro)
        } catch (error) {
            console.log(error)
            alert("Product not found")
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search product"/>
                 <button type="submit">Search</button>
            </form>
            {
                product.map((item) => (
                    <div key={item.id}>
                        <h3>Title: {item.title}</h3>
                        <p>Description: {item.description}</p>
                        <p>Price: {item.price}</p>
                    </div>
                ))
            }   
        </div>
    )
}

export default App
