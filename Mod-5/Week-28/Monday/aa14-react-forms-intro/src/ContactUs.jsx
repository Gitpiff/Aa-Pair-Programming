import { useState } from "react";

function ContactUs() {
    //State
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ phoneType, setPhoneType ] = useState("");
    const [ comments, setComments ] = useState("");

    //Submit
    const onSubmit = (e) => {
        // Prevent the default form behavior so the page doesn't reload.
        e.preventDefault();

        //Create a new object for the contact information.
        const contactUsInformation = {
            name,
            email,
            phone,
            phoneType,
            comments,
            submittedOn: new Date()
        };

        console.log(contactUsInformation);
    
         //Reset the form state once the new object has been created
         setName('');
         setEmail('');
         setPhone('');
         setPhoneType('');
         setComments('');

    };
    

    return (
        <>
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="name" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input 
                        type="text" 
                        id="phone" 
                        placeholder="phone" 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <select 
                        name="phoneType" 
                        onChange={e => setPhoneType(e.target.value)}
                        value={phoneType}
                    >
                        <option value="" disabled>
                            Select a phone type...
                        </option>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comments">Comments:</label>
                    <textarea 
                        name="comments" 
                        id="comments" 
                        onChange={e => setComments(e.target.value)}
                        value={comments}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}

export default ContactUs;