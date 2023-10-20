/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm.rest;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

import com.google.zxing.WriterException;

import javax.imageio.ImageIO;

import org.utl.dsm.controlador.ControladorCodigo;

import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;

@Path("/codigo")
public class RestCodigo {

    @GET
    @Path("/generar128")
    @Produces("image/jpg")
    public Response generar128(@QueryParam("texto") @DefaultValue("") String texto) throws IOException {
        BufferedImage codigo = ControladorCodigo.generar128(texto);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(codigo, "jpg", baos);
        byte[] dataImagen = baos.toByteArray();
        return Response.ok(new ByteArrayInputStream(dataImagen)).build();
    }

    @GET
    @Path("/generar93")
    @Produces("image/jpg")
    public Response generar93(@QueryParam("texto") @DefaultValue("") String texto) throws IOException {
        BufferedImage codigo = ControladorCodigo.generar39(texto);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(codigo, "jpg", baos);
        byte[] dataImagen = baos.toByteArray();
        return Response.ok(new ByteArrayInputStream(dataImagen)).build();
    }

    @GET
    @Path("/generar39")
    @Produces("image/jpg")
    public Response generar39(@QueryParam("texto") @DefaultValue("") String texto) throws IOException {
        BufferedImage codigo = ControladorCodigo.generar39(texto);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(codigo, "jpg", baos);
        byte[] dataImagen = baos.toByteArray();
        return Response.ok(new ByteArrayInputStream(dataImagen)).build();
    }

    @GET
    @Path("/generarQR")
    @Produces("image/jpg")
    public Response generarQR(@QueryParam("texto") @DefaultValue("") String texto) throws IOException, WriterException {
        BufferedImage codigo = ControladorCodigo.generarQR(texto);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(codigo, "jpg", baos);
        byte[] dataImagen = baos.toByteArray();
        return Response.ok(new ByteArrayInputStream(dataImagen)).build();
    }

}
