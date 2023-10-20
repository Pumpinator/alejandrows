package org.utl.dsm.controlador;

import org.utl.dsm.modelo.ModeloCurp;

public class ControladorCurp {

    // Persona persona = new Persona("Alejandro", "Delgado", "Cardona",
    // "2003-04-23", "H", "GT") => "DECA030423HGTLRLA8"
    public static String calcularCurp(ModeloCurp mc) {

        mc.setNombre(normalizar(mc.getNombre()));
        mc.setApellidoPaterno(normalizar(mc.getApellidoPaterno()));
        mc.setApellidoMaterno(normalizar(mc.getApellidoMaterno()));
        mc.setFechaNacimiento(mc.getFechaNacimiento());
        mc.setSexo(mc.getSexo());
        mc.setEstado(mc.getEstado());

        String curp = ControladorCurp.particionar1(mc.getNombre(), mc.getApellidoPaterno(), mc.getApellidoMaterno())
                + ControladorCurp.particionar2(mc.getFechaNacimiento())
                + ControladorCurp.particionar3(mc.getSexo(), mc.getEstado())
                + ControladorCurp.particionar4(mc.getNombre(), mc.getApellidoPaterno(), mc.getApellidoMaterno())
                + ControladorCurp.particionar5(mc.getFechaNacimiento());

        return curp;
    }

    // CREAMOS UN MÉTODO PARA NORMALIZAR CADENAS (QUEREMOS NORMALIZAR EL NOMBRE
    // COMPLETO DE LA PERSONA)
    public static String normalizar(String cadena) {
        cadena = cadena.toUpperCase();
        cadena = cadena.replace("Á", "A");
        cadena = cadena.replace("É", "E");
        cadena = cadena.replace("Í", "I");
        cadena = cadena.replace("Ó", "O");
        cadena = cadena.replace("Ú", "U");
        cadena = cadena.replace("Ñ", "N");
        return cadena;
    }

    // ALEJANDRO, DELGADO, CARDONA => DECA
    public static String particionar1(String nombre, String apellidoPaterno, String apellidoMaterno) {
        String parte = "";

        parte += apellidoPaterno.substring(0, 1);
        for (int i = 1; i < apellidoPaterno.length(); i++) {
            if (apellidoPaterno.charAt(i) == 'A'
                    || apellidoPaterno.charAt(i) == 'E'
                    || apellidoPaterno.charAt(i) == 'I'
                    || apellidoPaterno.charAt(i) == 'O'
                    || apellidoPaterno.charAt(i) == 'U') {
                parte += apellidoPaterno.charAt(i);
                break;
            }
        }

        parte += apellidoMaterno.substring(0, 1);

        if (nombre.contains("JOSE")) {
            parte += nombre.substring(5, 6);
        } else if (nombre.contains("MARIA")) {
            parte += nombre.substring(6, 7);
        } else {
            parte += nombre.substring(0, 1);
        }

        return verificarPalabra(parte);
    }

    // 2003-04-23 => 030423
    public static String particionar2(String fechaNacimiento) {
        String parte = "";

        parte += fechaNacimiento.substring(2, 4);
        parte += fechaNacimiento.substring(5, 7);
        parte += fechaNacimiento.substring(8, 10);

        return parte;
    }

    // H, GT => HGT
    public static String particionar3(String sexo, String estado) {
        String parte = "";

        parte += sexo;
        parte += estado;

        return parte;
    }

    // ALEJANDRO, DELGADO, CARDONA => LRL
    public static String particionar4(String nombre, String apellidoPaterno, String apellidoMaterno) {
        String parte = "";

        for (int i = 1; i < nombre.length(); i++) {
            if (nombre.charAt(i) != 'A'
                    && nombre.charAt(i) != 'E'
                    && nombre.charAt(i) != 'I'
                    && nombre.charAt(i) != 'O'
                    && nombre.charAt(i) != 'U') {
                parte += nombre.charAt(i);
                break;
            }
        }

        for (int i = 1; i < apellidoMaterno.length(); i++) {
            if (apellidoMaterno.charAt(i) != 'A'
                    && apellidoMaterno.charAt(i) != 'E'
                    && apellidoMaterno.charAt(i) != 'I'
                    && apellidoMaterno.charAt(i) != 'O'
                    && apellidoMaterno.charAt(i) != 'U') {
                parte += apellidoMaterno.charAt(i);
                break;
            }
        }

        for (int i = 1; i < apellidoPaterno.length(); i++) {
            if (apellidoPaterno.charAt(i) != 'A'
                    && apellidoPaterno.charAt(i) != 'E'
                    && apellidoPaterno.charAt(i) != 'I'
                    && apellidoPaterno.charAt(i) != 'O'
                    && apellidoPaterno.charAt(i) != 'U') {
                parte += apellidoPaterno.charAt(i);
                break;
            }
        }

        return parte;
    }

    public static String particionar5(String fechaNacimiento) {
        String parte = "";

        if (Integer.parseInt(fechaNacimiento.substring(0, 4)) < 2000) {
            parte += Math.round(Math.random() * 9);
            parte += Math.round(Math.random() * 9); // GENERAMOS DOS NÚMERO ALEATORIOS ENTRE EL 1 Y EL 9
        } else {
            char letra = (char) ((Math.random() * 26) + 'A'); // GENERAMOS UN NÚMERO ALEATORIO SEGÚN EL ABECEDARIO
            parte += letra; // Y LE SUMAMOS 'A' MAYÚSCULA PARA GENERAR UNA LETRA ALEATORIA DEL ABECEDARIO
            parte += Math.round(Math.random() * 9);
        }

        return parte;
    }

    public static String verificarPalabra(String parte) {
        if (parte.equals("BUEI") || parte.equals("BUEY") || parte.equals("CACA") || parte.equals("CACO")
                || parte.equals("CAGA")
                || parte.equals("CAGO") || parte.equals("CAKA") || parte.equals("CAKO") || parte.equals("COGE")
                || parte.equals("COJA")
                || parte.equals("COJE") || parte.equals("COJI") || parte.equals("COJO") || parte.equals("CULO")
                || parte.equals("FETO")
                || parte.equals("GUEY") || parte.equals("JOTO") || parte.equals("KACA") || parte.equals("KACO")
                || parte.equals("KAGA")
                || parte.equals("KAGO") || parte.equals("KOGE") || parte.equals("KOJO") || parte.equals("KAKA")
                || parte.equals("KULO")
                || parte.equals("MAME") || parte.equals("MAMO") || parte.equals("MEAR") || parte.equals("MEAS")
                || parte.equals("MEON")
                || parte.equals("MION") || parte.equals("MOCO") || parte.equals("MULA") || parte.equals("PEDA")
                || parte.equals("PEDO")
                || parte.equals("PENE") || parte.equals("PUTA") || parte.equals("PUTO") || parte.equals("QULO")
                || parte.equals("RATA")
                || parte.equals("RUIN")) {
            return parte.substring(0, 3) + "X";
        }

        return parte;
    }

}
