import "./Newsletter.css";

const Newsletter = () => {
  const handleSubscribe = () => {
    
    const input = document.getElementById("email-input") as HTMLInputElement;
    const message = document.getElementById("thankyou-msg");

    if (input.value) {
      alert(`Thanks! ${input.value} will receive sale updates.`);
      input.value = "";
      if (message) {
        message.textContent = "Thanks for subscribing! 🎉";
      }
    } else {
      alert("Please enter your email!");
    }
  };

  return (
    <div className="newsletter">
      <h3>Subscribe for New Sale Updates!</h3>
      <input
        type="email"
        id="email-input"
        placeholder="Enter your email"
      />
      <button onClick={handleSubscribe}>Subscribe</button>
      <p id="thankyou-msg"></p>
    </div>
  );
};

export default Newsletter;
