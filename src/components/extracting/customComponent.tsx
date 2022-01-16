import React from 'react'
import Greet from '../Greet'

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>
           { props.isLoggedIn ? (
                <h2>Welcome {props.name}! You have {props.messageCount} unread messages</h2>
            ):(
                <h2>Welcome Guest</h2>
            )}
        </div>
    )
}

export default CustomComponent
