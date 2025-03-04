import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Background from '../Common/QuizUI/BackgroundQuiz';
import HeaderQuiz from '../Common/QuizUI/HeaderQuiz';
import ContinueButton from '../Common/ContinueButton';
import { questions } from '../Quiz';

const ResultsScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  const handleContinue = () => {
    const answers = Array.from(searchParams.entries())
      .filter(([key]) => key.startsWith('q'))
      .reduce((acc, [key, value]) => {
        const questionId = parseInt(key.slice(1));
        const question = questions.find(q => q.id === questionId);
        
        if (question && question.type === "question") {
          acc[key] = {
            question: question.text,
            answer: value
          };
        }
        return acc;
      }, {} as Record<string, { question: string; answer: string }>);
      
    console.log('answers', answers);
    const answersStr = encodeURIComponent(JSON.stringify(answers));
    console.log('answersStr', answersStr);
    const deeplinkUrl = `tradegeniusapp://survey-results?answers=${answersStr}`;
    
    window.location.href = deeplinkUrl;
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