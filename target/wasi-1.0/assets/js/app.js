// quitar placeholder de fechas
$('.modal input[type="date"]').change(function () {
    var value = this.value;
    if (value) {
        $(this).addClass('full');
    } else {
        $(this).removeClass('full');
    }
});


(function ($) {
    var core = {};

    core.util = (function () {
        var _deploy = false;

        function _clone(o) {
            return JSON.parse(JSON.stringify(o));
        }

        function _isInvalid(variable) {
            return (variable == undefined || variable == null);
        }

        function _isValid(variable) {
            return !_isInvalid(variable);
        }

        function _isEmpty(variable) {
            if (_isValid(variable)) {
                var tipo = typeof variable;
                if (tipo == "object") {
                    tipo = typeof variable.length;

                    if (tipo == "undefined") {
                        // is JSON
                        if (JSON.stringify(variable) == '{}') {
                            return true;
                        }
                    } else {
                        // is Array
                        if (tipo == "number") {
                            if (variable.length == 0) {
                                return true;
                            }
                        }
                    }
                } else {
                    if (tipo == "string") {
                        if (variable == '') {
                            return true;
                        }
                    }
                }
            } else {
                return true;
            }

            return false;
        }

        function _isFunction(variable) {
            if (_isValid(variable)) {
                if (typeof variable == "function") {
                    return true;
                }
            }

            return false;
        }

        function _loadScript(url, callback) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.onreadystatechange = callback;
            script.onload = callback;
            head.appendChild(script);
        }

        function _loadTemplate(url, callback) {
            $.get(url, {}, function (template) {
                callback(template);
            });
        }

        function _isDeploy() {
            return _deploy;
        }

        function _console(mensaje) {
            if (!_isDeploy()) {
                console.log(mensaje);
            }
        }

        function _isIE() {
            return (navigator.userAgent.indexOf('MSIE') != -1);
        }

        function _isChrome() {
            return (navigator.userAgent.toLowerCase().indexOf('chrome') != -1);
        }

        function _isFirefox() {
            return (navigator.userAgent.toLowerCase().indexOf('firefox') != -1);
        }

        function _isEdge() {
            return (!_isIE() && !_isFirefox() && !_isChrome());
        }

        function _replace(stringSource, charStart, charEnd, arrayReplace) {
            var pos = 0;
            var newString = stringSource.substr(0);

            if (arrayReplace.length > 0) {
                arrayReplace.forEach(function (item) {
                    var stringReplace = charStart + pos + charEnd;
                    newString = newString.replace(stringReplace, item);
                    pos++;
                });
            }

            return newString;
        }

        function _replaceFormat(stringSource, arrayReplace) {
            var charStart = "{";
            var charEnd = "}";
            var pos = 0;
            var newString = _replace(stringSource, charStart, charEnd, arrayReplace);
            return newString;
        }

        return{
            isDeploy: function () {
                return _isDeploy();
            },
            console: function (mensaje) {
                _console(mensaje);
            },
            clone: function (o) {
                return _clone(o);
            },
            isInvalid: function (variable) {
                return _isInvalid(variable);
            },
            isValid: function (variable) {
                return _isValid(variable);
            },
            isEmpty: function (variable) {
                return _isEmpty(variable);
            },
            isFunction: function (variable) {
                return _isFunction(variable);
            },
            loadScript: function (url, callback) {
                _loadScript(url, callback);
            },
            loadTemplate: function (url, callback) {
                _loadTemplate(url, callback);
            },
            isIE: function () {
                return _isIE();
            },
            isChrome: function () {
                return _isChrome();
            },
            isFirefox: function () {
                return _isFirefox();
            },
            isEdge: function () {
                return _isEdge();
            },
            replace: function (stringSource, charStart, charEnd, arrayReplace) {
                return _replace(stringSource, charStart, charEnd, arrayReplace);
            },
            replaceFormat: function (stringSource, arrayReplace) {
                return _replaceFormat(stringSource, arrayReplace);
            }
        }
    })();


    core.storage = (function () {
        function _setItem(item, json) {
            var string = JSON.stringify(json);
            sessionStorage.setItem(item, string);
        }

        function _getItem(item) {
            var string = sessionStorage.getItem(item);
            return JSON.parse(string);
        }

        function _clear() {
            sessionStorage.clear();
        }

        function _removeItem(item) {
            sessionStorage.removeItem(item);
        }

        return{
            setItem: function (item, json) {
                return _setItem(item, json);
            },
            getItem: function (item) {
                return _getItem(item);
            },
            removeItem: function (item) {
                return _removeItem(item);
            },
            clear: function () {
                return _clear();
            }
        }
    })();


    core.date = (function () {
        var _defaultFormat = "yyyy-mm-dd";
        function _now() {
            var date = new Date();
            var hours = date.getHours();
            var minuts = date.getMinutes();
            var seconds = date.getSeconds();
            hours = (hours < 10 ? '0' + hours : hours);
            minuts = (minuts < 10 ? '0' + minuts : minuts);
            seconds = (seconds < 10 ? '0' + seconds : seconds);

            var sDate = _format(date, _defaultFormat);
            var sHour = hours + ":" + minuts + ":" + seconds;

            return sDate + " " + sHour;
        }

        function _format(date, format) {
            var separator = (format.indexOf("/") > 0 ? '/' : '-');
            var posYear = format.indexOf("yyyy");
            var posMonth = format.indexOf("mm");
            var posDay = format.indexOf("dd");
            var sDate = "";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            month = (month < 10 ? '0' + month : month);
            day = (day < 10 ? '0' + day : day);

            if (posYear < posMonth && posYear < posDay) {
                if (posMonth < posDay) {
                    // yyyy/mm/dd
                    sDate = year + separator + month + separator + day;
                } else {
                    // yyyy/dd/mm
                    sDate = year + separator + day + separator + month;
                }
            } else {
                if (posYear > posMonth && posYear > posDay) {
                    if (posMonth < posDay) {
                        // mm/dd/yyyy
                        sDate = month + separator + day + separator + year;
                    } else {
                        // dd/mm/yyyy
                        sDate = day + separator + month + separator + year;
                    }
                } else {
                    if (posYear < posMonth) {
                        // dd/yyyy/mm
                        sDate = day + separator + year + separator + month;
                    } else {
                        // mm/yyyy/dd
                        sDate = month + separator + year + separator + day;
                    }
                }
            }

            return sDate;
        }

        function _getDate(sDate) {
            sDate = sDate.replace('-', '/');
            sDate = sDate.replace('-', '/');
            return new Date(sDate);
        }

        function _getDateFromFormat(sDate, format) {
            var separator = "/";
            var posYear = format.indexOf("yyyy");
            var posMonth = format.indexOf("mm");
            var posDay = format.indexOf("dd");
            var year = "";
            var month = "";
            var day = "";

            if (posYear < posMonth && posYear < posDay) {
                if (posMonth < posDay) {
                    // yyyy/mm/dd
                    year = sDate.substr(0, 4);
                    month = sDate.substr(5, 2);
                    day = sDate.substr(8, 2);
                } else {
                    // yyyy/dd/mm
                    year = sDate.substr(0, 4);
                    day = sDate.substr(5, 2);
                    month = sDate.substr(8, 2);
                }
            } else {
                if (posYear > posMonth && posYear > posDay) {
                    if (posMonth < posDay) {
                        // mm/dd/yyyy
                        month = sDate.substr(0, 2);
                        day = sDate.substr(3, 2);
                        year = sDate.substr(6, 4);
                    } else {
                        // dd/mm/yyyy
                        day = sDate.substr(0, 2);
                        month = sDate.substr(3, 2);
                        year = sDate.substr(6, 4);
                    }
                } else {
                    if (posYear < posMonth) {
                        // dd/yyyy/mm
                        day = sDate.substr(0, 2);
                        year = sDate.substr(3, 4);
                        month = sDate.substr(8, 2);
                    } else {
                        // mm/yyyy/dd
                        month = sDate.substr(0, 2);
                        year = sDate.substr(3, 4);
                        day = sDate.substr(8, 2);
                    }
                }
            }

            sDate = year + separator + month + separator + day;
            return _getDate(sDate);
        }

        function _getDateString(date) {
            return _format(date, _defaultFormat);
        }


        function _addDays(sDate, days) {
            var separator = (sDate.indexOf("/") > 0 ? '/' : '-');
            var date = _getDate(sDate);
            date.setDate(date.getDate() + days);
            sDate = _format(date, _defaultFormat);
            sDate = sDate.replace('-', separator); // Firefox sólo reemplaza una vez
            sDate = sDate.replace('-', separator); // Firefox sólo reemplaza una vez
            return sDate;
        }

        function _addMonths(sDate, months) {
            var separator = (sDate.indexOf("/") > 0 ? '/' : '-');
            var date = _getDate(sDate);
            date.setMonth(date.getMonth() + months);
            sDate = _format(date, _defaultFormat);
            sDate = sDate.replace('-', separator); // Firefox sólo reemplaza una vez
            sDate = sDate.replace('-', separator); // Firefox sólo reemplaza una vez
            return sDate;
        }

        function _firstDay(sDate) {
            var separator = (sDate.indexOf("/") > 0 ? '/' : '-');
            var sFirstDay = _getDateString(_getDate(sDate)).substr(0, 8) + "01";
            sFirstDay = sFirstDay.replace('-', separator);
            sFirstDay = sFirstDay.replace('-', separator);
            return sFirstDay;
        }

        function _lastDay(sDate) {
            var sLastDay = _addMonths(sDate, 1);
            var sFirstDay = _firstDay(sLastDay);
            sLastDay = _addDays(sFirstDay, -1);
            return sLastDay;
        }

        function _diffDay(sDate1, sDate2) {
            var date1 = _getDate(sDate1);
            var date2 = _getDate(sDate2);
            var milliseconds = (date2 - date1);
            return Math.abs(parseInt((milliseconds / (1000 * 60 * 60 * 24))));
        }

        function _diffMonth(sDate1, sDate2) {
            var date1 = _getDate(sDate1);
            var date2 = _getDate(sDate2);
            var nMeses = Math.abs((date2.getMonth() - date1.getMonth()) + (12 * (date2.getFullYear() - date1.getFullYear())));
            return nMeses;
        }

        function _diffMonthIncomplete(sDate1, sDate2) {
            var date1 = _getDate(sDate1);
            var date2 = _getDate(sDate2);
            var months = Math.abs((date2.getMonth() - date1.getMonth()) + (12 * (date2.getFullYear() - date1.getFullYear())));

            if (date2.getDate() > date1.getDate()) {
                months++;
            }

            return months;
        }

        function _isDateNet(value) {
            if (typeof (value) == "string") {
                return (value.indexOf('/Date(') != -1);
            }
            return false;
        }

        function _fromDotNet(strMilliseconds) {
            strMilliseconds = strMilliseconds.replace('/Date(', '');
            strMilliseconds = strMilliseconds.replace(')/', '');
            strMilliseconds = parseInt(strMilliseconds);
            return _format(new Date(strMilliseconds), _defaultFormat);
        }

        return{
            now: function () {
                return _now();
            },
            today: function () {
                return _now().substr(0, 10);
            },
            hour: function () {
                return _now().substr(11);
            },
            format: function (date, format) {
                return _format(date, format);
            },
            getDate: function (sDate) {
                // yyyy-mm-dd
                return _getDate(sDate);
            },
            getDateFromFormat: function (sDate, format) {
                return _getDateFromFormat(sDate, format);
            },
            getDateString: function (date) {
                return _getDateString(date);
            },
            addDays: function (sDate, days) {
                // yyyy-mm-dd / number
                return _addDays(sDate, days);
            },
            addMonths: function (sDate, months) {
                // yyyy-mm-dd / number
                return _addMonths(sDate, months);
            },
            firstDay: function (sDate) {
                // yyyy-mm-dd / yyyy/mm/dd
                return _firstDay(sDate);
            },
            lastDay: function (sDate) {
                // yyyy-mm-dd / yyyy/mm/dd
                return _lastDay(sDate);
            },
            diffDay: function (sDate1, sDate2) {
                // yyyy-mm-dd / yyyy/mm/dd
                return _diffDay(sDate1, sDate2);
            },
            diffMonth: function (sDate1, sDate2) {
                return _diffMonth(sDate1, sDate2);
            },
            diffMonthIncomplete: function (sDate1, sDate2) {
                return _diffMonthIncomplete(sDate1, sDate2);
            },
            isDateNet: function (value) {
                return _isDateNet(value);
            },
            fromDotNet: function (strMilliseconds) {
                return _fromDotNet(strMilliseconds);
            }
        }
    })();

    this.Core = core;
})(jQuery);


(function ($, core) {
    var app = {};

    app.hoteles = (function () {
        function _listar() {
            var url = "api/hoteles.htm";
            var data = {};
            var posting = $.post(url, data);

            posting.done(function (response) {
                var hoteles = JSON.parse(response);

                var contenido = document.getElementById('contenido_hoteles');
                var template = document.getElementById('template_hoteles').innerHTML;
                var html = Mustache.to_html(template, {'hoteles': hoteles});
                contenido.innerHTML = html;
                core.storage.setItem('hoteles', hoteles);
            });
        }

        return{
            listar: function () {
                return _listar();
            }
        }
    })();

    app.habitaciones = (function () {
        function _listar(idHotel) {
            var url = "api/habitaciones.htm";
            var data = {'idhotel': idHotel};
            var posting = $.post(url, data);
            var hoteles = core.storage.getItem('hoteles');
            var hotel;
            hoteles.forEach(function (item) {
                if (item.id == idHotel) {
                    hotel = item;
                }
            });
            core.storage.setItem('hotel', hotel);


            posting.done(function (response) {
                var habitaciones = JSON.parse(response);
                var contenido = document.getElementById('contenido_habitaciones');
                var template = document.getElementById('template_habitaciones').innerHTML;
                var html = Mustache.to_html(template, {'habitaciones': habitaciones});
                contenido.innerHTML = html;
                core.storage.setItem('habitaciones', habitaciones);
            });
        }

        function _seleccionar(id) {
            var habitaciones = core.storage.getItem('habitaciones');
            var habitacion;
            habitaciones.forEach(function (item) {
                if (item.id == id) {
                    habitacion = item;
                }

                core.storage.setItem('habitacion', habitacion);
            });
        }

        function _completar() {
            var hotel = core.storage.getItem('hotel');
            var habitacion = core.storage.getItem('habitacion');

            var datosReserva = {
                'fecha': $("#txt_fecha").val(),
                'nombre': $("#txt_nombre").val(),
                'email': $("#txt_email").val(),
                'habitacion': habitacion,
                'hotel': hotel
            };

            core.storage.setItem('datosReserva', datosReserva);

            $('#modal_datos').modal('hide');
            $("#txt_fecha").val("");
            $("#txt_nombre").val("");
            $("#txt_email").val("");

            location.href = "pagar.htm";
        }

        return{
            listar: function (idHotel) {
                return _listar(idHotel);
            },
            seleccionar: function (id) {
                return _seleccionar(id);
            },
            completar: function () {
                return _completar();
            }
        }
    })();

    app.reserva = (function () {
        function _pintarReserva() {
            var datosReserva = core.storage.getItem('datosReserva');
            var contenido = document.getElementById('contenido_reserva');
            var template = document.getElementById('template_reserva').innerHTML;
            var html = Mustache.to_html(template, {'reserva': datosReserva});
            contenido.innerHTML = html;
        }

        function _pagar() {
            var datosReserva = core.storage.getItem('datosReserva');

            var apikeyculqi = "pk_test_ZNzw06Jrmtf4n0sL"; // icalapuja
            Culqi.codigoComercio = apikeyculqi;
            var culqi_negocio = 'Wasi';
            var culqi_orden = '';
            ;
            var culqi_moneda = 'USD';
            var culqi_monto = datosReserva.habitacion.precio + '00';
            var culqi_descripcion = datosReserva.hotel.name + ' - ' + datosReserva.habitacion.name;
            var culqi_telefono = 999999999;
            var culqi_direccion = "Avenida Lima 123";
            var culqi_usuario = '71702955';
            var culqi_ciudad = 'Lima';
            var culqi_pais = 'PE';

            Culqi.configurar({
                nombre: culqi_negocio,
                orden: culqi_orden,
                moneda: culqi_moneda,
                descripcion: culqi_descripcion,
                monto: culqi_monto
            });

            Culqi.abrir();
        }
        
        function _reservar(){
            var datosReserva = core.storage.getItem('datosReserva');
            var url = "api/reservar.htm";
            var reserva = {
                'id':0,
                'idhabitacion':datosReserva.habitacion.id,
                'fecha':datosReserva.fecha,
                'precio':datosReserva.habitacion.precio,
                'nombre':datosReserva.nombre,
                'email':datosReserva.email,
                'tarjeta':''
            };
            var data = {'reserva': JSON.stringify(reserva)};
            var posting = $.post(url, data);
            
            posting.done(function (response) {
                console.log("response");
                console.log(response);
            });
        }

        return{
            pintarReserva: function () {
                return _pintarReserva();
            },
            pagar: function () {
                return _pagar();
            },
            reservar: function(){
                return _reservar();
            }
        }
    })();

    this.App = app;
})(jQuery, Core);


