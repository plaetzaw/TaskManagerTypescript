import React, { FC } from 'react'
import styled from 'styled-components'

const FooterContainer = styled.ul`
    display: flex;
    flex-direction: row;
`
const FooterItem = styled.li<DisplayModeProps>`
    display: flex;
    padding: 1em;
    color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.DarkGrayishBlue : props.theme.primaryTheme.darkMode.VeryDarkGrayishBlue};
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
  }

interface Props {
    taskCount: number,
    deleteCompleted(): void,
    todoList: [],
    setTodoList( arg0: any ): void,
    filter: string,
    setFilter( arg0: string ): void, 
    darkMode: boolean
}


const Footer: FC = ({ taskCount, deleteCompleted, todoList, setTodoList, filter, setFilter, darkMode }: Props) => {
const ItemPluralization = (taskCount > 1 || taskCount === 0) ? "Items" : "Item"

// console.log(darkMode)

if (filter === 'All') {

}

  return (
    <div>
    <FooterContainer>
    <FooterItem darkMode={darkMode}>{taskCount} {ItemPluralization} Left</FooterItem>
    <FooterItem darkMode={darkMode} onClick={() => {setFilter("All")}}>All</FooterItem>
    <FooterItem darkMode={darkMode} onClick={() => { setFilter("Active")}}>Active</FooterItem>
    <FooterItem darkMode={darkMode} onClick={() => { setFilter("Completed")}}>Completed</FooterItem>
    <FooterItem darkMode={darkMode} onClick={() => {
        setTodoList(todoList.filter((task) => {
            return task.status === 'active'
          }))
    }}>
    Clear Completed
    </FooterItem>

    {/* <button onClick={() => { deleteCompleted }}>Clear Completed</button> */}
    </FooterContainer>
    </div>
  )
}

export default Footer