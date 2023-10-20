function exchange() {
    let hacia = document.getElementById("selectHacia").selectedIndex;
    let cantidad = document.getElementById("inputCantidad").value;

    const imgDe = document.getElementById("imgDe");
    const imgHacia = document.getElementById("imgHacia");

    let api = "http://api.exchangeratesapi.io/v1/latest?access_key=ebc995b72638558247ab2ee31ddfe2f0&symbols=MXN,USD,GBP,BTC";

    fetch(api).then(response => response.json()).then(response => {
        const mxn = response.rates.MXN;
        const usd = response.rates.USD;
        const gbp = response.rates.GBP;
        const btc = response.rates.BTC;
        switch (hacia) {
            case 1:
                imgHacia.src = "gui/img/Mexico.png";
                document.getElementById("txtCambio").innerHTML = (mxn * cantidad) + " MXN";
                break;
            case 2:
                imgHacia.src = "gui/img/United_States.png";
                document.getElementById("txtCambio").innerHTML = (usd * cantidad) + " USD";
                break;
            case 3:
                imgHacia.src = "gui/img/Europe.PNG";
                document.getElementById("txtCambio").innerHTML = cantidad + " EUR";
                break;
            case 4:
                imgHacia.src = "gui/img/United_Kingdom.png";
                document.getElementById("txtCambio").innerHTML = (gbp * cantidad) + " GBP";
                break;
            case 5:
                imgHacia.src = "gui/img/Bitcoin.png";
                document.getElementById("txtCambio").innerHTML = (btc * cantidad) + " BTC";
                break;
            default:
                imgHacia.src = "gui/img/Unknown.png";
                document.getElementById("txtCambio").innerHTML = cantidad + " EUR";
                break;
        }
    });
}
