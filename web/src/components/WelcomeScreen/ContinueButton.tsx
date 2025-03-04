import { useNavigate } from 'react-router-dom';

const ContinueButton = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/quiz');
  };
  
  return (
    <button 
      className="continue-button"
      onClick={handleClick}
    >
      Continue
    </button>
  );
};

export default ContinueButton; 