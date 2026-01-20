import {useForm} from "react-hook-form";
import "./Form.css";
import { zodResolver } from '@hookform/resolvers/zod';
import {email, z} from 'zod'

const formSchema = z.object({
    name:z.string().min(3, "minimum length should be 3").max(20, "maximum length should be 20"),
    
});


 function Form () {
    
  const {register, handleSubmit, formState: { errors }} = useForm({
          resolver: zodResolver(formSchema)
      });
   
     function submitForm(data){
       console.log(data);
    }

      console.log("Render");
      

  return(
        <>
        <form onSubmit={handleSubmit(submitForm)}>
         <div className="item">
            <label htmlFor="first">Name: </label>
            <input id="first" {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
         </div>
          <div className="item">
            <label htmlFor="fourth">Email: </label>
            <input id="fourth" {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
         </div>
          <div>
            <label htmlFor="second">Age: </label>
            <input id="second" {...register('age')} />
            {errors.age && <span>{errors.age.message}</span>}
         </div>
         <div className="item">
            <label htmlFor="third">Password: </label>
            <input type="password" id="third" {...register('password'
            )} />
            {errors.password && <span>{errors.password.message}</span>}
         </div>
         <div className="item">
            <label htmlFor="fifth">Confirm Password: </label>
            <input type="password" id="fifth" {...register('confirm'
            )} />
            {errors.confirm && <span>{errors.confirm.message}</span>}
         </div>
          <div className="submit">
             <button>Submit</button>
          </div>
         </form>
          
         
        </>
  )
   
}





export default Form ; 

