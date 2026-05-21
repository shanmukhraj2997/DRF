import { useState, useRef } from 'react'

const InputBox = () => {
  const [name, setName] = useState("")
  const [previousName, setPreviousName] = useState("")
  const refElement = useRef(null)
  const previousNameRef = useRef("")

  const clearText = () => {
    setName("")
    if (refElement.current) refElement.current.focus()
  }

  const handleInput= (e) => {
    previousNameRef.current = name
    setPreviousName(previousNameRef.current)
    setName(e.target.value)
  }
  return (
    <>
        <h2>Inputing values</h2>
        <input ref={refElement} type='text' value={name} 
        onChange={handleInput}/>
        <button onClick={clearText}>Clear</button>
        <br/>
        <p>Previous Name: {previousName}</p>
        <p>Current Name: {name}</p>
    </>
  )
}

export default InputBox