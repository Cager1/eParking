<?php

session_start();
if(!isset($_SESSION['email'])){
    header('location:login.php');
}
?>

<html>
    <head>
        <title>Home page</title>
        <link rel="stylesheet" style="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" style="text/css" href="./style.css">
    </head>
    <body>

        <div class="container homepg">
            <a href="logout.php" class="float-right">Log out</a>

            

            <h1>Welcome <?php echo $_SESSION['email']; ?></h1>

            <div class="weather">
                <!--
                <a class="weatherwidget-io" href="https://forecast7.com/hr/43d3417d81/mostar/" data-label_1="Mostar" data-mode="Current" data-theme="dark" >Mostar</a>
                <script>
                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
                </script>
                -->
                <a class="weatherwidget-io" href="https://forecast7.com/hr/43d3417d81/mostar/" data-label_1="Mostar" data-mode="Current" >Mostar</a>
                <script>
                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
                </script>
            </div>
        </div>
        <script>
            const url = 'http://smart.sum.ba/parking?withParkingSpaces=1';

const fetchMyJSON = (callback) => {
    fetch(url)
        .then(response => response.json())
        .then(json => { return callback(json[0]); });
};

fetchMyJSON(console.log);
        </script>
    </body>
</html>