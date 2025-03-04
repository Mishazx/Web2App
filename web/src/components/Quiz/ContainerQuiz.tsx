import Background from "../Common/QuizUI/BackgroundQuiz";
import ContinueButton from "../Common/ContinueButton";
import Button from "../Common/QuizUI/Button";
import HeaderQuiz from "../Common/QuizUI/HeaderQuiz";
import DescriptionQuiz from "../Common/QuizUI/DescriptionQuiz";

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
    <Background progress={progress}>

      <HeaderQuiz text={question} />

      {options && <div className="quiz-buttons">
        {options.map((option, index) => (
          <Button key={index} text={option} onClick={handleNext} style={{ marginBottom: 10 }} />
        ))}
      </div>
      }

      <DescriptionQuiz description={description} />

      {(!options || buttonText) && (
        <ContinueButton handleClick={handleNext} buttonText={buttonText} />
      )}

    </Background>
  );
};

export default ContainerQuiz;