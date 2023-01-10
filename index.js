// create empty array to store properties
let allProperties = [];

// get addProperty button on page
const addButton = document.getElementById("add");
// when clicked, get user input;
addButton.addEventListener("click", () => {
  const addressInput = document.querySelector("#address");
  const address = addressInput.value;

  const propertyInput = document.querySelector("#propertyType");
  const propertyType = propertyInput.value;

  const cityInput = document.querySelector("#city");
  const city = cityInput.value;

  const stateInput = document.querySelector("#state");
  const state = stateInput.value;

  // push and store user input into array as an object
  allProperties.push({
    address: address,
    property: propertyType,
    city: city,
    state: state,
    comment: [],
  });

  // get section where properties will appear
  const properties = document.querySelector("#propertyContainer");

  // propertyElArray is new array every time new property is added;
  // .map() takes each element in allProperties array,
  const propertyElArray = allProperties.map((property) => {
    // create section to hold property details, comment button, and delete button
    const propertyElement = document.createElement("section");

    const commentButton = document.createElement("button");
    commentButton.textContent = "Comment";

    // add event listener to comment button
    commentButton.addEventListener("click", () => {
      // create text box and send button
      const commentText = document.createElement("input");
      const sendButton = document.createElement("button");
      sendButton.textContent = "Send";

      // add event listener to send button
      // when button is clicked, add comment to object in array
      // generate DOM element on page
      sendButton.addEventListener("click", () => {
        if (commentText.value.length >= 1 && commentText.value.length <= 280) {
          property.comment.push(commentText.value);

          // create container for text
          const comment = document.createElement("section");
          // add text to container
          comment.textContent = commentText.value;
          // append to propertyElement
          propertyElement.append(comment);
        }
      });

      // append to propertyElement;
      propertyElement.append(commentText, sendButton);
    });

    const delButton = document.createElement("button");
    delButton.textContent = "Remove Property";

    // add event listener to delete button;
    delButton.addEventListener("click", () => {
      propertyElement.remove();
      const indexOfProperty = allProperties.indexOf(property);
      allProperties.splice(indexOfProperty, 1);
    });

    // create property entry
    const propertyDetails = document.createElement("section");
    propertyDetails.setAttribute("style", "white-space: pre;")
    propertyDetails.textContent = `Street Address: ${property.address}\r\nProperty Type: ${property.property}\r\nCity: ${property.city}\r\nState: ${property.state}`;
    console.log(propertyDetails.textContent)
    // append property details and delete button to section
    propertyElement.append(propertyDetails, delButton, commentButton);
    // return section
    return propertyElement;
  });
  // replace all children with new updated array
  properties.replaceChildren(...propertyElArray);
});
