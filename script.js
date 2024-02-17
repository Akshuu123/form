$(document).ready(function () {
    var angle = 0;
    var rotationDirection = 1; // 1 for clockwise, -1 for counterclockwise

    function rotateKey() {
        angle += 10 * rotationDirection; // Adjust the rotation angle and speed as needed

        // Change rotation direction when reaching certain angles
        if (angle >= 30 || angle <= -30) {
            rotationDirection *= -1;
        }

        $("#rotating_key").css({ "transform": "rotate(" + angle + "deg)", "transition": "ease .4s" });
        setTimeout(rotateKey, 50); // Adjust the rotation speed as needed
    }

    rotateKey();
    $(".form_main").effect("bounce", "slow");
});