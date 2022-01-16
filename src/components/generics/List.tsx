import React from 'react'

/* Modo normal */

/* type ListProps = {
    items: string[],
    clickFun: (value:string)=> void
}

const List = ({items, clickFun}: ListProps) => {
    return (
        <div>
            <h2>List of items</h2>
            {
                items.map((item,index) => {
                    return(
                        <div key={index} onClick={()=> clickFun(item)}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
} */

/* Modo 2, <T extends {}> de esta manera la lista acepta strings, numbers y objects */

type ListProps <T> = {
    items: T[],
    clickFun: (value:T)=> void
}

const List = <T extends string>({items, clickFun}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {
                items.map((item,index) => {
                    return(
                        <div key={index} onClick={()=> clickFun(item)}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List
