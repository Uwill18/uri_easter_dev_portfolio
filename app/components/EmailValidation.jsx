import * as Yup from 'yup';

const emailValidation = Yup.object({
  from_name: Yup.string().min(3, "name must at least be three characters").required("Please Enter name"),
  your_email: Yup.string().email("Please enter valid email").required("Please enter email"),
  message: Yup.string().min(50, "Please enter a message of 50 characters or more").max(400, "Please enter a message of 400 characters or less").required("Message is a required field"),
});

export default emailValidation;