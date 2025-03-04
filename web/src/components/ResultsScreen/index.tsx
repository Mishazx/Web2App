import React from 'react';
import Background from '../Common/QuizUI/BackgroundQuiz';
import HeaderQuiz from '../Common/QuizUI/HeaderQuiz';
import ContinueButton from '../Common/ContinueButton';

const ResultsScreen: React.FC = () => {
  const handleContinue = () => {
    console.log('handleContinue');
  };
  
  return (
    <Background progress={100}>
      <HeaderQuiz text="Thanks for taking the survey!" />
      
      <div className="result-description">
        <div className="result-line">Before we start, here's a special offer just for today, only for you:</div>
        <div className="result-line">Get 50% off TradeGenius and access all our top stock picks.</div>
      </div>
      
      <ContinueButton 
        handleClick={handleContinue} 
        buttonText="Claim & Download App" 
      />
    </Background>
  );
};

export default ResultsScreen;