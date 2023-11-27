const myImage = document.querySelector("img");

let myButton = document.querySelector("button");

let myHeading = document.querySelector("h1");

myImage.onclick = () => {

  const mySrc = myImage.getAttribute("src");

  if (mySrc === "Images/profile.jpg") {

    myImage.setAttribute("src", "Images/display.jpeg");

  } else {
    myImage.setAttribute("src", "Images/profile.jpg");
  }
};

    function setUserName() {

        const myName = prompt("Please enter your name.");

        if (!myName) {

          setUserName();
        }

        else {

          localStorage.setItem("name", myName);
          myHeading.textContent = `Hello and welcome young Coder, ${myName}`;
        }
    }
      
  if (!localStorage.getItem("name")) {

    setUserName();

  } else {

    const storedName = localStorage.getItem("name");
    myHeading.textContent = `You're the best coder, ${storedName}`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };
  

