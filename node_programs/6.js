const jsonObject = {
    "name": "Dharshi",
    "age": 20,
    "gender": "female"
};
console.log("Properties of the object:");
for (let property in jsonObject) {
    console.log(property + ": " + jsonObject[property]);
}
const keys = Object.keys(jsonObject);
if (keys.length > 1) {
    delete jsonObject[keys[1]];
    console.log("\nSecond property deleted:");
    console.log(jsonObject);
} else {
    console.log("\nObject has only one property. Cannot delete second property.");
}
const objectLength = Object.keys(jsonObject).length;
console.log("\nLength of the object:", objectLength);
