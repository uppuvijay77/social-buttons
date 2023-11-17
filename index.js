const Button = (props) => {
  //  Write your code here.
  {className, buttonText} = props
  return < className = className>{buttonText}</button>

};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
        <Button className = 'like-button' buttonText = 'Like'/>
        <Button className = 'comment-button' buttonText = 'Comment'/>
        <Button className = 'share-button' buttonText = 'Share'/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

/*
 const buttonsList = [
      {
          id :1,
          color:#eab308,
          textColor: white,
      },
      {
          id :2,
          color:#ffffff,
          textColor:  #323f4b,
      },
      {
          id :3,
          color:#1d4ed8,
          textColor: white
      }
  ]
*/
