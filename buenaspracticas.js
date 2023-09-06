let userAge = 25;
let hasCar = true;
function canDrive() {
    try {
        if (userAge >= 18 && hasCar) {
            { return true; }
        } else {
            return false;
        }
    } catch {
        console.log("dato invalido")
    }
}
console.log(canDrive());