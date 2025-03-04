import React from 'react';
import './styles.css';

interface DescriptionQuizProps {
  description?: string;
  lines?: string[]; // Массив строк для многострочного отображения
}

const DescriptionQuiz: React.FC<DescriptionQuizProps> = ({ description, lines }) => {
  if (lines && lines.length > 0) {
    return (
      <div className="result-description">
        {lines.map((line, index) => (
          <div key={index} className="result-line">{line}</div>
        ))}
      </div>
    );
  }
  
  if (description) {
    return <div className="quiz-description">{description}</div>;
  }
  
  return null;
};

export default DescriptionQuiz;