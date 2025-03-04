import "./styles.css";

interface HeaderQuizProps {
  text: string;
}

const HeaderQuiz = ({text}: HeaderQuizProps) => {
  return (
    <span className="header-quiz">
      {text}
    </span>
  );
};

export default HeaderQuiz;