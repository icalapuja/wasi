package com.wasi.controller;

import com.wasi.dao.ReservaDao;
import com.wasi.model.Reserva;
import java.util.List;


public class ReservaController {
    ReservaDao dao = new ReservaDao();
    
    public void add(Reserva entity){
        dao.add(entity);
    }
    
    public void update(Reserva entity){
        dao.update(entity);
    }
    
    public Reserva getById(int id){
        return dao.getById(id);
    }
    
    public List<Reserva> getAll(){
        return dao.getAll();
    }
}
