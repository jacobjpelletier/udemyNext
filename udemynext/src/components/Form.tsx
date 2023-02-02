import { SchemaMetaFieldDef } from 'graphql'
import { FC, useState, ChangeEventHandler, FormEventHandler } from 'react'
import Button from './Button'

interface Props {

}

const Form: FC<Props> = (): JSX.Element => {
    
    //const [value, setValue] = useState<string>() // also undefined
    const [value, setValue] = useState("") // gives default value of empty string
    const [file, setFile] = useState<File>()

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log(value)
    }

    return (
        
        <form onSubmit={handleSubmit} className='form'>
            <input 
                type="file" 
                onChange={({target}) => {
                    const {files} = target;
                    if (files) {
                        const file = files[0];
                        setFile(file);
                    }
                } 
            }/>
            <input type="text" value={value} onChange={handleOnChange}/>
            <Button value='Submit'/>
        </form>
    )
}

export default Form

