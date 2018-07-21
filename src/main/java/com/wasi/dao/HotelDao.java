package com.wasi.dao;

import java.util.List;
import com.wasi.model.Hotel;
import org.hibernate.Session;

public class HotelDao {
    Session session = HibernateUtil.getSessionFactory().openSession();
    
    public void add(Hotel entity){
    
    }
    
    public void update(Hotel entity){
    
    }
    
    public Hotel getById(int id){
        return (Hotel) session.get(Hotel.class,id);
    }
    
    public List<Hotel> getAll(){
        List<Hotel> list = session.createCriteria(Hotel.class).list();
        return list;
    }
}
