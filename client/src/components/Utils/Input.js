import React from 'react'

const Input = ({ classnames, type, outerClassname, onChange, label}) => {
    return (
        <div className={outerClassname}>
            <input 
                type={type}
                className={classnames}
                onChange={onChange}
            />
            <label>{ label }</label>
        </div>
    )
}

export default Input