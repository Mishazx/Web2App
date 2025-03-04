
interface BackgroundProps {
  children: React.ReactNode;
  progress: number;
}

const BackgroundQuiz = ({children, progress}: BackgroundProps) => {
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
          {children}
        </div>
      </div>
    </div>
  );
};

export default BackgroundQuiz;