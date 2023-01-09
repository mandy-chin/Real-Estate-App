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
  });

  // get section where properties will appear
  const properties = document.querySelector("#propertyContainer");

  // propertyElArray is new array every time new property is added;
  // .map() takes each element in allProperties array,
  const propertyElArray = allProperties.map((property) => {
    // create section to hold property details and delete button
    const propertyElement = document.createElement("section");

    const delButton = document.createElement("button");
    delButton.textContent = "Remove Property";

    // add event listener to delete button;
    delButton.addEventListener("click", () => {});
    // create property entry
    const propertyDetails = document.createElement("section");
    propertyDetails.textContent = `Street Address: ${property.address}, Property Type: ${property.property}, City: ${property.city}, State: ${property.state}`;
    // append property details and delete button to section
    propertyElement.append(propertyDetails, delButton);
    // return section
    return propertyElement;
  });
  properties.replaceChildren(...propertyElArray);
});
