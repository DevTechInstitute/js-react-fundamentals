import React from 'react'

export const Pokemon = ({pokemon}) => {
    const { name, image } = pokemon;
    return (
        <div className='card'>
            
                <img src={image}  alt={`Pokemon ${name}`}/>
            
            <div>
                {name} 
            </div>
        </div>
    )
}
