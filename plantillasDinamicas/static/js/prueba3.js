
let ciudades = [];

let paisesHTML = '';
let ciudadesHTML = '';



const obtenerCiudades = async (idPais) => {
    try {
        const response = await fetch(`./ciudad/${idPais}`);
        const data = await response.json();
        console.log(data);

        if(data.mensaje === "Exito") {

            ciudades = data.ciudades;

            let opciones = ``;
            ciudades.forEach((ciudad) => {
                opciones += `<li>${ciudad.nombre}</li>`;
            });

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
        console.log(error);
    }
};



const obtenerPaises = async () => {
    try {
        const response = await fetch('./pais');
        const data = await response.json();

        console.log(data);

        if(data.mensaje === "Exito") {

            // Generar la lista de países
            let opc_paises = '';
            data.paises.forEach((pais) => {
                opc_paises += `
                <li>
                    <a type="button" class="btn btn-primary my-1" id="btns${pais.id}" href="#">${pais.nombre}</a>
                </li>`;
            });

            paisesHTML = `
                <h1 class="h1">PAISES</h1>
                <ul>
                    ${opc_paises}
                </ul>`;

        } else {
            alert('Paises no encontrados...');
        }
    } catch (error) {
        console.log(error);
    }
};



const cargaInicial = async () => {
    await obtenerPaises();

    const btnI = document.getElementById('btnI');
    btnI.addEventListener('click', () => {
        // Mostrar la información de países
        const contenedor = document.getElementById("contenedor-principal");
        contenedor.innerHTML = paisesHTML;
        contenedor.style.display = 'block';
    });



    const contenedor = document.getElementById("contenedor-principal");
    // Delegación de eventos
    contenedor.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'A' && event.target.id.startsWith('btns')) {

            const buttonId = event.target.id.substring(4); // 4 es la longitud de 'btns'
            console.log("buttonId -->" + buttonId);
            obtenerCiudades(buttonId);
        }
    });

};


window.addEventListener("load", async () => {
    await cargaInicial();
});









