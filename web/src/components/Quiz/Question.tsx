import "./styles.css";

interface QuestionProps {
  text: string;
}

const Question = ({text}: QuestionProps) => {
  return (
    <span className="question">
      {text}
    </span>
  );
};

export default Question;