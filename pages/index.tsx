import type { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { ITask } from '../Interfaces'

import Todo from '../components/todo'
import Footer from '../components/footer'



const Container = styled.div<DisplayModeProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  font-family: ${props => props.theme.primaryTheme.fonts.base};
  font-size: ${props => props.theme.primaryTheme.fonts.size};
  padding: ${props => props.theme.primaryTheme.padding};
  margin: ${props => props.theme.primaryTheme.margin};
  background-color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryLightGrayishBlue : props.theme.primaryTheme.darkMode.VeryDarkBlue};
`

const Background = styled.div<DisplayModeProps>`
  width: 100%;
  height: 200px;
  background-image: url${props => !props.darkMode ? '(/bg-mobile-light.jpg)' : '(/bg-mobile-dark.jpg)'};
  object-fit: cover;
  // background-repeat: no-repeat;
  @media (min-width: 1200px) {
    background-image: url${props => !props.darkMode ? '(/bg-desktop-light.jpg)' : '(/bg-desktop-dark.jpg)'};
  } 
`

const Test = styled.div<DisplayModeProps>`
  width: 100%;
  `

const Img = styled.img`
  max-with: 100%;
  max-height: 100%;
  object-fit: cover;
`

const TaskContainer = styled.div<DisplayModeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 4em;
  border-radius: 8px;
  margin: 0 0 2em 0;
  background-color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryLightGray : props.theme.primaryTheme.darkMode.VeryDarkDesatBlue};
`

const EnterTask = styled.input<DisplayModeProps>`
  height: 100%;
  width: 100%;
  font-family: ${props => props.theme.primaryTheme.fonts.base};
  font-size: ${props => props.theme.primaryTheme.fonts.size};
  background-color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryLightGray : props.theme.primaryTheme.darkMode.VeryDarkDesatBlue};
  color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryDarkGrayishBlue : props.theme.primaryTheme.darkMode.LightGrayishBlue};
  border: none;
`

const Circle = styled.div<DisplayModeProps>`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryLightGray : props.theme.primaryTheme.darkMode.VeryDarkDesatBlue};
    background-color: ${props => props.theme.primaryTheme.colorsPrimary.CheckBackground};
    border: 1px solid ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryLightGrayishBlue : props.theme.primaryTheme.darkMode.VeryDarkBlue};
    margin: 0 1em 0 1em;
    &:hover {
      border: 10px solid ${props => props.theme.primaryTheme.colorsPrimary.CheckBackground};
    }
`

// color: ${(props) => {
//   console.log(props.darkmode)
// }} 

interface DisplayModeProps {
  darkMode?: boolean,
}

interface Toggle {
  toggle: React.MouseEventHandler<HTMLButtonElement>
}

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<ITask[]>([])
  const [filter, setFilter] = useState<string>('All')

  const onEnter = (e): void => {
    if (e.key === "Enter") {
      const newTask = {
        id: Math.floor(Math.random() * 1000000),
        taskName: task,
        status: 'active',
      }
      setTodoList([...todoList, newTask])
      setTask("")
      console.log('tasks', todoList)
    }
  }

  const completeTask = (finishedTask: string): void => {
    todoList.map((task) => {
      if (task.taskName === finishedTask) {
        task.status = 'completed'
        console.log('check status', task.status)
      }
    })
  }

  const deleteCompleted = () => {
    console.log('Delete triggered')
    setTodoList(todoList.filter((task) => {
      return task.status === 'active'
    }))
  }

  const toggleMode: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault()
    setDarkMode(!darkMode)
    console.log('darkmode?', darkMode)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value)
  }

  const TaskCount = todoList.length

  const filteredList = todoList.filter((todo) => {
    switch (filter) {
      case "All":
        return true
      case "Active":
        return todo.status === 'active'
      case "Completed":
        return todo.status === 'completed'
      default:
        return true
    }
  })

  // console.log(filteredList)



  const TodoDisplay = filteredList.map((task: ITask, key: number) => {
    return (
      <Todo key={key} task={task} completeTask={completeTask} darkMode={darkMode} todoList={todoList} setTodoList={setTodoList}/>
    )
  })



  return (
    <div>
      <Head>
        <title>Task Manager</title>
      </Head>
      <Container darkMode={darkMode}>
        <button toggle={darkMode} onClick={toggleMode}>Toggle</button>
          <Background darkMode={darkMode}>
            HelloWhiril
          </Background>
          <Test>
            <img src="/bg-desktop-light.jpg"/>
          </Test>
            {/* <Image src="/bg-mobile-light.jpg" 
            height={200} 
            width={'100%'}
            // layout="fill"
            /> */}
            <TaskContainer darkMode={darkMode}>
              <Circle darkMode={darkMode}/>
              <EnterTask  darkMode={darkMode} name='Task' placeholder='Create a new todo...' onChange={handleChange} onKeyDown={onEnter} value={task}/>
            </TaskContainer>
        {TodoDisplay}
        <Footer darkMode={darkMode} filter={filter} taskCount={TaskCount} deletedCompleted={deleteCompleted} todoList={todoList} setTodoList={setTodoList} filter={filter} setFilter={setFilter}/>
      </Container>
    </div>
  )
}

export default Home
