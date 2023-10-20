/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm.rest;

import org.utl.dsm.controlador.ControladorConversor;

import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;

@Path("/conversor")
public class RestConversor {

    @GET
    @Path("/binario")
    @Produces("application/json")
    public Response convertirBinario(@QueryParam("entero") @DefaultValue("0") int entero) {
        String binario = ControladorConversor.convertirBinario(entero);
        String response = "{\"binario\":\"" + binario
                + "\",\"entero\":\"" + entero
                + "\"}";
        return Response.ok(response).build();
    }

    @GET
    @Path("/distancia")
    @Produces("application/json")
    public Response convertirDistancia(@QueryParam("de") @DefaultValue("0") int de,
            @QueryParam("hacia") @DefaultValue("0") int hacia,
            @QueryParam("entero") @DefaultValue("0") double entero) {
        Double distancia = ControladorConversor.convertirDistancia(de, hacia, entero);
        String response = "{\"distancia\":\"" + distancia + "\"}";
        return Response.ok(response).build();
    }

    @GET
    @Path("/temperatura")
    @Produces("application/json")
    public Response convertirTemperatura(@QueryParam("de") @DefaultValue("0") int de,
            @QueryParam("hacia") @DefaultValue("0") int hacia,
            @QueryParam("entero") @DefaultValue("0") int entero) {
        Double temperatura = ControladorConversor.convertirTemperatura(de, hacia, entero);
        String response = "{\"temperatura\":\"" + temperatura + "\"}";
        return Response.ok(response).build();
    }

}
