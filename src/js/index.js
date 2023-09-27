document.addEventListener("DOMContentLoaded", function () {
    const listaProductos = document.getElementById("product_list");

    const data = [
        {
            "product_id": "1",
            "product_name": "Alicate tipo bhaco",
            "product_description": "Alicate ERGO™ universal cromado",
            "product_price": "$175.200",
            "product_image": "src/img/alicatebhaco.jpeg",
            "product_material": "Acero cromado con mangos bi-material (200 mm)",
            "product_size": "500 mm",
            "product_color": "Negro con naraja"
        },
        {
            "product_id": "2",
            "product_name": "Cintametrica 5 m",
            "product_description": "Flexómetro 5 Metros Stanley 30",
            "product_price": "$20.800",
            "product_image": "src/img/cintametrica5m.jpeg",
            "product_material": "aluminio",
            "product_size": "Largo de la cinta 5 m ancho 19 mm",
            "product_color": "Negro con Amarillo"
        },
        {
            "product_id": "3",
            "product_name": "Pinza punta Bhaco",
            "product_description": "ALICATE PINZA DE PUNTA 8p AISLADO 1000V BAHCO",
            "product_price": "$ 164.500",
            "product_image": "src/img/pinzapuntaBhaco.png",
            "product_material": "Cromado y con tratamiento anti-corrosión.",
            "product_size": "8 pulgadas",
            "product_color": "Recubrimiento de 3 capas con distintos colores que indican seguridad, peligro o grave peligro. Además de una 4.ª capa de color negro para proteger aún más los bordes del mango."
        },
        {
            "product_id": "4",
            "product_name": "SERRUCHO DE MANO 20'' ",
            "product_description": "MARCA: TOTAL Distancia de los dientes: 7 dientes por pulgada ",
            "product_price": "$ 29.900",
            "product_image": "src/img/Serrucho20p50cm.jpeg",
            "product_material": "Acero 65 para muelles al manganeso",
            "product_size": "500 mm",
            "product_color": "Verde"
        }
    ];

    let products = '';
    data.forEach(product => {
        const li = document.createElement("li");
        products += `<section id="${product.id_product}" class="product product-background">
                <img src="${product.product_image}" alt="img Insumos" width="200px" height="200px">
                <h2>${product.product_name}</h2>
                <p>${product.product_description}</p>
                <h3>Descripción del producto</h3>
                <ol>
                    <li>Color: ${product.color}</li>
                    <li>Talla: ${product.product_size}</li>
                    <li>Material: ${product.product_material}</li>
                    <li>Precio: $${product.product_price}</li>
                </ol>
                <a href="src/page/alicatebhaco.html" target="_blank">Ver detalles</a>
            </section>`;
    });
    listaProductos.innerHTML = products;

});

document.addEventListener('scroll', function (){
    console.log('Hiciste scroll');
});
