import smartphone from '../../assets/welcome/image.png';

const BackgroundImage = () => {
  return (
    <div className="welcome-background-image">
      <img
        src={smartphone}
        alt="Trading smartphone"
        className="background-phone-image"
      />
    </div>
  );
};

export default BackgroundImage; 