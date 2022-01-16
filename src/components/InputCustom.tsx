import React from 'react'

type InputCustomProps = {
    value:string,
    handlechange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

const InputCustom = ({value,handlechange}: InputCustomProps) => {
    return (
        <input type="text" value={value} onChange={handlechange} />
    )
}

export default InputCustom
