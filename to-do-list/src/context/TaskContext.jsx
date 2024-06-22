import React, { createContext } from "react";
import tasks from '../assets/tasksData'


export const TaskContext = createContext(null);


  const TaskContextProvider = (props) => {

    const timeDistance = (beginDate) => {
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

        let y3, m3, d3, h3, mi3
        let s1 = '' , s2 = '', s3 = '', s4 = '', s5 = ' '
        console.log(s1 + 'h1llooo' + s2)
        const string = ' '
        console.log(`${y1} , ${m1}, ${d1}, ${h1}, ${mi1}`)
        console.log(`${y2} , ${m2}, ${d2}, ${h2}, ${mi2}`)

        if (y2 <= y1) {
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
            if (h1 >= h2) {
              h3 = h1 - h2
            } else {
              d3--
              h3 = h1 - h2 + 24
            }
            if (mi1 >= mi2) {
              mi3 = mi1 - mi2 
            } else {
              h3--
              mi3 = mi1 - mi2 + 60
            }
            if (y3 !== 0){
              s1 = `${y3} years and `
            }
            if (m3 !== 0){
              s2 = `${m3} months and `
            }
            if (d3 !== 0){
              s3 = `${d3} days and `
            }
            if (h3 !== 0){
              s4 = `${h3} hours and `
            }
            if (mi3 !== 0){
              s5 = `${mi3} minutes`
            }
            console.log(`helloooo!   ${y3} , ${m3}, ${d3}, ${h3}, ${mi3}`)
            
            return s1 + s2 + s3 + s4 + s5 +` ago`
        } else {
          final.innerText = `the year of your input ${y2} is in future, you have come from future??!!`
        }

      function getDaysInMonth(year, month) {
          return new Date(year, month, 0).getDate();
      }
    }
      
      const contextValue = { tasks, timeDistance };
      return (
        <TaskContext.Provider value={contextValue}>
          {props.children}
        </TaskContext.Provider>
      )
  }

export default TaskContextProvider;
