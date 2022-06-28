import React, { FC } from "react";
import styled from "styled-components";
import { ITask } from "../Interfaces";

const FooterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterItem = styled.li<DisplayModeProps>`
  display: flex;
  padding: 1em;
  // border-radius: 8px;
  // background-color: ${(props) =>
    props.darkMode
      ? props.theme.primaryTheme.lightMode.VeryLightGray
      : props.theme.primaryTheme.darkMode.VeryDarkDesatBlue};
  color: ${(props) =>
    props.darkMode
      ? props.theme.primaryTheme.lightMode.DarkGrayishBlue
      : props.theme.primaryTheme.darkMode.VeryDarkGrayishBlue};
  color: ${(props) =>
    props.selected ? props.theme.primaryTheme.colorsPrimary.blue : null};
  &:hover {
    cursor: hand;
    color: ${(props) =>
      props.darkMode
        ? props.theme.primaryTheme.lightMode.VeryDarkGrayishBlue
        : props.theme.primaryTheme.darkMode.LightGrayishBlue};
  }
  &:active {
    color: ${(props) => props.theme.primaryTheme.colorsPrimary.blue};
  }
`;

const SelectorDisplay = styled.ul<DisplayModeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 4em;
  width: 100%;
  margin-bottom: 1.5em;
  border-radius: 8px;
  font-family: ${(props) => props.theme.primaryTheme.fonts.base};
  font-size: ${(props) => props.theme.primaryTheme.fonts.size};
  background-color: ${(props) =>
    props.darkMode
      ? props.theme.primaryTheme.lightMode.VeryLightGray
      : props.theme.primaryTheme.darkMode.VeryDarkDesatBlue};
  color: ${(props) =>
    props.darkMode
      ? props.theme.primaryTheme.lightMode.VeryDarkGrayishBlue
      : props.theme.primaryTheme.darkMode.LightGrayishBlue};
  border: none;
  border-bottom: 1px solid
    ${(props) =>
      props.darkMode
        ? props.theme.primaryTheme.lightMode.LightGrayishBlue
        : props.theme.primaryTheme.darkMode.VeryVeryDarkGrayishBlue};
  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

const SelectorItem = styled.span``;

const MobileWrapper = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const DesktopWrapper = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
`;

interface DisplayModeProps {
  darkMode: boolean;
  selected?: boolean;
}

interface Props {
  taskCount: number;
  deleteCompleted(): void;
  todoList: ITask[];
  setTodoList(arg0: any): void;
  filter: string;
  setFilter(arg0: string): void;
  darkMode: boolean;
}

const Footer = ({
  taskCount,
  deleteCompleted,
  todoList,
  setTodoList,
  filter,
  setFilter,
  darkMode,
}: Props) => {
  const ItemPluralization = taskCount > 1 || taskCount === 0 ? "Items" : "Item";

  const FooterData = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Active",
    },
    {
      id: 3,
      name: "Completed",
    },
  ];

  const ClearCompleted = FooterData.map((item, index) => {
    let selected;
    if (filter === item.name) {
      selected = true;
    } else {
      selected = false;
    }

    return (
      <FooterItem
        key={index}
        selected={selected}
        darkMode={darkMode}
        onClick={() => {
          setFilter(`${item.name}`);
        }}
      >
        {item.name}
      </FooterItem>
    );
  });

  return (
    <FooterContainer>
      {/* <FooterItem darkMode={darkMode} onClick={() => {setFilter("All")}}>All</FooterItem>
    <FooterItem darkMode={darkMode} onClick={() => { setFilter("Active")}}>Active</FooterItem>
    <FooterItem darkMode={darkMode} onClick={() => { setFilter("Completed")}}>Completed</FooterItem> */}
      <MobileWrapper>
        <SelectorDisplay
          style={{ justifyContent: "space-between", padding: "1.5em" }}
          darkMode={darkMode}
        >
          <SelectorItem>
            {taskCount} {ItemPluralization} Left
          </SelectorItem>
          <SelectorItem
            onClick={() => {
              setTodoList(
                todoList.filter((task) => {
                  return task.status === "active";
                })
              );
            }}
          >
            Clear Completed
          </SelectorItem>
        </SelectorDisplay>
      </MobileWrapper>
      <SelectorDisplay style={{ padding: "1.5em" }} darkMode={darkMode}>
        <DesktopWrapper>
          <SelectorItem>
            {taskCount} {ItemPluralization} Left
          </SelectorItem>
        </DesktopWrapper>
        <div style={{ display: "flex", alignItems: "center" }}>
          {ClearCompleted}
        </div>
        <DesktopWrapper>
          <SelectorItem
            onClick={() => {
              setTodoList(
                todoList.filter((task) => {
                  return task.status === "active";
                })
              );
            }}
          >
            Clear Completed
          </SelectorItem>
        </DesktopWrapper>
      </SelectorDisplay>
    </FooterContainer>
  );
};

export default Footer;
