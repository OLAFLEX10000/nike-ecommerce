import React from 'react'
import { useLocation } from 'react-router-dom'
import { products } from '../data/product'
import { p } from 'motion/react-client'

const SearchResults = () => {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get('q') || ''

    const filtered = products.filter(item=>
        item.name.toLowerCase().includes(query.toLowerCase())
    )

  return (
    <div className='max-w-6xl mx-auto mt-10 px-4'>
      <h2 className='text-2xl font-semibold mb-4'>
         Search Result for: <span>{query}</span>
      </h2>

      {filtered.length > 0 ? 
      <div>
        {filtered.map(item => (
            <div key={item.id}>
               <img src={item.image} alt={item.name} />
               <h3>{item.name}</h3>
               <p>${item.price}</p>
            </div>
        ))}
      </div>
      : (
        <p>Sorry No Products Found !.</p>
      )}
    </div>
  )
}

export default SearchResults
