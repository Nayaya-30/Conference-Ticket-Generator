import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Ticket from './components/Ticket';
import Image from './components/Image';
import validationSchema from './components/YupSchema';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    position: ''
  });
  const [avatar, setAvatar] = useState('');
  const [avatarError, setAvatarError] = useState('');
  const [showTicket, setShowTicket] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const handleInputChange =  (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // This CallBack function will Validate the field on change
     validateField(name, value);
  };
  const validateField = async (name, value) => {
        try {
            await validationSchema.validateAt(name, { [name]: value });
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        catch (err) {
            setErrors(prev => ({ ...prev, [name]: err.message }));
        }
    };
  const handleAvatarChange = (imageData) => {
    setAvatarError(''); // This will Clear previous avatar errors
    if (imageData) {
      setAvatar(imageData);
    } else {
      setAvatar('');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields before submitting
    const fieldNames = Object.keys(formData);
    const validationErrors = {};
    
    for (const fieldName of fieldNames) {
      try {
        await validationSchema.validateAt(fieldName, formData);
        validationErrors[fieldName] = '';
      } catch (err) {
        validationErrors[fieldName] = err.message;
      }
    }
    
    setErrors(validationErrors);
    
    // The following constants Check if there are any errors or an input field is empty
    const hasErrors = Object.values(validationErrors).some(error => error !== '');
    const hasEmptyFields = Object.values(formData).some(value => value === '');
    
    if (!hasErrors && !hasEmptyFields) {
      setShowTicket(true);
      setTicketNumber(`#${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`);
    }
  };
  const handleGenerateAnother = () => {
    setShowTicket(false);
    setTicketNumber('');
    setFormData({
      name: '',
      email: '',
      position: ''
    });
    setAvatar('');
    setErrors({
      name: '',
      email: '',
      position: ''
    });
  };

  const img = [
      {src: './assets/images/background-desktop.png', alt: 'BG Image'},
      {src: './assets/images/pattern-lines.svg', alt: 'Lines'},
      {src: './assets/images/pattern-circle.svg', alt: 'Circle'},
      {src: './assets/images/pattern-squiggly-line-bottom-desktop.svg', alt: 'Squiggly-line'},
      {src: './assets/images/pattern-squiggly-line-top.svg', alt: 'Squiggly-line'},
      {src: './assets/images/logo-full.svg', alt: 'Logo'},
  ]

  return (
    <div className="bg relative bg-neutral-900 flex flex-col items-center py-12 px-4">
        <>
            <img src={img[5].src} alt={img[5].alt} className={'absolute top-8 translate-x-50%'} />
            <img src={img[1].src} alt={img[1].alt} className={'absolute top-0'} />
            <img src={img[2].src} alt={img[2].alt} className={'absolute top-0 left-10'} />
            <img src={img[4].src} alt={img[4].alt} className={'absolute top-0 right-0'} />
            <img src={img[2].src} alt={img[2].alt} className={'absolute right-20 bottom-16'} />
            <img src={img[3].src} alt={img[3].alt} className={'absolute bottom-0 left-0'} />
        </>

      <div className="w-full h-full flex place-items-center flex-col">
        <header className="text-center px-96 mb-12">
            {showTicket ? (
                <>
                        <h1 className="text-4xl mt-8 font-bold "
                        >
                            Congrats, <b className={'bg-gradient-to-r from-orange-700 to-neutral-100 ' +
                            'inline-block text-transparent bg-clip-text'}>{formData.name}</b> Your ticket is ready.
                        </h1>
                        <p className="text-neutral-300 px-20 text-center text-l mt-4">
                            We've emailed your ticket to <b className={'text-orange-500'}>{formData.email}</b> and will send updates in the run up to the event.
                        </p>
                    </>
            ) : (
                <>
                    <h1 className="text-4xl mt-8 font-bold bg-gradient-to-r from-orange-700
                                    to-neutral-100 inline-block text-transparent bg-clip-text"
                    >
                        Your Journey to Coding Conf 2025 Starts Here!
                    </h1>
                    <p className="text-neutral-300 text-l mt-4">
                        Secure your spot at next year's biggest coding conference.
                    </p>
                </>
            )}

        </header>

        {showTicket ? (
          <>
            <Ticket 
              name={formData.name}
              email={formData.email}
              position={formData.position}
              avatar={avatar}
              ticketNumber={ticketNumber}
            />

            <div className="mt-8">
              <Button disabled={false} onClick={handleGenerateAnother} type="button">
                Generate Another Ticket
              </Button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md bg-neutral-800 bg-opacity-10 backdrop-blur-[3px] rounded-2xl p-6 shadow-lg">
              <Image onImageChange={handleAvatarChange} />

              <Input
              label={"Full Name"}
              type={"text"}
              placeholder={"e.g. John Doe"}
              name={"name"}
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="e.g. john@example.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            <Input
              label="GitHub Username"
              type="text"
              placeholder="e.g. @Nayaya-30"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              error={errors.position}
            />

            <Button type="submit">
              Generate My Ticket
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;