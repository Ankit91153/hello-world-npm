function helloWorld() {
    return "Hello World";
}

function goodbyeWorld() {
    return "Good Bye World";
}

function HelloWorldNPM() {
    return "Hello World NPM";
}

module.exports = HelloWorldNPM;
HelloWorldNPM.helloWorld = helloWorld;
HelloWorldNPM.goodbyeWorld = goodbyeWorld;
