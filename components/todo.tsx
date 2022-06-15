import React from 'react'
import styled from 'styled-components'
import { ITask }   from '../Interfaces'

const TaskContainer = styled.div<DisplayModeProps>`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DisplayTask = styled.div<DisplayModeProps>`
    display: flex;
    flex-direction: row;
    height: 4em;
    width: 100%;
    align-items: center;
    font-family: ${props => props.theme.primaryTheme.fonts.base};
    font-size: ${props => props.theme.primaryTheme.fonts.size};
    background-color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryLightGray : props.theme.primaryTheme.darkMode.VeryDarkDesatBlue};
    color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryDarkGrayishBlue : props.theme.primaryTheme.darkMode.LightGrayishBlue};
    text-decoration: ${props => props.completed ? "line-through" : ""};
    border: none;
`


const Circle = styled.div<DisplayModeProps>`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin: 0 1em 0 1em;
    background-color: ${props => props.completed ? "blue" : "red"};
`

const EndX = styled.button`
    // align-self: self-end;
    margin-left: auto;
`
interface DisplayModeProps {
    darkMode: boolean,
    completed?: boolean
  }

interface Props {
    task: ITask,
    completeTask (finishedTask: string): void,
    darkMode: boolean,
    todoList: [],
    setTodoList(): void,
}



// color: ${(props) => {
//     console.log(props.darkMode)
//   }} 

const Todo = ({ task, completeTask, darkMode, todoList, setTodoList }: Props) => {

    let completed
    if (task.status === 'completed') {
        completed = true
    } else {
        completed = false
    }

    const deleteSingleTask = (task: any) => {
        const id = task.id
        console.log(id)
        setTodoList(
            todoList.filter((task: any) => {
                return task.id != id
            })
    
        )
    }

  return (
    <TaskContainer darkMode={darkMode}>
        <DisplayTask completed={completed} darkMode={darkMode}>
        <Circle completed={completed} darkMode={darkMode} onClick={() => { completeTask(task.taskName)}}/>
        <span style={{paddingRight: '2em'}}>{task.taskName}</span>
        <span>{task.status}</span>
        <EndX onClick={() => deleteSingleTask(task)}>X</EndX>
        </DisplayTask>
    </TaskContainer>
  )
}

export default Todo