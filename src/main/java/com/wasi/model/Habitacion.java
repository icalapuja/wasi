package com.wasi.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "habitaciones")
public class Habitacion {
    @Id
    private int id;
    private int idhotel;
    private String name;
    private String descripcion;
    private String imagen;
    private String frame;
    private Double precio;
    private Boolean modal360;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdhotel() {
        return idhotel;
    }

    public void setIdhotel(int idhotel) {
        this.idhotel = idhotel;
    }


    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    
    

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getFrame() {
        return frame;
    }

    public void setFrame(String frame) {
        this.frame = frame;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Boolean getModal360() {
        return modal360;
    }

    public void setModal360(Boolean modal360) {
        this.modal360 = modal360;
    }
    
    
}
