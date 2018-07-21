package com.wasi.controller;

import com.wasi.model.Hotel;
import com.wasi.dao.HotelDao;
import java.util.List;

public class HotelController {
    HotelDao dao = new HotelDao();
    
    public void add(Hotel entity){
        dao.add(entity);
    }
    
    public void update(Hotel entity){
        dao.update(entity);
    }
    
    public Hotel getById(int id){
        return dao.getById(id);
    }
    
    public List<Hotel> getAll(){
        return dao.getAll();
    }
}
