import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
    //     evacuationWarningMessage() {
    //     return 'Evacuate the building immediately!';
    // }
}

try {
   new TestBuilding(200)
}
catch(err) {
    console.log(err);
}
// try {
//     const testBuilding = new TestBuilding(200);
//     testBuilding.evacuationWarningMessage();
// } catch (err) {
//     console.log('Error:', err.message);  // Expected: "Class extending Building must override evacuationWarningMessage"
// }
