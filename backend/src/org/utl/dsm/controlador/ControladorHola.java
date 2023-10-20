package org.utl.dsm.controlador;

public class ControladorHola {
    
    public static String calcularGeneracion(String nombre, int año) {
        String mensaje = "";
        if (año >= 2016) {
            mensaje = nombre + "sin clasificar";
        } else if (año <= 2015) {
            mensaje = nombre + " perteneces a la generación Centennials";
        } else if (año <= 1995) {
            mensaje = nombre + " perteneces a la generación Millenials";
        } else if (año <= 1976) {
            mensaje = nombre + " perteneces a la generación X";
        } else if (año <= 1964) {
            mensaje = nombre + " perteneces a la generación Baby Boomers";
        } else {
            mensaje = nombre + " perteneces a la generacion Tradicional";
        }
        return mensaje;
    }
    
    public static String calcularZodiaco(String nombre, int dia, int mes) {
        String mensaje = "";
        if ((mes == 3 && dia > 20) || (mes == 4 && dia < 20))
            mensaje = nombre + " eres Aries";
        else if ((mes == 4 && dia > 19) || (mes == 5 && dia < 21))
            mensaje = nombre + " eres Tauro";
        else if ((mes == 5 && dia > 20) || (mes == 6 && dia < 21))
            mensaje = nombre + " eres Géminis";
        else if ((mes == 6 && dia > 20) || (mes == 7 && dia < 23))
            mensaje = nombre + " eres Cáncer";
        else if ((mes == 7 && dia > 22) || (mes == 8 && dia < 23))
            mensaje = nombre + " eres Leo";
        else if ((mes == 8 && dia > 22) || (mes == 9 && dia < 23))
            mensaje = nombre + " eres Virgo";
        else if ((mes == 9 && dia > 22) || (mes == 10 && dia < 23))
            mensaje = nombre + " eres Libra";
        else if ((mes == 10 && dia > 22) || (mes == 11 && dia < 22))
            mensaje = nombre + " eres Escorpio";
        else if ((mes == 11 && dia > 21) || (mes == 12 && dia < 22))
            mensaje = nombre + " eres Sagitario";
        else if ((mes == 12 && dia < 21) || (mes == 1 && dia < 20))
            mensaje = nombre + " eres Capricornio";
        else if ((mes == 1 && dia > 19) || (mes == 2 && dia < 19))
            mensaje = nombre + " eres Acuario";
        else if ((mes == 2 && dia > 18) || (mes == 3 && dia < 21))
            mensaje = nombre + " eres Piscis";
        else
            mensaje = " no podemos especificar tu generación";
        return mensaje;
    }
    
}
