interface ContinueButtonProps {
  handleClick: () => void;
  buttonText?: string;
}

const ContinueButton = ({handleClick, buttonText}: ContinueButtonProps) => {
  return (
    <button 
      className="continue-button"
      onClick={handleClick}
    >
      {buttonText ? buttonText : "Continue"}
    </button>
  );
};

export default ContinueButton; 