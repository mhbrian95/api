  $( document ).ready(function() {
    $.getJSON( "../productos/productosMujer.json", function(respuestaProductosJson){
        const PRODUCTOS = respuestaProductosJson;
        const NombreProducto = PRODUCTOS.results[14].item.NombreProducto;
        
        console.log(PRODUCTOS.results[14]);
   
        });
    });
  