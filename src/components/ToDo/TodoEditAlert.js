import Swal from "sweetalert2"
import { EditTodo } from "../../redux/state/todo/todoSlice"
import store from "../../redux/store/store"

export function TodoEditAlert(i, item){
    Swal.fire({
        title: 'Update task Name',
        input: 'text',
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditTodo({index:i, task:value}))
            }
        }
       
      })
}