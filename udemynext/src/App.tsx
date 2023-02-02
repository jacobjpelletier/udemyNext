import { FC } from 'react'
import Calculator from './components/Calculator';
import './index.css'



const App: FC = (): JSX.Element => {
    return (
        <div>
            <Calculator />
        </div>
    )
}

export default App;