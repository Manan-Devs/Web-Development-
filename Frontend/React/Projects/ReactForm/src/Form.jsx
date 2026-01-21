import {useForm} from "react-hook-form";
import "./Form.css";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'

const formSchema = z.object({
    name:z.string().min(3, "minimum length should be 3").max(20, "maximum length should be 20"),
    email:z.email("Email is invalid"),
    age:z.coerce.number().min(5,"Minimum age should be 10").max(100,"Maximum age should be 100"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword:z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
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
        <form action={"/submit-your-form-endpoint"}>
         <div className="item">
            <label htmlFor="first">Name: </label>
            <input id="first" {...register('name')} />
            {errors.name && <span className="error">{errors.name.message}</span>}
         </div>
          <div className="item">
            <label htmlFor="fourth">Email: </label>
            <input id="fourth" {...register('email')} />
            {errors.email && <span className="error">{errors.email.message}</span>}
         </div>
          <div className="item">
            <label htmlFor="second">Age: </label>
            <input id="second" {...register('age')} />
            {errors.age && <span className="error">{errors.age.message}</span>}
         </div>
         <div className="item">
            <label htmlFor="third">Password: </label>
            <input type="password" id="third" {...register('password')} />
            {errors.password && <span className="error">{errors.password.message}</span>}
         </div>
         <div className="item">
            <label htmlFor="fifth">Confirm Password: </label>
            <input type="password" id="fifth" {...register('confirmPassword')} />
           {errors.confirmPassword &&<span className="error">{errors.confirmPassword.message}</span>}
         </div>
         </form>
         <div className="submit">
             <button onClick={handleSubmit(submitForm)}>Submit</button>
          </div>
        </>
  )
}

export default Form ;