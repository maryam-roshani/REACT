import React, { createContext } from "react";
import tasks from '../assets/tasksData'


export const TaskContext = createContext(null);


  const TaskContextProvider = (props) => {

    const timeDistance = () => {
      for( const task in tasks ){
        const beginDate =  task.time_added ;
        const currentDate = new Date();

        const mi1 = currentDate.getMinutes();
        const h1 = currentDate.getHours();
        const d1 = currentDate.getDate();
        const m1 = currentDate.getMonth() + 1;
        const y1 = currentDate.getFullYear();

        const mi2 = beginDate.getMinutes();
        const h2 = beginDate.getHours();
        const d2 = beginDate.getDate();
        const m2 = beginDate.getMonth() + 1;
        const y2 = beginDate.getFullYear();

        let y3, m3, d3

        if (y2 < y1) {
            if (m1 >= m2) {
                m3 = m1 - m2;
                y3 = y1 - y2
            } else {
                y3--
                m3 = m1 - m2 + 12
            }
            if (d1 >= d2) {
                d3 = d1 - d2
            } else {
                m3--
                d3 = getDaysInMonth(y1, m1) + d1 - d2
            }
            if (m3 === -1) {
                m3 = 11
                y3--
            }
            return `${y3} years and ${m3} months and ${d3} days`
        } else {
          final.innerText = `the year of your input ${y2} is in future, you have come from future??!!`
        }

      function getDaysInMonth(year, month) {
          return new Date(year, month, 0).getDate();
      }
      }
    }
      
      const contextValue = { tasks };
      return (
        <TaskContext.Provider value={contextValue}>
          {props.children}
        </TaskContext.Provider>
      )
  }

export default TaskContextProvider;
