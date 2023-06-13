import React from 'react'

export const FooterPage = ({ componente }) => {
    return (
        <div className='footer-component' >{ componente && <>{componente}</> }</div>
    )
}
