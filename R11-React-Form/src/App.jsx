
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register, //with the help of register we can link input to form
    handleSubmit, //with the help of handleSubmit we can handle onSubmit
    // watch, //no use
    formState: { errors, isSubmitting } //error help to show and find invalid input and isSubmitting helps to detect the submitting 
  } = useForm(); // with the help of useForm we can link input with form

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000)); //for 5s delay
    console.log("Submitting the form", data);
  }
  return (
    <div id="container">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div >
          <div className='form-item'>
            <label className='label'>First Name: </label>
            <input
              className={errors.firstName ? 'input-error' : "input"}
              {...register('firstName', {
                required: true,
                minLength: { value: 3, message: 'Min length atLeast 3' },
                maxLength: { value: 10, message: 'Max length atMost 10' }
              })} />
          </div>
          {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
        </div>

        <div>
          <div className='form-item'>
            <label className='label'>Middle Name: </label>
            <input placeholder="(Optional)" className={errors.middleName ? 'input-error' : "input"} {...register('middleName')} />
          </div>
        </div>

        <div>
          <div className='form-item'>
            <label className='label'>Last Name: </label>
            <input className={errors.lastName ? 'input-error' : "input"} {...register('lastName',
              {
                pattern: { //within this value we can input the text
                  value: /^[A-Za-z]+$/i,
                  message: "Last name is not as per the rule"
                }
              }
            )} />
          </div>
          {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}

        </div>

        <input type="Submit" disabled={isSubmitting} defaultValue={isSubmitting? "submitting":"Submit"} id={isSubmitting?"disabled-btn":"button"}/>
  

      </form>
    </div>
  )
}

export default App
