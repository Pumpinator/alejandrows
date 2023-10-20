/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm.rest;

import org.utl.dsm.modelo.ModeloCurp;
import org.utl.dsm.controlador.ControladorCurp;

import com.google.gson.Gson;

import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.FormParam;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;

@Path("/curp")
public class RestCurp {
    
    @POST
    @Path("/calcular")
    @Produces("application/json")
    public Response calcular(@FormParam("persona") @DefaultValue("") String persona) {
        Gson gson = new Gson();
        
        String response = "{\"curp\":\"" + ControladorCurp.calcularCurp(gson.fromJson(persona, ModeloCurp.class))
                + "\", \"persona\":" + gson.toJson(gson.fromJson(persona, ModeloCurp.class))
                + "}";

        /*
         * String response = "{\"curp\":\"" + Curp.calcular(gson.fromJson(persona,
         * Persona.class))
         * + "\",\"nombre\":\""
         * + gson.fromJson(persona, Persona.class).getNombre()
         * + "\",\"apellidoPaterno\":\""
         * + gson.fromJson(persona, Persona.class).getApellidoPaterno()
         * + "\",\"apellidoMaterno\":\""
         * + gson.fromJson(persona, Persona.class).getApellidoMaterno()
         * + "\",\"fechaNacimiento\":\""
         * + gson.fromJson(persona, Persona.class).getFechaNacimiento()
         * + "\",\"sexo\":\""
         * + gson.fromJson(persona, Persona.class).getSexo()
         * + "\",\"estado\":\""
         * + gson.fromJson(persona, Persona.class).getEstado()
         * + "\"}";
         * 
         * return Response.ok(res).build();
         * }
         */

        return Response.ok(response).build();
    }
    
}
