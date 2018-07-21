package com.wasi.controller;

import com.wasi.dao.HabitacionDao;
import com.wasi.model.Habitacion;
import java.util.List;

public class HabitacionController {
    HabitacionDao dao = new HabitacionDao();
    
    public void add(Habitacion entity){
        dao.add(entity);
    }
    
    public void update(Habitacion entity){
        dao.update(entity);
    }
    
    public Habitacion getById(int id){
        return dao.getById(id);
    }
    
    public List<Habitacion> getAll(){
        return dao.getAll();
    }
}
