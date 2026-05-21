import React from 'react'

const Greeting = ({isLoggedIn, name}) => {
  return (
    <>
        {isLoggedIn ? (
            <h1>Welcome back, {name}</h1>
            ) : (<h1>Please login to continue</h1>)}
    </>
  )
}

export default Greeting