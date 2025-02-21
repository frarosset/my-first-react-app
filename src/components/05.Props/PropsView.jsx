import Button from "./Button.jsx";

const handleButtonClick = (url) => {
  window.location.href = url;
};

function PropsView() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button
        text="Don't click Me!"
        color="red"
        handleClick={() => handleButtonClick("https://www.google.com")}
      />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
}

export default PropsView;
