import React, {useState} from 'react'
import AddCategory from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['one punch']);
    return (
        <>
          <h2>Gif Expert App</h2>
          <AddCategory setCategories={ setCategories }/>
          <hr />
          <ol>
              {
                  categories.map( category => (
                    <GifGrid 
                       key= { category}
                       category= { category}
                    />
                  ))
              }
          </ol>
        </>
    )
}

export default GifExpertApp
