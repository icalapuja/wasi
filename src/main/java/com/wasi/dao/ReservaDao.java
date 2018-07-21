package com.wasi.dao;

import com.wasi.model.Reserva;
import java.util.List;
import org.hibernate.Session;

public class ReservaDao {

    Session session = HibernateUtil.getSessionFactory().openSession();

    public void add(Reserva entity) {
        session.beginTransaction();
        session.save(entity);
        session.getTransaction().commit();
    }

    public void update(Reserva entity) {
        session.beginTransaction();
        session.update(entity);
        session.getTransaction().commit();
    }

    public Reserva getById(int id) {
        return (Reserva) session.get(Reserva.class, id);
    }

    public List<Reserva> getAll() {
        List<Reserva> list = session.createCriteria(Reserva.class).list();
        return list;
    }
}
