import React, { useEffect, useState } from "react"
import '../components/recipe.css'



export default function Component(){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('http://belajaroracle.com/api/hrapi/employees/read.php')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    if(!data){
        return <p>Loading</p>
    }

    return(
        <ul className="ul">
            {data.map(item =>(
                <li className="li" key={item.EMPLOYEE_ID}>{item.FIRST_NAME}</li>
            ))}
        </ul>
    )
}