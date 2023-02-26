
import { Route, Routes } from 'react-router-dom'
import Homecomponent from './home.component'

const Homedirectory = () => {

  return (
    <Routes>
        <Route path='/' element={<Homecomponent />} />
    </Routes>
  )
}

export default Homedirectory
