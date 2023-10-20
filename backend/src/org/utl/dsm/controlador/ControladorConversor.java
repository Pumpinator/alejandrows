package org.utl.dsm.controlador;

public class ControladorConversor {

    public static String convertirBinario(int cantidad) {
        String total;
        if (cantidad == 0) {
            total = "0";
        } else if (cantidad == 1) {
            total = "1";
        } else {
            total = convertirBinario(cantidad / 2) + (cantidad % 2);
        }
        return total;
    }
    
    public static double convertirDistancia(int desde, int hacia, double cantidad) {
        double total;
        double[] factores = {1, 1000, 100000, 1000000, 1000000000, 1000000000000.0, 0.621371, 1.09361, 3280.84,
            39370.1, 0.539957};
        total = cantidad * factores[Math.abs(desde - hacia)];
        return total;
    }

    public static double convertirTemperatura(int desde, int hacia, double cantidad) {
        double resultado = 0.0;
        if (desde == hacia) {
            resultado = cantidad;
        } else {
            switch (desde) {
                case 1:
                    switch (hacia) {
                        case 2:
                            resultado = (cantidad * 9 / 5) + 32;
                            break;
                        case 3:
                            resultado = cantidad + 273.15;
                            break;
                    }
                    break;
                case 2:
                    switch (hacia) {
                        case 1:
                            resultado = (cantidad - 32) * 5 / 9;
                            break;
                        case 3:
                            resultado = (cantidad - 32) * 5 / 9 + 273.15;
                            break;
                    }
                    break;
                case 3:
                    switch (hacia) {
                        case 1:
                            resultado = cantidad - 273.15;
                            break;
                        case 2:
                            resultado = (cantidad - 273.15) * 9 / 5 + 32;
                            break;
                    }
                    break;
            }
        }

        return resultado;

    }
}
