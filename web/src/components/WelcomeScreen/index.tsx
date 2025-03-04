import BackgroundImage from './BackgroundImage';
import GradientOverlay from './GradientOverlay';
import AwardBadge from './AwardBadge';
import MainTitle from './MainTitle';
import SubTitle from './SubTitle';
import ContinueButton from '../Common/ContinueButton';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/quiz');
  };

  return (
    <div className="welcome-screen" style={{ 
      width: 430, 
      height: 932, 
      background: "#000000",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      position: "relative",
    }}>
      <BackgroundImage />
      <GradientOverlay />
      
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 3,
        padding: "0 20px 40px 20px"
      }}>
        <AwardBadge />
        <MainTitle />
        <SubTitle />
        <ContinueButton handleClick={handleContinue} />
      </div>
    </div>
  );
};

export default WelcomeScreen; 