import React, { FC } from 'react'
import styled from 'styled-components'

const FooterContainer = styled.ul`
    display: flex;
    flex-direction: row;
`
const FooterItem = styled.li`
    display: flex;
    padding: 1em;
`

interface Props {
    taskCount: number,
    deleteCompleted(): void,
    todoList: [],
    setTodoList(): void,
    filter: string,
    setFilter(): void
}

const Footer: FC = ({ taskCount, deleteCompleted, todoList, setTodoList, filter, setFilter }: Props) => {
const ItemPluralization = (taskCount === 1) ? "Items" : "Item"
  return (
    <div>
    <FooterContainer>
    <FooterItem>{taskCount} {ItemPluralization} Left</FooterItem>
    <FooterItem onClick={() => { setFilter("All")}}>All</FooterItem>
    <FooterItem onClick={() => { setFilter("Active")}}>Active</FooterItem>
    <FooterItem onClick={() => { setFilter("Completed")}}>Completed</FooterItem>
    <FooterItem onClick={() => {
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