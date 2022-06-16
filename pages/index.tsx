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
  width: 100%;
  min-height: 100vh;
  align-items: center;
  font-family: ${props => props.theme.primaryTheme.fonts.base};
  font-size: ${props => props.theme.primaryTheme.fonts.size};
  padding: ${props => props.theme.primaryTheme.padding};
  margin: ${props => props.theme.primaryTheme.margin};
  background-color: ${props => props.darkMode ? props.theme.primaryTheme.lightMode.VeryLightGrayishBlue : props.theme.primaryTheme.darkMode.VeryDarkBlue};
  border: 1px solid white;
  `

const Background = styled.div<DisplayModeProps>`
  width: 100%;
  height: 275px;
  z-index: 2;
  background-image: url${props => !props.darkMode ? '(/bg-mobile-light.jpg)' : '(/bg-mobile-dark.jpg)'};
  background-size: cover;
  @media (min-width: 1200px) {
    background-image: url${props => !props.darkMode ? '(/bg-desktop-light.jpg)' : '(/bg-desktop-dark.jpg)'};
  } 
`

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 95%;
  border: 1px solid red;
  z-index: 1;
  @media (min-width: 1200px) {
    max-width: 50%;
  }
`

const TitleContainer = styled.div<DisplayModeProps>`
  width: 90%;
  height: 8em;
  align-items: center;
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.primaryTheme.lightMode.VeryLightGray};
`

const Title = styled.span`
  font-family: ${props => props.theme.primaryTheme.fonts.base};
  font-size: 24px;
  letter-spacing: 0.6rem;
  font-weight: 700;
`

const ModeIcon = styled.svg<DisplayModeProps>`
  background-image: url${props => props.darkMode ? '(/icon-sun.svg)' : '(/icon-moon.svg)'};
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  margin-left: auto;
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
  font-weight: 400;
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
  const [override, setOverride] = useState<boolean>(false)
  
  useEffect(() => {
  }, [todoList])
  
  const onEnter = (e): void => {
    if (e.key === "Enter") {
      const newTask = {
        id: Math.floor(Math.random() * 1000000),
        taskName: task,
        status: 'active',
      }
      setTodoList([...todoList, newTask])
      setTask("")
    }
  }

  // const completeTask = (finishedTask: string): void => {
    // console.log(test)
    // setTodoList(
    // test.map((e) => {
    //   console.log(e.task === finishedTask)
    //   console.log(e.task === finishedTask ? {...e, qty: e.qty + 15 } : {...e, qty: e.qty * 15})
    //   console.log(e.task === finishedTask ? {...e, status: "completed" } : {...e, status: "active"})
    // })
    // )
    // console.log(test)
      // const finishTask = todoList.map((task) => {
      //   console.log('Do they match', task.taskName === finishedTask)
      //   task.taskName === finishedTask ? { ...task, status: "completed", name: "house"} : {...task, status: "doesthisshitevenwork"}
      // })
      // console.log(finishTask)
      // setTodoList(todoList)
  // }


  const completeTask = (finishedTask: string): void => {
    todoList.map((task) => {
      if (task.taskName === finishedTask) {
        task.status = 'completed'
      }
      setOverride(!override)
    })
  }


  const deleteCompleted = () => {
    setTodoList(todoList.filter((task) => {
      return task.status === 'active'
    }))
  }

  const toggleMode: React.MouseEventHandler<HTMLOrSVGElement> = (e): void => {
    e.preventDefault()
    setDarkMode(!darkMode)
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
          <Background darkMode={darkMode}>
          <TodoContainer>
            <TitleContainer>
              <Title>TODO</Title>
              <ModeIcon darkMode={darkMode} onClick={toggleMode}/>
            </TitleContainer>
            <TaskContainer darkMode={darkMode}>
              <Circle darkMode={darkMode}/>
              <EnterTask  darkMode={darkMode} name='Task' placeholder='Create a new todo...' onChange={handleChange} onKeyDown={onEnter} value={task}/>
            </TaskContainer>
        {TodoDisplay}
        <Footer darkMode={darkMode} filter={filter} taskCount={TaskCount} deletedCompleted={deleteCompleted} todoList={todoList} setTodoList={setTodoList} filter={filter} setFilter={setFilter}/>
        </TodoContainer>
        hi             
        </Background>
   
      </Container>
    </div>
  )
}

export default Home
