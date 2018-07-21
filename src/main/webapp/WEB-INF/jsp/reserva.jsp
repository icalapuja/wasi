<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Wasi</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="../../favicon.ico">
        <link href="assets/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/css/carousel.css" rel="stylesheet">
        <link href="assets/css/estilos.css" rel="stylesheet">
    </head>
    <body>
        <h2></h2>
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="index.htm">Home</a></li>
                <li>Reserva</li>
            </ul>

            <div class="row">
                <div class="col-sm-6">
                    <br/><br/><br/>
                    <h1>Felicicidades!</h1>
                    <h3>Usted ha reservado su habitación correctamente. Por favor, revise el detalle de su reserva en su correo electrónico.</h3>
                </div>
                <div class="col-sm-6">
                    <div class="imagen-felicidades">
                        <img src="assets/images/felicidades.png" />
                    </div>
                </div>
            </div>

        </div>


        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/app.js"></script>
        <script>
            App.reserva.reservar();
        </script>
    </body>
</html>
