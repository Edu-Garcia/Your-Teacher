import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster 
      position='top-right'
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          padding: '16px',
          fontSize: '1.5rem',
        },

        success: {
          style: {
            border: '1px solid green',
          },
        },
        
        error: {
          style: {
            border: '1px solid red',
          },
        },
      }} 
    />
  );
};

export { Toast };