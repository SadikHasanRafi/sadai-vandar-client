import { useContext, useState } from "react";
import emailjs from '@emailjs/browser';
import { AuthContext } from "../../Context/AuthProvider";



const ContactUs = () => {

    // const [contactUs, setContactUs] = useState()
    const { user } = useContext(AuthContext)

    const [message,setMessage] = useState("")
    const handleMessageChange = (e) =>{
        setMessage(e.target.value)
    }

    const [phoneNumber, setPhoneNumber] = useState("")
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleSubmitButtonCLick =async () => {
        let templateParams = {
            message: message,
            phoneNumber: phoneNumber,
            emailSenderName:"user.displayName",
            emailSenderEmail:"user.email"
        };
        
        await emailjs.send('service_trinu0e', 'template_7usye2t', templateParams,"5BO_HLz973nk7zuz6")
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact us</h1>
      <p className="py-6 lg:w-[70%]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>

    
    <div className="card flex-shrink-0 w-full max-w-md shadow-lg bg-base-100">
      <div className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your email</span>
          </label>
          <input type="text"
            value={user?.email || "Email"}
            disabled
          placeholder="Type here" className="input input-bordered input-primary w-full max-w-xl" />        
          </div>

          <div className="form-control">
          <label className="label">
            <span className="label-text">Your name</span>
          </label>
          <input type="text" value={user?.displayName || "Anonymous"} disabled placeholder="Type here" className="input input-bordered input-primary w-full max-w-xl" />        
          </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          placeholder="Type here" className="input input-bordered input-primary w-full max-w-xl" />        
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter your message</span>
          </label>
          <textarea
                value={message}
                onChange={handleMessageChange}
          className="textarea textarea-primary" placeholder="Enter your message"></textarea>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleSubmitButtonCLick} className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactUs;