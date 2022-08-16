import React from 'react'
import sport from '../mock/sports.json'
import MainMapping from './mainMapping'

console.log("sport:", sport)

const Mapping = () => {
  return (
    <div>
        {sport.data.trendingCollections.edges.map((value,key)=>(
            <MainMapping value= {value} key={key}/>

        ))}

    </div>
  )
}

export default Mapping