package com.wasi.dao;

import com.wasi.model.Habitacion;
import java.util.List;
import org.hibernate.Session;


public class HabitacionDao {
    Session session = HibernateUtil.getSessionFactory().openSession();
    
    public void add(Habitacion entity){
    
    }
    
    public void update(Habitacion entity){
    
    }
    
    public Habitacion getById(int id){
        return (Habitacion) session.get(Habitacion.class,id);
    }
    
    public List<Habitacion> getAll(){
        List<Habitacion> list = session.createCriteria(Habitacion.class).list();
        return list;
    }
}
