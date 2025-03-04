import { useNavigate } from 'react-router-dom';

const MainTitle = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/quiz');
  };
  
  return (
    <div className="welcome-main-title" onClick={handleClick}>
      Join 15+ Million Investors with Unlimited TradeGenius Access
    </div>
  );
};

export default MainTitle; 