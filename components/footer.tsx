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
    setTodoList(): void
}

const Footer: FC = ({ taskCount, deleteCompleted, todoList, setTodoList }: Props) => {
const ItemPluralization = (taskCount === 1) ? "Items" : "Item"
  return (
    <div>
    <FooterContainer>
    <FooterItem>{taskCount} {ItemPluralization} Left</FooterItem>
    <FooterItem>All</FooterItem>
    <FooterItem>Active</FooterItem>
    <FooterItem>Completed</FooterItem>
    {/* <button onClick={() =>{
        console.log('hello')
        deleteCompleted
    }}>Clear Completed</button> */}
    <button onClick={() => {
        setTodoList(todoList.filter((task) => {
            return task.status === 'active'
          }))
    }}>
    Clear Completed
    </button>

    {/* <button onClick={() => { deleteCompleted }}>Clear Completed</button> */}
    </FooterContainer>
    </div>
  )
}

export default Footer