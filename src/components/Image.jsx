import { useState, useRef } from 'react';

const Image = ({ onImageChange }) => {
  const [preview, setPreview] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        if (onImageChange) {
          onImageChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setPreview('');
      if (onImageChange) {
        onImageChange(null);
      }
    }
  };

  const handleClear = () => {
    setPreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onImageChange) {
      onImageChange(null);
    }
  };

  return (
    <div className="mb-6">
        {!preview && (<label className="block text-neutral-300 text-sm font-bold mb-2">
        Upload Avatar
      </label>)}
      
      {preview ? (
        <div className="flex flex-col items-center">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-28 h-28 rounded-full object-cover border-2 border-orange-700 pointer mb-2"
          />
          <button
            type="button"
            onClick={handleClear}
            className="text-sm bg-neutral-700 hover:bg-neutral-500 rounded-2xl p-1 text-orange-500 hover:text-neutral-900"
          >
            Remove Image
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center h-24 py-2 w-full border-2 border-dashed
           border-orange-500 rounded-lg cursor-pointer bg-neutral-700/70 hover:bg-neutral-800/70
            transition duration-200">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <img src={'./assets/images/icon-upload.svg'} alt="Upload" className="w-10 h-10 mb-3" />
              <p className="mb-2 text-sm text-neutral-400">
                <span className="font-semibold text-neutral-900">Click to upload</span> or drag and drop
              </p>
            </div>
            <input 
              ref={fileInputRef}
              type="file" 
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
              aria-label="Avatar"
            />
          </label>
            <p className="text-xs text-neutral-500">
                <img src={'./assets/images/icon-info.svg'} alt="Info" className="w-4 h-4 inline-block mr-1" />
                Upload your photo (SVG, PNG, JPG or GIF, MAX: 500KB)
            </p>
        </div>
      )}
    </div>
  );
};

export default Image;