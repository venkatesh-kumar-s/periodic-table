import React,{ useState, useEffect } from 'react'
import axios from 'axios'

function Element() {
    const [element, setElement] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://neelpatel05.pythonanywhere.com/')
        .then(res=>setElement(res.data))
    }, []);

    const filteredResult = element.filter(res=>
       ( res.name.toString().toLowerCase().indexOf(search)!==-1||
        res.symbol.toString().toLowerCase().indexOf(search)!==-1)
        )

    console.log(element)

    return (
        <div className='container'>
            
            <input 
            className='form-control shadow mx-auto my-5' 
            type="search" 
            placeholder='Search Elements here with name or symbol... Ex. Ir or Iridium' 
            onInput={(e)=>setSearch(e.target.value.toLowerCase())}
            />
         
           <div>
                <div className='row container m-auto d-flex justify-content-center'>
                    {filteredResult.map((item)=>
                        <div key={item.atomicNumber} className='card p-2 m-1 shadow-sm' style={{borderRadius:10,width:'7em',backgroundColor:`#${item.cpkHexColor}`}}>
                            <p className='text-right h5'>{item.atomicNumber}</p>
                            <h1>{item.symbol}</h1>
                            <p className='text-center m-0'>{item.name}</p>
                            <small className='text-center'>{item.atomicMass}</small>
                        </div>
                    )}
                </div>
           </div>

        </div>
    )
}

export default Element;
