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
    border: none;
`


const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: white;
    margin: 0 1em 0 1em;
`

const EndX = styled.span`
    // align-self: self-end;
    margin-left: auto;
`
interface DisplayModeProps {
    darkMode: boolean,
  }

interface Props {
    task: ITask,
    completeTask (finishedTask: string): void,
    darkMode: boolean
}

// color: ${(props) => {
//     console.log(props.darkMode)
//   }} 

const Todo = ({ task, completeTask, darkMode }: Props) => {
  return (
    <TaskContainer darkMode={darkMode}>
        <DisplayTask darkMode={darkMode}>
        <Circle onClick={() => { completeTask(task.taskName)}}/>
        <span style={{paddingRight: '2em'}}>{task.taskName}</span>
        <span>{task.status}</span>
        <EndX>X</EndX>
        </DisplayTask>
    </TaskContainer>
  )
}

export default Todo