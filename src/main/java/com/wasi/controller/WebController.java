package com.wasi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import com.wasi.model.Hotel;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping(value="/")
public class WebController {
    @RequestMapping(value="index", method = RequestMethod.GET)
    public ModelAndView home(){
        ModelAndView view = new ModelAndView("index");
        return view;
    }
    
    @RequestMapping(value="hotel", method = RequestMethod.GET)
    public ModelAndView hotel(@RequestParam(value="id", defaultValue="0") String ide){
        int id = Integer.parseInt(ide);
        HotelController controller = new HotelController();
        Hotel hotel = controller.getById(id);
        ModelAndView view = new ModelAndView("hotel");
        view.addObject("hotel", hotel);
        return view;
    }
    
    @RequestMapping(value="pagar", method = RequestMethod.GET)
    public ModelAndView pagar(){
        ModelAndView view = new ModelAndView("pagar");
        return view;
    }
    
    @RequestMapping(value="reserva", method = RequestMethod.GET)
    public ModelAndView reserva(){
        ModelAndView view = new ModelAndView("reserva");
        return view;
    }
}
