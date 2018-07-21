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

        <!-- Logo -->
        <div class="menu-logo">
            <a href="index.htm">
                <img src="assets/images/logo.png">
                <p class="menu-logo-title">Wasi </p>
            </a>
        </div>

        <!-- Carousel
        ================================================== -->
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img class="first-slide" src="assets/images/carousel1.jpg" alt="First slide">
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Lima.</h1>
                            <p>12.600 personas están buscando hoteles hoy.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img class="second-slide" src="assets/images/carousel2.jpg" alt="Second slide">
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Cusco.</h1>
                            <p>3.500 personas están buscando hoteles hoy.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img class="third-slide" src="assets/images/carousel3.jpg" alt="Third slide">
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>Arequipa.</h1>
                            <p>2000 personas están buscando hoteles hoy.</p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div><!-- /.carousel -->


        <div class="container">
            <div class="row" id="contenido_hoteles"></div>
        </div><!-- /.container -->
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/mustache.js"></script>
        <script src="assets/js/app.js"></script>

        <script type="text/template" id="template_hoteles">
            {{#hoteles}}
            <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <img src="assets/images/{{imagen}}">
            <div class="caption">
            <h3>{{name}} <img src="assets/images/{{estrellas}}-estrellas.png" class="estrellas"/></h3>
            <p>{{direccion}}</p>
            <p><a href="hotel.htm?id={{id}}" class="btn btn-primary" role="button">Habitaciones</a></p>
            </div>
            </div>
            </div>
            {{/hoteles}}
        </script>
        <script>
            App.hoteles.listar();
        </script>
    </body>
</html>
