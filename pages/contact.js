import { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {
    const [toSend, setToSend] = useState({
      from_name: '',
      to_name: '',
      message: '',
      reply_to: '',
    });
  
    const onSubmit = (e) => {
        e.preventDefault();
        send(
        'service_jwc0ike',
        'template_lfihv3a',
        toSend,
        'fF1jDB4LOgD5Dxqoo'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
        };
  
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
  
    return (
      <div className='container'>
        <form onSubmit={onSubmit} class=" d-flex flex-column contactForm">
            <input
                type='text'
                name='from_name'
                placeholder='NAME'
                value={toSend.from_name}
                onChange={handleChange}
                class="m-3"
            />
             <input
                type='text'
                name='reply_to'
                placeholder='YOUR EMAIL'
                value={toSend.reply_to}
                onChange={handleChange}
                class="m-3"
            />
            <input
                type='text'
                name='message'
                placeholder='MESSAGE'
                value={toSend.message}
                onChange={handleChange}
                class="m-3"
            />
            <button type='submit' id="contactBtn" class="m-3">Submit</button>
        </form>
      </div>
    );
  }

export default Contact;