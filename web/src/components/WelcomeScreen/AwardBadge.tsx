import left from '../../assets/welcome/left.png';
import right from '../../assets/welcome/right.png';

const AwardBadge = () => {
  return (
    <div className="welcome-award-badge">
      <div className="award-badge-content">
        <img src={left} className="award-badge-left" alt="Left laurel" />
        <div className="award-badge-text-container">
          <span className="award-badge-title">
            #1 AI Trading Assistant
          </span>
          <span className="award-badge-subtitle">
            500,000+ profitable trades daily
          </span>
        </div>
        <img src={right} className="award-badge-right" alt="Right laurel" />
      </div>
    </div>
  );
};

export default AwardBadge; 