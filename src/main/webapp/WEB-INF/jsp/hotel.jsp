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
                <li><c:out value="${hotel.name}"/></li>
            </ul>

            <div class="jumbotron">
                <h1> <c:out value="${hotel.name}"/> <img src="assets/images/<c:out value="${hotel.estrellas}"/>-estrellas.png" class="estrellas"/></h1>
                <p class="lead"><c:out value="${hotel.descripcion}"/></p>
                <p><strong>Direccion:</strong> <c:out value="${hotel.direccion}"/></p>
                <p>Check In: <c:out value="${hotel.checkin}"/></p>
                <p>Check Out <c:out value="${hotel.checkout}"/></p>
                <p>Desayuno: 
                    <c:choose>
                        <c:when test="${hotel.desayuno}">SI</c:when>
                        <c:otherwise>NO</c:otherwise>
                    </c:choose>
                </p>
                <p>WIFI: 
                    <c:choose>
                        <c:when test="${hotel.wifi}">SI</c:when>
                        <c:otherwise>NO</c:otherwise>
                    </c:choose>
                </p>
            </div>


            <div class="row" id="contenido_habitaciones"></div>
        </div><!-- /.container -->


        <div class="modal fade bs-example-modal-sm" id="modal_datos" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Datos de reserva</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input type="date" class="form-control" placeholder="Fecha" id="txt_fecha"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Nombre" id="txt_nombre"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Correo" id="txt_email"/>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-warning" onclick="App.habitaciones.completar()">Reservar</button>
                    </div>
                </div>
            </div>
        </div>

        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/mustache.js"></script>
        <script src="assets/js/app.js"></script>


        <script type="text/template" id="template_habitaciones">
            {{#habitaciones}}
            <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <iframe id="lbl_360" src="https://www.google.com/maps/embed?{{frame}}" width="100%" height="300px" frameborder="0" allowfullscreen=""></iframe>
            <div class="caption">
            <h3>{{name}} <span class="pull-right text-danger"> US$ {{precio}} </span> </h3>
            <p>{{descripcion}}</p>
            <p><button class="btn btn-success" role="button" data-toggle="modal" data-target="#modal_datos" onclick="App.habitaciones.seleccionar({{id}})">Reservar</button></p>
            </div>
            </div>
            </div>
            {{/habitaciones}}
        </script>
        <script>
                            App.habitaciones.listar(<c:out value="${hotel.id}"/>);
        </script>
    </body>
</html>
