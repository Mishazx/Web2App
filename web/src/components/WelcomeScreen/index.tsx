import BackgroundImage from './BackgroundImage';
import GradientOverlay from './GradientOverlay';
import AwardBadge from './AwardBadge';
import MainTitle from './MainTitle';
import SubTitle from './SubTitle';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/quiz');
  };

  return (
    <div className="welcome-screen" onClick={handleContinue}>
      <BackgroundImage />
      <GradientOverlay />
      
      <div className="welcome-screen-content">
        <AwardBadge />
        <MainTitle />
        <SubTitle />
      </div>
    </div>
  );
};

export default WelcomeScreen; 