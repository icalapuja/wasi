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
        
        <h2></h2>
        <div class="container">
            <ul class="breadcrumb">
                <li><a href="index.htm">Home</a></li>
                <li>Pago</li>
            </ul>
            <div class="jumbotron">
                <h1>Pago de reserva</h1>
                <p class="lead">Se encuentra a sólo un paso de reservar su habitación. Sólo tiene que verificar que los datos son correctos y proceder a pagarlo.</p>
                <p><strong>Disfrute su hospedaje!!!</strong></p>
            </div>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8" id="contenido_reserva"></div>
                <div class="col-sm-2"></div>

            </div>
        </div><!-- /.container -->



        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/mustache.js"></script>
        <script src="assets/js/app.js"></script>
        <script src="https://integ-pago.culqi.com/js/v1"></script>


        <script type="text/template" id="template_reserva">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3>Datos de la reserva</h3>
                </div>
                <div class="panel-body form form-horizontal">
                    <fieldset>
                        <legend>Datos personales</legend>
                        <div class="form-group">
                            <label class="label-control col-sm-4 text-right">Fecha</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" value="{{reserva.fecha}}" readonly />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="label-control col-sm-4 text-right">A Nombre</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" value="{{reserva.nombre}}" readonly />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="label-control col-sm-4 text-right">Correo</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" value="{{reserva.email}}" readonly />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Datos de la habitacion</legend>
                        <div class="form-group">
                            <label class="label-control col-sm-4 text-right">Hotel</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" value="{{reserva.hotel.name}}" readonly/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="label-control col-sm-4 text-right">Habitación</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" value="{{reserva.habitacion.name}}" readonly/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="label-control col-sm-4 text-right">Precio</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" value="US$ {{reserva.habitacion.precio}}" readonly/>
                            </div>
                        </div>
                    </fieldset>
                    <div class="form-group">
                        <label class="label-control col-sm-4 text-right"></label>
                        <div class="col-sm-6">
                            <button class="btn btn-danger pull-right" onclick="App.reserva.pagar()">Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </script>
        <script>
        
            App.reserva.pintarReserva();

            function culqi() {
                if (Culqi.token) {
                    console.log("Culqi success");
                    var token = Culqi.token.id;
                    var nombres = Culqi.token.tarjeta.nombre;
                    var apellidos = Culqi.token.tarjeta.apellido;
                    var correo = Culqi.token.correo_electronico;
                    
                    location.href="reserva.htm";
                } else {
                    // Hubo un problema...
                    console.log("Culqi error");
                    console.log(Culqi.error);
                    alert(Culqi.error.mensaje);
                }
            }

        </script>
    </body>
</html>
