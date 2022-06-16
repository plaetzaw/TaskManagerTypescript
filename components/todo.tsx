import { url } from 'inspector'
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
    border-bottom: 1px solid ${props => props.darkMode ? props.theme.primaryTheme.lightMode.LightGrayishBlue : props.theme.primaryTheme.darkMode.VeryVeryDarkGrayishBlue};
`


const Circle = styled.div<DisplayModeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin: 0 1em 0 1em;
    background-color: ${props => props.completed ? props.theme.primaryTheme.colorsPrimary.blue : ""};
    background-image: url${props => props.completed ? '(/icon-check.svg)' : null};
    // background-repeat: no-repeat;
`

const XIcon = styled.svg<DisplayModeProps>`
    background-image: url(/icon-cross.svg);
    background-repeat: no-repeat;
    margin-left: auto;
    width: 40px;
    height: 20px;
`
interface DisplayModeProps {
    darkMode: boolean,
    completed?: boolean
  }

interface Props {
    task: ITask,
    completeTask (finishedTask: string): void,
    darkMode: boolean,
    todoList: ITask[],
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
        <XIcon darkMode={darkMode} onClick={() => deleteSingleTask(task)}/>
        </DisplayTask>
    </TaskContainer>
  )
}

export default Todo