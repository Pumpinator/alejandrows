package org.utl.dsm.controlador;

import java.awt.image.BufferedImage;
import java.io.IOException;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.Writer;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import net.sourceforge.jbarcodebean.JBarcodeBean;
import net.sourceforge.jbarcodebean.model.Code128;
import net.sourceforge.jbarcodebean.model.Code39;
import net.sourceforge.jbarcodebean.model.Code93;

public class ControladorCodigo {

    static JBarcodeBean codigo = new JBarcodeBean();
    static Writer writer = new QRCodeWriter();

    public static BufferedImage generar128(String texto) throws IOException {
        codigo.setCodeType(new Code128());
        codigo.setCode(texto);
        codigo.setCheckDigit(true);

        BufferedImage imagen = codigo.draw(new BufferedImage(200, 150, BufferedImage.TYPE_INT_RGB));

        return imagen;
    }

    public static BufferedImage generar93(String texto) throws IOException {
        codigo.setCodeType(new Code93());
        codigo.setCode(texto);
        codigo.setCheckDigit(true);

        BufferedImage imagen = codigo.draw(new BufferedImage(200, 150, BufferedImage.TYPE_INT_RGB));

        return imagen;
    }

    public static BufferedImage generar39(String texto) throws IOException {
        codigo.setCodeType(new Code39());
        codigo.setCode(texto);
        codigo.setCheckDigit(true);

        BufferedImage imagen = codigo.draw(new BufferedImage(200, 150, BufferedImage.TYPE_INT_RGB));

        return imagen;
    }

    public static BufferedImage generarQR(String texto) throws IOException, WriterException {
        int ancho = 400;
        int alto = 400;

        BufferedImage imagen = new BufferedImage(alto, ancho, BufferedImage.TYPE_INT_RGB);
        BitMatrix bitMatrix;

        bitMatrix = writer.encode(texto, BarcodeFormat.QR_CODE, alto, ancho);

        for (int x = 0; x < alto; x++) {
            for (int y = 0; y < ancho; y++) {
                int indice = bitMatrix.get(x, y) ? 0 : 1 & 0xff;
                imagen.setRGB(x, y, (indice == 0 ? 0 : 0xffffff));
            }
        }

        return imagen;
    }

}
