import React from 'react'
import styled from 'styled-components'
import { ITask }   from '../Interfaces'

const TaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: teal;
    margin: 0 2em 0 0;
`

interface Props {
    task: ITask,
    completeTask (finishedTask: string): void
}

const Todo = ({ task, completeTask }: Props) => {
  return (
    <TaskContainer>
        <Circle onClick={() => { completeTask(task.taskName)}}/>
        {task.taskName}
        <br/>
        {task.status}
    </TaskContainer>
  )
}

export default Todo