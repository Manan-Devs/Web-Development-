import {useForm} from "react-hook-form";

function Form () {
     const {register,handleSubmit} = useForm();

     function submitForm(data) {
           console.log(data);
     }

     console.log("render");
     

     return (
    <>
         <form onSubmit={handleSubmit(submitForm)}>
           <div>
              <label htmlFor="first">Name: </label>
              <input id="first" {...register ('name')} />
           </div>
           <div>
              <label htmlFor="second">Name: </label>
              <input id="second" {...register ('age')} />
           </div>
           <div>
              <label htmlFor="third">Name: </label>
              <input id="third" {...register ('password')} />
           </div>
        </form>
    </>
     )
}


export default Form;