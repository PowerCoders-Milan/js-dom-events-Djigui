// Ex 1. Add the .blue CSS class to the th elements

const thElements = document.querySelectorAll('th');

thElements.forEach((element) => {
  element.className = "th";
});

// Ex 2. Count the number of table body rows there are
//       Make the function teamCount() return it
const teamCount = () => {
  // TODO: return the number of teams
  const trElements = document.querySelectorAll('');
  return tr;
};

// Ex 3. Say there is a 15th team added to the table.
//       Add a row at the bottom, this new team (Spezia) should have 39 points.

const list = document.querySelector('th');
list.insertAdjacentHTML('beforeend', 'td');

// Ex 4. Write some code to sum all points given to all teams
//       Make the function summarizePoints() return it
const summarizePoints = () => {
  // TODO: return the sum
  return summarizePoints.tr;
};


// Ex 5. Change the background color of all `<th>` cells to #DDF4FF

const thEl = document.querySelectorAll('.blue');

thEl.forEach((element) => {
  element.style.backgroundColor = "blue";
});



// calls of functions you created on top (DO NOT REMOVE)
console.log(`team count: ${teamCount()}`);
console.log(`summarize points: ${summarizePoints()}`);
