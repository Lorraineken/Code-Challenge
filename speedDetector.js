/*Write a program that takes as input the speed of a car e.g 80. 
 If the speed is less than 70, it should print “Ok”.
 Otherwise, for every 5 km/s above the speed limit (70), 
 it should give the driver one demerit point and print the total number of demerit points.
 If the driver gets more than 12 points, the function should print: “License suspended”.
 */

let demeritPoint = 0;

function speedDetector(speed){
    if(speed<70){
        console.log("Ok")
    }
    else{
        demeritPoint = (speed-70)/5;
        if(demeritPoint>12){
            console.log("License suspended")
        }
        else{
        console.log(`demerit points: ${demeritPoint}`)
        }
    }
}

speedDetector(140)