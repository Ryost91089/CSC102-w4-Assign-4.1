var intervalID = 0; // Declaration of variable to store the interval ID, set to 0
var x = 100; // Horizontal starting point
var y = 100; // Vertical starting point
var directionX = 1; // 1 means moving right, -1 means moving left
var directionY = 1; // 1 means moving down, -1 means moving up

function intervalStart() //Function to start image movement
{
    document.getElementById("startButton").disabled = true; // Disable the start button
    document.getElementById("stopButton").disabled = false; // Enable the stop button

    var image = document.getElementById("imgDog"); // Get the image element by its ID

    intervalID = setInterval(function () // Start the interval function and store the interval ID
    { 
        x += 5 * directionX; // Update the x-coordinate based on the direction and speed
        y += 5 * directionY; // Update the y-coordinate based on the direction and speed

        // Change direction when hitting the edge of the screen
        if (x + image.width >= window.innerWidth || x <= 0) // Check if the image hits the left or right edge
            { 
            directionX *= -1; // Reverse the horizontal direction
        }
        if (y + image.height >= window.innerHeight || y <= 0) // Check if the image hits the top or bottom edge
            { 
            directionY *= -1; // Reverse the vertical direction
        }

        image.style.left = x + "px"; // Move the image horizontally by updating the left CSS property
        image.style.top = y + "px"; // Move the image vertically by updating the top CSS property

        document.getElementById("XandY").innerHTML = "x = " + x + " y = " + y; // Display the current coordinates
    }, 25); // Execute the function every 25 milliseconds
}

function intervalStop() //Function to stop image movement
{
    document.getElementById("startButton").disabled = false; // Enable the start button
    document.getElementById("stopButton").disabled = true; // Disable the stop button
    clearInterval(intervalID); // Clear the interval using the stored interval ID
}

