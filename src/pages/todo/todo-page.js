import { useEffect } from 'react'
import { ToDoComponent } from '../../components/modal/todo-component'
import { client } from '../../service/client'

export const ToDo = () => {
  useEffect(() => {
    client.get('/movie').then(response => {
      console.log(response)
    })
  })
  return (
    <>
      <ToDoComponent name= 'TODO' description = 'TODO description' />
    </>
  )
}
