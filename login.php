<html>
<head>
    <title>Login and registration</title>
    <meta charset="utf-8">
    <link rel="stylesheet" style="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" style="text/css" href="./style.css">
</head>
<body>
    <div class="container">
        <div class="container-fluid">
            <div class="headerr text-center">
                <h1>e-Parking</h1>

            </div>
        </div>
        <div class="login-box">
            <div class="row">
                <div class="col-md-6 login-left">
                    <h2>Login here</h2>
                    <form action="validation.php" method="post">
                        <div class="form-group">
                            <label>E-mail</label>
                            <input type="text" name="email" class="form-control" required>

                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" name="password" class="form-control" required>
                            
                        </div>
                        <button type="submit" class="btn btn-light">Login</button>
                    </form>
                </div>

                <div class="col-md-6 login-right">
                    <h2>Register here</h2>
                    <form action="registration.php" method="post">
                        <div class="form-group">
                            <label>E-mail</label>
                            <input type="text" name="email" class="form-control" required>

                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" name="password" class="form-control" required>
                            
                        </div>
                        <button type="submit" class="btn btn-dark">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script>
        let fetchData = () => {

        };

        let getAvailableSpaces = () => {

        };

    </script>
</body>
</html>