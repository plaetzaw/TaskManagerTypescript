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
  padding: ${props => props.theme.primaryTheme.padding};
  margin: ${props => props.theme.primaryTheme.margin};
  background-color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryLightGray : props.theme.primaryTheme.darkMode.VeryDarkBlue};
  color: ${props => props.theme.primaryTheme.lightMode.LightGrayishBlue}
`

const Background = styled.div<DisplayModeProps>`
  width: 100%;
  height: 200px;
  background-image: url${props => !props.darkMode ? '(/bg-mobile-light.jpg)' : '(/bg-mobile-dark.jpg)'};
  background-repeat: no-repeat;
  object-fit: cover;
  @media (min-width: 1200px) {
    background-image: url${props => !props.darkMode ? '(/bg-desktop-light.jpg)' : '(/bg-desktop-dark.jpg)'};
  } 
`

interface DisplayModeProps {
  darkMode: boolean,
}

interface Toggle {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<ITask[]>([])
  const [filter, setFilter] = useState<string>('All')
  // const [displayTodos, setDisplayTodos] = useState<ITask[]>([])

  // useEffect(() => {
  // }, [todoList])
  


  const onEnter = (e): void => {
    if (e.key === "Enter") {
      const newTask = {
        taskName: task,
        status: 'active'
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

  // const changeDisplayedTodos = (todoList: [], status: string) => {
  //   switch (case)
  // }

  const TaskCount = todoList.length
  // console.log(todoList.length)
  // console.log(TaskCount)

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

  console.log(filteredList)



  const TodoDisplay = filteredList.map((task: ITask, key: number) => {
    return (
      <Todo key={key} task={task} completeTask={completeTask}/>
    )
  })


  // color: ${(props) => {
  //   console.log(props.theme.primaryTheme.darkMode)
  // }}
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
          <input name='Task' placeholder='Create a new todo...' onChange={handleChange} onKeyDown={onEnter} value={task}/>
        {/* Todo + Mode Changer */}
        {TodoDisplay}
        <Footer taskCount={TaskCount} deletedCompleted={deleteCompleted} todoList={todoList} setTodoList={setTodoList} filter={filter} setFilter={setFilter}/>
      </Container>
    </div>
  )
}

export default Home
