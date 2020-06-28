import React from 'react'

const Button = ({ outerClassname,type,classnames,onClick,buttonName }) => {

    return(
        <div className={outerClassname}>
            <button
                type={type}
                className={classnames}
                onClick={onClick}
            >{buttonName}</button> 
        </div>
    )
}

export default Button