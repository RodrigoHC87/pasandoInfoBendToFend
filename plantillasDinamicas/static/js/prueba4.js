

let paisesHTML = '';

const obtenerCiudades = async (idPais) => {
    try {
        const response = await fetch(`./ciudad/${idPais}`);
        const data = await response.json();
        console.log(data);

        if(data.mensaje === "Exito") {

            ciudades = data.ciudades;

            const opciones = ciudades.map(ciudad => `<li>${ciudad.nombre}</li>`).join('');

            ciudadesHTML = `
                <h1 class="h1">CIUDADES</h1>
                <ul>
                    ${opciones}
                </ul>
                `;

            const contenedor = document.getElementById("contenedor-principal");
            contenedor.innerHTML = ciudadesHTML;
            contenedor.style.display = 'block';

        } else {
            alert('Paises no encontrados...');
        }
    } catch (error) {
        console.error("Error al obtener ciudades:", error);
    }
};



const obtenerPaises = async () => {
    try {
        const response = await fetch('./pais');
        const data = await response.json();

        console.log(data);

        if(data.mensaje === "Exito") {

            // Generar la lista de países
            const opc_paises = data.paises.map(pais => `
                <li>
                    <a type="button" class="btn btn-primary my-1" id="btns${pais.id}" href="#">${pais.nombre}</a>
                </li>`).join('');

            paisesHTML = `
                <h1 class="h1">PAISES</h1>
                <ul>
                    ${opc_paises}
                </ul>`;

        } else {
            alert('Paises no encontrados...');
        }
    } catch (error) {
        console.error("Error al obtener países:", error);
    }
};



const cargaInicial = async () => {

    await obtenerPaises();

    const contenedor = document.getElementById("contenedor-principal");

    const btnI = document.getElementById('btnI');


    //- Mostrar Botones de los paises
    btnI.addEventListener('click', () => {
        // Mostrar la información de países
        contenedor.innerHTML = paisesHTML;
        contenedor.style.display = 'block';
    });


    //- Delegación de eventos
    contenedor.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'A' && event.target.id.startsWith('btns')) {

            const buttonId = event.target.id.substring(4); // 4 es la longitud de 'btns'
            obtenerCiudades(buttonId);
        }
    });
};


window.addEventListener("load", async () => {
    await cargaInicial();
});




//- Función para cargar plantillas dinámicas (La santisima PTM!!!)
function cargarPlantilla(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {

            const contenedor = document.getElementById("contenedor-principal");

            contenedor.style.display = 'block';
            contenedor.innerHTML = data;

        })
        .catch(error => console.error('Error al cargar la plantilla:', error));
}


