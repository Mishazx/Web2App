interface ContinueButtonProps {
  handleClick: () => void;
  buttonText?: string;
}

const ContinueButton = ({ handleClick, buttonText }: ContinueButtonProps) => {
  return (
    <div style={{ marginTop: 220 }}>
      <button
        className="continue-button"
        onClick={handleClick}
      >
        {buttonText ? buttonText : "Continue"}
      </button>
    </div>
  );
};

export default ContinueButton; 