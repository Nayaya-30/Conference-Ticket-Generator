import { useState } from 'react';

const Image = ({ onImageChange }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [error, setError] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0] || null;
        setError(null);
        
        if (file) {
            // Check file type
            if (file.type !== 'image/png') {
                setError('Please upload a PNG image file');
                return;
            }
            
            // Check file size (less than 500KB)
            if (file.size > 500 * 1024) {
                setError('File size must be less than 500KB');
                return;
            }
            
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result || null;
                setImagePreview(result);
                if (onImageChange) {
                    onImageChange(result);
                }
            };
            reader.readAsDataURL(file);
        } else {
            // Handle case when user cancels file selection
            setImagePreview(null);
            if (onImageChange) {
                onImageChange(null);
            }
        }
    };

    return (
        <>
            <div className="mb-6">
                <label className="block text-neutral-100 text-sm font-bold mb-2">
                    Avatar (optional)
                </label>
                <div className="flex items-center">
                    {imagePreview && (
                        <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-16 h-16 rounded-full object-cover mr-4" 
                        />
                    )}
                    <div className="relative">
                        <input 
                            type="file" 
                            accept=".png,image/png" 
                            onChange={handleImageChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            aria-label="Avatar upload"
                        />
                        <div className="bg-neutral-700 text-neutral-100 font-bold py-2 px-4 rounded cursor-pointer hover:bg-neutral-600">
                            Choose File
                        </div>
                    </div>
                </div>
                {error && (<p className="text-red-500 text-sm mt-2" role="alert">{error}</p>)}
            </div>
        </>
    );
};

export default Image;