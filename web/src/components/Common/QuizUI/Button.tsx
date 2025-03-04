
interface ButtonProps {
  text: string;
  onClick: () => void;
  style: React.CSSProperties;
}

const Button = ({text, onClick, style}: ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#FFFFFF33",
        borderRadius: 32,
        border: "none",
        paddingTop: 25,
        paddingBottom: 25,
        textAlign: "left",
        color: "#FFFFFF",
        fontSize: 22,
        ...style
    }}>{text}</button>
  );
};

export default Button;