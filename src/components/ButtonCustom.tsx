import React from 'react'

type ButtonCusProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void
}

const ButtonCustom = (props: ButtonCusProps) => {
    return (
        <button onClick={(event)=>props.handleClick(event, 1)}>click me!!</button>
    )
}

export default ButtonCustom
