import React, { createContext, useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";

export const TasksGlobal = createContext();

const TasksGlobalProvider = ({ children }) => {
  const [listCards, setListCards] = useState([]);
  const [listTasks, setLisTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSetListCards = useCallback((value) => {
    setListCards((oldValue) => [...oldValue, value]);
  }, []);
  const handleSetListTasks = useCallback((value) => {
    setLisTasks((oldValue) => [...oldValue, value]);
  }, []);
  const onSubmitCard = (values, actions) => {
    handleSetListCards(values.name);
  };
  const onSubmitTask = (values, actions) => {
    handleSetListTasks(values);
  };
  const handleSetIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <TasksGlobal.Provider
      value={{
        listCards,
        listTasks,
        isOpen,
        onSubmitCard,
        onSubmitTask,
        handleSetIsOpen,
      }}
    >
      {children}
    </TasksGlobal.Provider>
  );
};

TasksGlobalProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.any]).isRequired,
};

const useTasksGlobalContext = () => {
  const context = useContext(TasksGlobal);

  if (!context) {
    throw new Error(
      "useTasksGlobalContext must be used within an TasksGlobalProvider"
    );
  }

  return context;
};

export { useTasksGlobalContext, TasksGlobalProvider };
