import React, { useState } from 'react'
import { fetchTodo } from '../redux/actions/todoActions'
import { connect } from 'react-redux'

const Todos = ({todos,fetchTodo}) => {
    const [title, setTitle]= useState('')
   
  return (
    <div>
        <button onClick={fetchTodo}>Click to Get Todos</button>
        <div>
            <input type="text" value={title} 
            onChange={(e)=> setTitle(e.target.value)}/>
            <button>add Todo</button>
        </div>
        <section>
            {
                todos.isLoading? <h3>Loading...</h3>: 
                todos.errorMsg? <h3> Error - {todos.errorMsg}</h3> : 
                todos.todo.map((list,index)=>{
                    return(
                        <p key={index}>{list.title}</p>
                    )
                })
            }
        </section>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return {
        todos: state.todo
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchTodo: ()=>dispatch(fetchTodo())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos)