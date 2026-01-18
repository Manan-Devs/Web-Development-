import {useForm} from "react-hook-form";

 export function Form () {
     const {register,handleSubmit , formState: {errors}} = useForm();

     function submitForm(data) {
           console.log(data);
     }

     console.log("render");
     

     return (
    <>
         <form onSubmit={handleSubmit(submitForm)}>
           <div>
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name', 
                 {required:"Name can't be empty"}
              )} />
                {errors.name && <span>{errors.name.message}</span>}
           </div> 
           <div>
              <label htmlFor="second">Age: </label>
              <input id="second" {...register ('age' ,
              {       
                  minLength:{
                      value:10,
                      message:"Minimum Age should be 10"
                  }
                  ,
                  maxLength  : {
                     value:80,
                     message:"Maximum Age should be 80"
                  }

         }

              )} />
             {errors.age && <span>{errors.age.message}</span>}
           </div>
           <div>
              <label htmlFor="third">Password: </label>
              <input type="password" id="third" {...register ('password',
                  {
                     minLength : {
                          value:5,
                          message:"Minimum Length of password should be 5"
                     }

                     ,
                     maxLength: {
                          value:10,
                          message:"Maximum length of password should be 10"
                     }
                  }
              )} />
              {errors.password && <span>{errors.age.message}</span>}
           </div>
            <button>Submit</button>
        </form>
    </>
     )
}
