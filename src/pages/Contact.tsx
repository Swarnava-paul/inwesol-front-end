import { Grid , Text } from "@chakra-ui/react";
import { useState } from "react";


const Contact:React.FC = () => {
     

    type ErrorState = {
      Name : string,
      Email : string,
      Query : string,
      Language : string,
      Question : string,
      Subject : string
    }
    const [error,setError] = useState<ErrorState>({
      Name : '',
      Email :'',
      Query : '',
      Language : '',
      Question : '',
      Subject : ''
    });
    const [flag,setFlag] = useState<boolean>(true)


  
    function validateForm(e:React.FormEvent<HTMLFormElement>) {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      let obj = {...error};

      for (const key in data) {
        if (data[key] == '') {
            obj = {...obj,[key]:`Empty ${key} field not allowed`}
            setFlag(true)
        }else {
          obj = {...obj,[key]:''};
          setFlag(false)
        }
      };
      setError(obj);
    };
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
    }


  return (
    <Grid bg='rgb(32, 32, 32)' p={3}  color='white'
    justifyContent='center'>
        <form action="" style={{display:"grid",rowGap:"20px",fontFamily:'sans-serif'}}
        onChange={(e)=>{
          validateForm(e);
        }}
        onSubmit={(e)=>{
         handleSubmit(e);
        }}>
        <Text textAlign='center' fontSize='2xl' fontFamily='sans-serif'>Contact Us</Text>
        <Text>Fill this form we will contact you to solve you specific query</Text>

        <label htmlFor="language">Select Your Language</label>
         <select style={{color:"black"}} name="Language">
          <option value="">Select your language</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Japanese">Japanese</option>
         </select>
         <p className="Error-text-form">{error.Language}</p>

        <label htmlFor="question">What is your question</label>
        <input type="text" id='Question' name='Question'
         placeholder="Put your question here" className="form-input"/>
         <p className="Error-text-form">{error.Question}</p>

        <label htmlFor="Subject">Subject</label>
        <input className="form-input" type="text" name='Subject' placeholder="Subject of your question"/>
         <p className="Error-text-form">{error.Subject}</p>

        <label htmlFor="Query">What is your Query ?</label>
        <textarea name="Query" id="Query" className="form-input"
         placeholder="Enter your query here..."></textarea>
         <p className="Error-text-form">{error.Query}</p>

        <label htmlFor="Name">Full Name</label>
        <input className="form-input" type="text" name="Name" placeholder="Enter your full name"/>
        <p className="Error-text-form">{error.Name}</p>

        <label htmlFor="Email">Your Email</label>
        <input className="form-input" type="email"  name="Email" placeholder="Enter your email"/>
        <p className="Error-text-form">{error.Email}</p>

        <input className="form-input" type="submit" 
        style={{backgroundColor: flag == true ? 'rgb(102, 103, 103)' :
        'rgb(91, 15, 15)'
          ,marginTop:"10px",color:'white',borderRadius:'3px',
        cursor:flag == true ? 'not-allowed' : 'pointer'}}
           disabled={flag == true ? true : false} />
        </form>
    </Grid>
  )
}

export default Contact;
