import React, { createContext, useState } from "react";


export const ReactContext = createContext(null);

const ReactContextProvider = (props) => {

    const [isOpen, setIsOpen] = useState(false)


const contextValue = {isOpen, setIsOpen};
      return (
        <ReactContext.Provider value={contextValue}>
          {props.children}
        </ReactContext.Provider>
      )
  }

export default ReactContextProvider;