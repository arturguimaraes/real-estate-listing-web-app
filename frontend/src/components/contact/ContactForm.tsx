import { useState } from 'react';

const contactFormInitialValues = {
  name: '',
  email: '',
  number: '',
  comments: '',
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>(contactFormInitialValues);
  const [validationMessage, setValidationMessage] = useState('');

  const handleInputChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  };

  const validatePhoneNumber = (number: string) => {
    return number.match(/^[0-9]+$/);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Clear previous validation messages
    setValidationMessage('');

    // Validation logic
    if (!formValues.name || !formValues.email || !formValues.number || !formValues.comments) {
      setValidationMessage('Please fill in all fields.');
      return;
    }

    if (!validateEmail(formValues.email)) {
      setValidationMessage('Please enter a valid email.');
      return;
    }

    if (!validatePhoneNumber(formValues.number)) {
      setValidationMessage('Phone number should contain only numbers.');
      return;
    }

    // Simulate form submission
    setValidationMessage('Message sent successfully!');
  };

  return (
    <div className='bg-gray-200 shadow-lg rounded-lg w-full p-4 flex flex-col space-y-4'>
      <p className='text-center text-[16px]'>Contact Agent</p>
      <input
        type='text'
        name='name'
        value={formValues.name}
        placeholder='Full Name *'
        className='rounded-lg border border-gray px-2 py-1'
        onChange={handleInputChange}
      />
      <input
        type='email'
        name='email'
        value={formValues.email}
        placeholder='Email *'
        className='rounded-lg border border-gray px-2 py-1'
        onChange={handleInputChange}
      />
      <input
        type='text'
        name='number'
        value={formValues.number}
        placeholder='Phone Number *'
        className='rounded-lg border border-gray px-2 py-1'
        onChange={handleInputChange}
      />
      <textarea
        className='rounded-lg border border-gray px-2 py-1'
        rows={5}
        placeholder='Comments *'
        name='comments'
        value={formValues.comments}
        onChange={handleInputChange}
      ></textarea>
      {validationMessage && (
        <p
          className={`text-center text-[12px] ${
            validationMessage === 'Message sent successfully!' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {validationMessage}
        </p>
      )}
      <div className='text-center'>
        <button
          onClick={handleSubmit}
          className='right rounded-lg text-[12px] border border-gray bg-blue-400 hover:bg-blue-500 text-white px-4 py-1 grow'
        >
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
