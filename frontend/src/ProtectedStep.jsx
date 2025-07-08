import React from 'react'
import { Navigate } from 'react-router-dom';
import { useStep } from './StepProvider'


const ProtectedStep = ({ requiredStep, children }) => {

    const { step } = useStep()

    if (step < requiredStep) {
        return <Navigate to={`/cart`} replace />;
    }

    return children

}

export default ProtectedStep