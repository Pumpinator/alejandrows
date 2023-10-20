var ui;
var map;
var mapContainer = document.getElementById("mapa4");
var routeInstructionsContainer = document.getElementById("panel");

function cargarMapa1() {
    //Paso 1: Hay que inicializar la comunicación con el API, mediante el objeto platform
    // Cada quien coloca su propia APIKEY 
    var platform = new H.service.Platform({
        apikey: 'KPido0Xux_1pUNoL6_o7nRbJ5CZy3QKxhw921m1J4D4'
    });
    var defaultLayers = platform.createDefaultLayers();

    //Paso 2: Se inicializa y crea el objeto map; el cual centras, en este caso sobre CDMX
    // y tiene un zoom de lo amplio que se quiera la vista del mapa
    var map = new H.Map(document.getElementById('mapa1'),
        defaultLayers.vector.normal.map, {
        center: { lat: 19.432608, lng: -99.133209 },
        zoom: 8,
        pixelRatio: window.devicePixelRatio || 1
    });
    // Se agrega un escucha para permitir el cambio de tamaño del mapa
    window.addEventListener('resize', () => map.getViewPort().resize());

    //Paso 3: Se hace el mapa interactivo
    // Se habilitan los evento en el mapa >MapEvents 
    // El objeto Behavior implementa las interacciones por defecto (incluso los eventos en dispositivos moviles)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Crea un objeto de UI; 
    // Esta función crea la interfaz de usuario predeterminada 
    // que incluye el control de zoom, el control de configuración del mapa
    var ui = H.ui.UI.createDefault(map, defaultLayers);
}

function cargarMapa2() {
    //Paso 1: Hay que inicializar la comunicación con el API, mediante el objeto platform
    // Cada quien coloca su propia APIKEY 
    var platform = new H.service.Platform({
        apikey: 'KPido0Xux_1pUNoL6_o7nRbJ5CZy3QKxhw921m1J4D4'
    });
    var defaultLayers = platform.createDefaultLayers();

    //Paso 2: Se inicializa y crea el objeto map; el cual centras, en este caso sobre CDMX
    // y tiene un zoom de lo amplio que se quiera la vista del mapa
    var map = new H.Map(document.getElementById('mapa2'),
        defaultLayers.vector.normal.map, {
        center: { lat: 19.432608, lng: -99.133209 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
    });
    // Se agrega un escucha para permitir el cambio de tamaño del mapa
    window.addEventListener('resize', () => map.getViewPort().resize());

    //Paso 3: Se hace el mapa interactivo
    // Se habilitan los evento en el mapa >MapEvents 
    // El objeto Behavior implementa las interacciones por defecto (incluso los eventos en dispositivos moviles)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Crea un objeto de UI; 
    // Esta función crea la interfaz de usuario predeterminada 
    // que incluye el control de zoom, el control de configuración del mapa
    var ui = H.ui.UI.createDefault(map, defaultLayers);
    //Se llama a la función que añadirá los marcadores al mapa
    agregarMarcadores(map);
}

function agregarMarcadores(map) {
    var lat1 = 21.116667; var lng1 = -101.683334;  //Leon
    var lat2 = 19.033333; var lng2 = -98.183334;   //Puebla
    var lat3 = 23.249414; var lng3 = -106.411140;  //Mazatlan
    var lat4 = 23.062283; var lng4 = -109.699951;  //Los Cabos
    var lat5 = 19.686081; var lng5 = -98.871635;   //Teotihuacan

    //    const coordenadas1 = {lat:21.116667,lng:-101.683334};
    //    var marcador = new H.map.Marker(coordenadas1);
    //    mapa.addObject(marcador);

    //Se crea el objeto del marcador, con los datos de las ubicaciones
    var marcador1 = new H.map.Marker({ lat: lat1, lng: lng1 });
    //Se añade el marcador al mapa
    map.addObject(marcador1);

    var marcador2 = new H.map.Marker({ lat: lat2, lng: lng2 });
    map.addObject(marcador2);

    var marcador3 = new H.map.Marker({ lat: lat3, lng: lng3 });
    map.addObject(marcador3);

    var marcador4 = new H.map.Marker({ lat: lat4, lng: lng4 });
    map.addObject(marcador4);

    var marcador5 = new H.map.Marker({ lat: lat5, lng: lng5 });
    map.addObject(marcador5);
}


function cargarMapa3() {
    //Paso 1: Hay que inicializar la comunicación con el API, mediante el objeto platform
    // Cada quien coloca su propia APIKEY 
    var platform = new H.service.Platform({
        apikey: 'KPido0Xux_1pUNoL6_o7nRbJ5CZy3QKxhw921m1J4D4'
    });
    var defaultLayers = platform.createDefaultLayers();

    //Paso 2: Se inicializa y crea el objeto map; el cual centras, en este caso sobre CDMX
    // y tiene un zoom de lo amplio que se quiera la vista del mapa
    var map = new H.Map(document.getElementById('mapa3'),
        defaultLayers.vector.normal.map, {
        center: { lat: 19.432608, lng: -99.133209 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
    });
    // Se agrega un escucha para permitir el cambio de tamaño del mapa
    window.addEventListener('resize', () => map.getViewPort().resize());

    //Paso 3: Se hace el mapa interactivo
    // Se habilitan los evento en el mapa >MapEvents 
    // El objeto Behavior implementa las interacciones por defecto (incluso los eventos en dispositivos moviles)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Crea un objeto de UI; 
    // Esta función crea la interfaz de usuario predeterminada 
    // que incluye el control de zoom, el control de configuración del mapa
    ui = H.ui.UI.createDefault(map, defaultLayers);

    // Se llama a la funcion que genera y añade las burbujas con sus marcadores
    agregarBurbuja(map, ui);
}

/**
 * Se crean marcadores y se agregan a un grupo
 * @param {H.map.Group} group       El grupo sobre el que se colocan los marcadores
 * @param {H.geo.Point} coordinate  Ubicacion de los marcadores
 * @param {String} html             Datos asociados a los marcadores
 */

function agregarMarcadorGrupo(group, coordinate, html) {
    //Se crea el marcador ubicado en las coordenadas indicadas
    let marker = new H.map.Marker(coordinate);
    // Se agregan los datos del marcador
    marker.setData(html);
    //Se agrega el marcado al grupo
    group.addObject(marker);
}

/**
 * Add two markers showing the position of Liverpool and Manchester City football clubs.
 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
 * @param {H.Map} map A HERE Map instance within the application
 */
function agregarBurbuja(map, ui) {
    var lat3 = 23.249414;
    var lng3 = -106.411140;
    //Mazatlan
    var lat4 = 23.062283
    var lng4 = -109.699951;
    //Los Cabos

    //Se crea un grupo de componentes
    var group = new H.map.Group();
    //Se asocia ese grupo al mapa
    map.addObject(group);
    // agrega al grupo el detector de eventos 'tap', que abre la burbuja de información
    group.addEventListener('tap', function (evt) {
        //Se crea el objeto de la burbuja
        //El target del evento es el marcador en sí mismo
        var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
            //Se leen los datos
            content: evt.target.getData()
        });
        //Se agregan las burbujas de información
        ui.addBubble(bubble);
    }, false);

    agregarMarcadorGrupo(group, { lat: lat3, lng: lng3 },
        '<div><a href="https://es.wikipedia.org/wiki/Mazatl%C3%A1n">Mazatlan, Sinaloa</a></div>');

    agregarMarcadorGrupo(group, { lat: lat4, lng: lng4 },
        '<div><a href="https://es.wikipedia.org/wiki/San_Jos%C3%A9_del_Cabo">San José del Cabo</a></div>');
}


function cargarMapa4() {
    mapContainer = document.getElementById("mapa4");
    //Paso 1: Hay que inicializar la comunicación con el API, mediante el objeto platform
    // Cada quien coloca su propia APIKEY 
    var platform = new H.service.Platform({
        apikey: 'KPido0Xux_1pUNoL6_o7nRbJ5CZy3QKxhw921m1J4D4'
    });
    var defaultLayers = platform.createDefaultLayers();

    //Paso 2: Se inicializa y crea el objeto map; el cual centras, en este caso sobre CDMX
    // y tiene un zoom de lo amplio que se quiera la vista del mapa
    map = new H.Map(mapContainer,
        defaultLayers.vector.normal.map, {
        center: { lat: 19.432608, lng: -99.133209 },
        zoom: 4,
        pixelRatio: window.devicePixelRatio || 1
    });
    // Se agrega un escucha para permitir el cambio de tamaño del mapa
    window.addEventListener('resize', () => map.getViewPort().resize());

    //Paso 3: Se hace el mapa interactivo
    // Se habilitan los evento en el mapa >MapEvents 
    // El objeto Behavior implementa las interacciones por defecto (incluso los eventos en dispositivos moviles)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Crea un objeto de UI; 
    // Esta función crea la interfaz de usuario predeterminada 
    // que incluye el control de zoom, el control de configuración del mapa
    var ui = H.ui.UI.createDefault(map, defaultLayers);

    //Ahora  se llama la funcion que genera la ruta
    calculateRouteFromAtoB(platform);
}

/**
 * Calculates and displays a car route from the Brandenburg Gate in the centre of Berlin
 * to Friedrichstraße Railway Station.
 *
 * A full list of available request parameters can be found in the Routing API documentation.
 * see: http://developer.here.com/rest-apis/documentation/routing/topics/resource-calculate-route.html
 *
 * @param {H.service.Platform} platform A stub class to access HERE services
 */
function calculateRouteFromAtoB(platform) {
    var router = platform.getRoutingService(null, 8),
        routeRequestParams = {
            routingMode: 'fast',
            transportMode: 'car',
            origin: '21.116667,-101.683334', // Leon
            destination: '23.249414,-106.411140', // Mazatlan
            return: 'polyline,turnByTurnActions,actions,instructions,travelSummary'
        };

    router.calculateRoute(
        routeRequestParams,
        onSuccess,
        onError
    );
}

/**
 * This function will be called once the Routing REST API provides a response
 * @param {Object} result A JSONP object representing the calculated route
 *
 * see: http://developer.here.com/rest-apis/documentation/routing/topics/resource-type-calculate-route.html
 */
function onSuccess(result) {
    var route = result.routes[0];

    /*
     * The styling of the route response on the map is entirely under the developer's control.
     * A representative styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
    addRouteShapeToMap(route);
    addManueversToMap(route);
    addWaypointsToPanel(route);
    addManueversToPanel(route);
    addSummaryToPanel(route);
    // ... etc.
}

/**
 * This function will be called if a communication error occurs during the JSON-P request
 * @param {Object} error The error message received.
 */
function onError(error) {
    alert('Can\'t reach the remote server');
}

/**
 * Boilerplate map initialization code starts below:
 */


// Hold a reference to any infobubble opened
var bubble;

/**
 * Opens/Closes a infobubble
 * @param {H.geo.Point} position The location on the map.
 * @param {String} text          The contents of the infobubble.
 */
function openBubble(position, text) {
    if (!bubble) {
        bubble = new H.ui.InfoBubble(
            position,
            // The FO property holds the province name.
            { content: text });
        ui.addBubble(bubble);
    } else {
        bubble.setPosition(position);
        bubble.setContent(text);
        bubble.open();
    }
}

/**
 * Creates a H.map.Polyline from the shape of the route and adds it to the map.
 * @param {Object} route A route as received from the H.service.RoutingService
 */
function addRouteShapeToMap(route) {
    route.sections.forEach((section) => {
        // decode LineString from the flexible polyline
        let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

        // Create a polyline to display the route:
        let polyline = new H.map.Polyline(linestring, {
            style: {
                lineWidth: 4,
                strokeColor: 'rgba(0, 128, 255, 0.7)'
            }
        });

        // Add the polyline to the map
        map.addObject(polyline);
        // And zoom to its bounding rectangle
        map.getViewModel().setLookAtData({
            bounds: polyline.getBoundingBox()
        });
    });
}

/**
 * Creates a series of H.map.Marker points from the route and adds them to the map.
 * @param {Object} route A route as received from the H.service.RoutingService
 */
function addManueversToMap(route) {
    var svgMarkup = '<svg width="18" height="18" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="8" cy="8" r="8" ' +
        'fill="#1b468d" stroke="white" stroke-width="1" />' +
        '</svg>',
        dotIcon = new H.map.Icon(svgMarkup, { anchor: { x: 8, y: 8 } }),
        group = new H.map.Group(),
        i,
        j;

    route.sections.forEach((section) => {
        let poly = H.geo.LineString.fromFlexiblePolyline(section.polyline).getLatLngAltArray();

        let actions = section.actions;
        // Add a marker for each maneuver
        for (i = 0; i < actions.length; i += 1) {
            let action = actions[i];
            var marker = new H.map.Marker({
                lat: poly[action.offset * 3],
                lng: poly[action.offset * 3 + 1]
            },
                { icon: dotIcon });
            marker.instruction = action.instruction;
            group.addObject(marker);
        }

        group.addEventListener('tap', function (evt) {
            map.setCenter(evt.target.getGeometry());
            openBubble(evt.target.getGeometry(), evt.target.instruction);
        }, false);

        // Add the maneuvers group to the map
        map.addObject(group);
    });
}

/**
 * Creates a series of H.map.Marker points from the route and adds them to the map.
 * @param {Object} route A route as received from the H.service.RoutingService
 */
function addWaypointsToPanel(route) {
    var nodeH3 = document.createElement('h3'),
        labels = [];

    route.sections.forEach((section) => {
        labels.push(
            section.turnByTurnActions[0].nextRoad.name[0].value)
        labels.push(
            section.turnByTurnActions[section.turnByTurnActions.length - 1].currentRoad.name[0].value)
    });

    /*
    routeInstructionsContainer = document.getElementById("panel");
    nodeH3.textContent = labels.join(' - ');
    routeInstructionsContainer.innerHTML = '';
    routeInstructionsContainer.appendChild(nodeH3);
    */
}

/**
 * Creates a series of H.map.Marker points from the route and adds them to the map.
 * @param {Object} route A route as received from the H.service.RoutingService
 */
function addSummaryToPanel(route) {
    let duration = 0,
        distance = 0;

    route.sections.forEach((section) => {
        distance += section.travelSummary.length;
        duration += section.travelSummary.duration;
    });

    var summaryDiv = document.createElement('div'),
        content = '<b>Distancia Total</b>: ' + distance + ' metros. <br />' +
            '<b>Travel Time</b>: ' + toMMSS(duration) + ' (in current traffic)';

    summaryDiv.style.fontSize = 'small';
    summaryDiv.style.marginLeft = '5%';
    summaryDiv.style.marginRight = '5%';
    summaryDiv.innerHTML = content;
    // routeInstructionsContainer.appendChild(summaryDiv);
}

/**
 * Creates a series of H.map.Marker points from the route and adds them to the map.
 * @param {Object} route A route as received from the H.service.RoutingService
 */
function addManueversToPanel(route) {
    var nodeOL = document.createElement('ol');

    nodeOL.style.fontSize = 'small';
    nodeOL.style.marginLeft = '5%';
    nodeOL.style.marginRight = '5%';
    nodeOL.className = 'directions';

    route.sections.forEach((section) => {
        section.actions.forEach((action, idx) => {
            var li = document.createElement('li'),
                spanArrow = document.createElement('span'),
                spanInstruction = document.createElement('span');

            spanArrow.className = 'arrow ' + (action.direction || '') + action.action;
            spanInstruction.innerHTML = section.actions[idx].instruction;
            li.appendChild(spanArrow);
            li.appendChild(spanInstruction);

            nodeOL.appendChild(li);
        });
    });

    // routeInstructionsContainer.appendChild(nodeOL);

}

function toMMSS(duration) {
    return Math.floor(duration / 60) + ' minutes ' + (duration % 60) + ' seconds.';
}
