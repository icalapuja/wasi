package com.wasi.controller;

import com.google.gson.Gson;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import com.wasi.model.*;
import java.util.ArrayList;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping(value = "api")
public class ApiRestController {

    private Gson gson = new Gson();

    @RequestMapping(value = "/hoteles", method = RequestMethod.POST)
    public String getHoteles(HttpServletResponse response) {
        response.setContentType("text/html; charset=UTF-8");
        String json = "";
        try {
            List<Hotel> lista = new ArrayList<Hotel>();
            HotelController controller = new HotelController();
            lista = controller.getAll();

            json = gson.toJson(lista);
        } catch (Exception e) {
            json = "";
        }

        return json;
    }

    @RequestMapping(value = "/habitaciones")
    public String getHabitaciones(@RequestParam(value="idhotel", defaultValue="0") String ideHotel,HttpServletResponse response) {
        response.setContentType("text/html; charset=UTF-8");
        String json = "";
        try {
            List<Habitacion> lista = new ArrayList<Habitacion>();
            int idHotel = Integer.parseInt(ideHotel);
            HabitacionController controller = new HabitacionController();
            List<Habitacion> listaTotal = controller.getAll();
            
            for(Habitacion habitacion :listaTotal){
                if(habitacion.getIdhotel()== idHotel){
                    lista.add(habitacion);
                }
            }
            
            json = gson.toJson(lista);
        } catch (Exception e) {
            json = "";
        }
        return json;
    }
    
    @RequestMapping(value = "/reservar", method = RequestMethod.POST)
    public String saveReserva(@RequestParam(value="reserva", defaultValue="") String datos,HttpServletResponse response) {
        response.setContentType("text/html; charset=UTF-8");
        String json = "";
        try {
            Reserva reserva = gson.fromJson(datos, Reserva.class);
            ReservaController controller = new ReservaController();
            controller.add(reserva);
            json = gson.toJson(reserva);
        } catch (Exception e) {
            json = "";
        }
        return json;
    }
    
}
