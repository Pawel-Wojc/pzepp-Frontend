import React from 'react'
import { Navigate } from 'react-router-dom'
export default function NotFoundComponent() {




  return (<>
    {(sessionStorage.getItem('user'))?<div>NotFoundComponent</div>:<Navigate to="/login" ></Navigate>}
    
  </>

  )
}
