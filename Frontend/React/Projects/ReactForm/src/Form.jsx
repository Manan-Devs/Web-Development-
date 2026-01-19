import {useForm} from "react-hook-form";
import "./Form.css";
// import { zodResolver } from '@hookform/resolvers/zod';
// import {email,z} from zod;

// const formSchema = z.object({
//     userName:z.string().min(3, "minimum length should be 3").max(20, "maximum length should be 20"),
    
// });


 function Form () {
    
  const { register,handleSubmit, formState: {errors, }} = useForm();
   
     function submitForm(data) {
           console.log(data);
           
     }

  return ( 

      <> 
         <form onSubmit={handleSubmit(submitForm)}>
            <div className="item">
              <label htmlFor="first">Username: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 

           <div className="item" >
              <label htmlFor="first">Email: </label>
              <input id="first" {...register ('email', 
                
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 

           <div className="item">
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 

           <div className="item">
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 

           <div className="item">
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 
           <div className="item">
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 
           <div className="item">
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 
           <div className="item">
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 
           <div className="item">
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 
           <div className="item">
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 
           <div className="item">
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 
           <div className="item">
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 
         </form>
             <div className="submit">
             <button>Submit</button>
           </div>
         
       </>
  )
   
}





export default Form ; 

