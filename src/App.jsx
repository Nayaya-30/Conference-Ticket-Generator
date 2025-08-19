import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Ticket from './components/Ticket';
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
  const [showTicket, setShowTicket] = useState(false);

  const validateField = async (name, value) => {
    try {
      await validationSchema.validateAt(name, { [name]: value });
      setErrors(prev => ({ ...prev, [name]: '' }));
    } catch (err) {
      setErrors(prev => ({ ...prev, [name]: err.message }));
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate the field on change
    await validateField(name, value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if there are any errors
    const hasErrors = Object.values(errors).some(error => error !== '');
    const hasEmptyFields = Object.values(formData).some(value => value === '');
    
    if (!hasErrors && !hasEmptyFields) {
      setShowTicket(true);
    }
  };

  const handleGenerateAnother = () => {
    setShowTicket(false);
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

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-md">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-neutral-100 inline-block text-transparent bg-clip-text pb-2">
            Conference Ticket Generator
          </h1>
          <p className="text-neutral-300 mt-2">
            Create your personalized conference ticket
          </p>
        </header>

        {showTicket ? (
          <>
            <Ticket 
              name={formData.name}
              email={formData.email}
              position={formData.position}
              avatar={avatar}
            />
            <div className="mt-8">
              <Button onClick={handleGenerateAnother} type="button">
                Generate Another Ticket
              </Button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="bg-neutral-700 rounded-2xl p-6 shadow-lg">
            <Input
              label="Full Name"
              type="text"
              placeholder="e.g. John Doe"
              name="name"
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
              label="Job Position"
              type="text"
              placeholder="e.g. Frontend Developer"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              error={errors.position}
            />

            <div className="mb-6">
              <label className="inline-block text-neutral-100 text-sm font-bold mb-2">
                Avatar (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="w-full bg-neutral-700 text-neutral-100 font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-700 file:text-neutral-100 hover:file:bg-orange-600"
              />
            </div>

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