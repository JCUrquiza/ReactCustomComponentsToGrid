import React from 'react'

export const CenterPage = ({ componente }) => {
    return (
        <div className='center-component' >{ componente && <>{componente}</> }</div>
    )
}
