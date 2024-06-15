import React, { createContext } from "react";
import tasks from '../assets/tasksData'


export const TaskContext = createContext(null);


  const TaskContextProvider = (props) => {

      const contextValue = { tasks };
      return (
        <TaskContext.Provider value={contextValue}>
          {props.children}
        </TaskContext.Provider>
      )
  }

export default TaskContextProvider;
