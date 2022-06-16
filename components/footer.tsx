import React, { FC } from 'react'
import styled from 'styled-components'
import { ITask } from '../Interfaces'

const FooterContainer = styled.ul`
    display: flex;
    flex-direction: row;
`
const FooterItem = styled.li<DisplayModeProps>`
    display: flex;
    padding: 1em;
    color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.DarkGrayishBlue : props.theme.primaryTheme.darkMode.VeryDarkGrayishBlue};
    color: ${props => props.selected ? props.theme.primaryTheme.colorsPrimary.blue : null};
    &:hover {
        cursor: hand;
        color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryDarkGrayishBlue : props.theme.primaryTheme.darkMode.LightGrayishBlue};
    }
    &:active {
        color: ${props => props.theme.primaryTheme.colorsPrimary.blue};
    }
`

interface DisplayModeProps {
    darkMode: boolean,
    selected: boolean
  }

interface Props {
    taskCount: number,
    deleteCompleted(): void,
    todoList: ITask[],
    setTodoList( arg0: any ): void,
    filter: string,
    setFilter( arg0: string ): void, 
    darkMode: boolean,
}


const Footer: FC = ({ taskCount, deleteCompleted, todoList, setTodoList, filter, setFilter, darkMode }: Props) => {
const ItemPluralization = (taskCount > 1 || taskCount === 0) ? "Items" : "Item"

// console.log(darkMode)

    const FooterData = [{
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "Active"
    },
    {
        id: 3,
        name: "Completed"
    }
]

  return (
    <div>
    <FooterContainer>
    <FooterItem darkMode={darkMode}>{taskCount} {ItemPluralization} Left</FooterItem>
    {FooterData.map((item, index) => {
        let selected
        if (filter === item.name){
            selected = true
        } else {
            selected = false
        }

        return (
            <FooterItem key={index} selected={selected} onClick={() => { setFilter(`${item.name}`)}}>
                {item.name}
            </FooterItem>
        )
    })}
    {/* <FooterItem darkMode={darkMode} onClick={() => {setFilter("All")}}>All</FooterItem>
    <FooterItem darkMode={darkMode} onClick={() => { setFilter("Active")}}>Active</FooterItem>
    <FooterItem darkMode={darkMode} onClick={() => { setFilter("Completed")}}>Completed</FooterItem> */}
    <FooterItem darkMode={darkMode} onClick={() => {
        setTodoList(todoList.filter((task) => {
            return task.status === 'active'
          }))
    }}>
    Clear Completed
    </FooterItem>
    </FooterContainer>
    </div>
  )
}

export default Footer