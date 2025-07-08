import { createContext , useContext , useState } from "react";

const StepContext = createContext()

export const StepPorvider = ({children}) =>{
  const [step, setStep] = useState(1);

  return(
    <StepContext.Provider value={{step , setStep}} >
      {children}
    </StepContext.Provider>
  )
}

export const useStep = ()=>useContext(StepContext);