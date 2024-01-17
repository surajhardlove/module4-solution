
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Speaker</title>
</head>
<body>

    <script>
        function speakHello(name) {
            // Check if the browser supports the Web Speech API
            if ('speechSynthesis' in window) {
                const message = new SpeechSynthesisUtterance(`Hello, ${name}!`);
                speechSynthesis.speak(message);
            } else {
                console.error('Web Speech API is not supported in this browser.');
            }
        }

        // Example usage
        const userName = prompt('Enter your name:');
        speakHello(userName);
    </script>

</body>
</html>
