import React, { useContext, useEffect } from 'react'
import Context from '../../../context/Context'
import Packages from './Packages'
import Register from './register/Index'

const Index = () => {

    const context = useContext(Context)
    useEffect(() => {
        context.setDefault()        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {context.state.packageId === ""
                ? <Packages />
                : <Register />
            }
        </div>
    )
}

export default Index