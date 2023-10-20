package org.utl.dsm.rest;

import org.utl.dsm.controlador.ControladorHola;

import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;

@Path("/hola")
public class RestHola {

    @GET
    @Path("/saludar")
    @Produces("application/json")
    public Response saludar() {
        String response = "{\"response\":\"Hola rest\"}";
        return Response.ok(response).build();
    }

    @GET
    @Path("/saludarnombre")
    @Produces("application/json")
    public Response saludarNombre(@QueryParam("nombre") @DefaultValue("") String nombre) {
        String response = "{\"response\":\"Hola " + nombre + "\"}";
        return Response.ok(response).build();
    }

    @GET
    @Path("/saludargeneracion")
    @Produces("application/json")
    public Response saludarGeneracion(@QueryParam("nombre") @DefaultValue("") String nombre,
            @QueryParam("año") @DefaultValue("0") int año) {
        String mensaje = ControladorHola.calcularGeneracion(nombre, año);
        String response = "{\"response\":\"Hola " + mensaje + "\"}";
        return Response.ok(response).build();
    }

    @GET
    @Path("/saludarzodiaco")
    @Produces("application/json")
    public Response saludarZodiaco(@QueryParam("nombre") @DefaultValue("") String nombre,
            @QueryParam("año") @DefaultValue("0") int dia,
            @QueryParam("mes") @DefaultValue("0") int mes) {
        String mensaje = ControladorHola.calcularZodiaco(nombre, dia, mes);
        String response = "{\"response\":\"Hola " + mensaje + "\"}";
        return Response.ok(response).build();
    }

}
