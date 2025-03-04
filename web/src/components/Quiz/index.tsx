import { useParams, useNavigate } from 'react-router-dom';
import ContainerQuiz from "./ContainerQuiz";

const questions = [
  { 
    id: 1, 
    type: "question",
    text: "Have you ever invested in stocks?", 
    options: ["Yes", "No"] 
  },
  { 
    id: 2, 
    type: "question",
    text: "How do you decide on your investments?", 
    options: [
      "I do detailed research (charts, models, earnings, etc.)", 
      "I do some research (recent performance and basic news)", 
      "I only glance at headlines",
      "I trust my gut"
    ] 
  },
  { 
    id: 3, 
    type: "info",
    text: "You're Off to a Great Start!", 
    description: "Fantastic job taking the first steps toward boosting your income. Keep going to discover your personalized path to quick wealth!",
    buttonText: "Next"
  },
  { 
    id: 4, 
    type: "question",
    text: "What's your biggest investing challenge?", 
    options: [
      "Not enough knowledge", 
      "Lack of time to research", 
      "Finding the best opportunities", 
      "Feeling overwhelmed by the market", 
      "Other"
    ] 
  },
  { 
    id: 5, 
    type: "question",
    text: "What would boost your investing confidence?", 
    options: [
      "Clear and simple insights", 
      "Access to top investment opportunities", 
      "Expert-managed portfolios",
      "ETFs"
    ] 
  },
  { 
    id: 6, 
    type: "info",
    text: "Success Is Within Reach", 
    description: "You're making great progress! Continue to unlock tips that can accelerate your journey to financial success.",
    buttonText: "Next"
  },
  { 
    id: 7, 
    type: "question",
    text: "How do you feel about risk?", 
    options: [
      "Love risk", 
      "Okay with it", 
      "Cautious", 
      "Prefer safety",
      "Avoid risk"
    ] 
  },
  { 
    id: 8, 
    type: "question",
    text: "Do you want personalized tips that match your goals?", 
    options: [
      "Yes, tell me more!", 
      "Maybe", 
      "No, thank you"
    ] 
  },
  { 
    id: 9, 
    type: "info",
    text: "Imagine a world where…", 
    description: "You can invest with more confidence, see which stocks and trends the experts are following, and potentially earn more money.",
  },
  { 
    id: 10, 
    type: "info",
    text: "Meet TradeGenius", 
    description: "TradeGenius is a platform where top analysts help you spot promising investment opportunities. Every day, millions of busy professionals use TradeGenius to find undervalued trends in the market.",
  },
  { 
    id: 11, 
    type: "question",
    text: "Overall, how satisfied are you with your current investments?", 
    options: [
      "Very satisfied", 
      "Somewhat satisfied", 
      "Not satisfied", 
      "I don't track my returns"
    ] 
  },
  
];

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const questionId = parseInt(id || "1");
  const question = questions.find(q => q.id === questionId) || questions[0];
  
  const progressPercent = Math.round((questionId / (questions.length + 1)) * 100);
  
  const handleNext = () => {
    if (questionId < questions.length) {
      navigate(`/quiz/${questionId + 1}`);
    } else {
      navigate("/results");
    }
  };

  return (
    <>
      {question.type === "question" && (
        <ContainerQuiz 
          question={question.text} 
          options={question.options}
          handleNext={handleNext}
          progress={progressPercent}
        />
      )}
      {question.type === "info" && (
        <ContainerQuiz 
          question={question.text}
          description={question.description}
          buttonText={question.buttonText} 
          handleNext={handleNext}
          progress={progressPercent}
        />
      )}
    </>
  );
};

export default Quiz; 