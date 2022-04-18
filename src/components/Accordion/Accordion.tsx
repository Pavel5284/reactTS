import React from "react";


type  ItemType={
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * Elements that are showed when is opened. Each item should be ItemType
     */
    items: ItemType[]
    /**
     * Callback that is called when any item clicked
     * @param value is value of clicked item
     */
    onClick:(value: any)=>void
    /**
     * optional color of header text
     */
    color?: string
}

export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
                            color={props.color}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items} />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange:()=>void
    color?: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3
        style={{color:props.color ? props.color : 'black'}}
        onClick={(e) => {props.onChange();}}>
        {props.title}
    </h3>
}

export type AccordionBodyPropsType ={
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map((i, index) => <li
            onClick={() => {props.onClick(i.value)}}
            key={index}
        >{i.title}</li>)}
    </ul>
}

function doSomething<T>(target: T, text: string): number {
    return 3;
}
