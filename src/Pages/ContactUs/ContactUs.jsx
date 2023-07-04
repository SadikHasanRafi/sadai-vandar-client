import { useState } from "react";
import emailjs from '@emailjs/browser';



const ContactUs = () => {

    // const [contactUs, setContactUs] = useState()

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
        console.log(templateParams)
         
        await emailjs.send('service_trinu0e', 'template_7usye2t', templateParams,"5BO_HLz973nk7zuz6")
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact us</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>

    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your email</span>
          </label>
          <input type="text"
            value="{user.email}"
            disabled
          placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />        
          </div>

          <div className="form-control">
          <label className="label">
            <span className="label-text">Your name</span>
          </label>
          <input type="text" value="user.displayName" disabled placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />        
          </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />        
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