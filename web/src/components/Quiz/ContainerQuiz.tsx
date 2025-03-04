import ContinueButton from "../Common/ContinueButton";
import Button from "./Button";
import Question from "./Question";
import "./styles.css";

interface ContainerQuizProps {
  question: string;
  options?: string[];
  description?: string;
  buttonText?: string;
  handleNext: () => void;
  progress: number;
}

const ContainerQuiz = ({
  question, 
  options, 
  description, 
  buttonText, 
  handleNext,
  progress
}: ContainerQuizProps) => {
  return (
    <div className="quiz-container">
      <div className="quiz-inner">
        <div className="quiz-content">
          <div className="quiz-progress">
            <div className="progress-bar-background">
              <div 
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Question text={question} />

          {options && <div className="quiz-buttons">
            {options.map((option, index) => (
              <Button key={index} text={option} onClick={handleNext} style={{ marginBottom: 10 }} />
            ))}
          </div>
          }

          {description && <div className="quiz-description">
            {description}
          </div>}

          {(!options || buttonText) && (
            <div className="quiz-buttons">
              <ContinueButton handleClick={handleNext} buttonText={buttonText} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContainerQuiz;