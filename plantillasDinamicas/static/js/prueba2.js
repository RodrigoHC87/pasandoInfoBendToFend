

let paisesHTML = '';
let ciudadesHTML = '';


const obtenerInfo = async () => {
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
                    <a type="button" class="btn btn-primary my-1" id="btn${pais.id}" href="#">${pais.nombre}</a>
                </li>`;
            });

            paisesHTML = `
                <h1 class="h1">PAISES</h1>
                <ul>
                    ${opc_paises}
                </ul>`;

            // Generar la lista de ciudades
            let opc_ciudades = '';
            data.ciudades.forEach((ciudad) => {
                opc_ciudades += `<li>${ciudad.nombre}</li>`;
            });

            ciudadesHTML = `
                <h1 class="h1">CIUDADES</h1>
                <ul>
                    ${opc_ciudades}
                </ul>`;

        } else {
            alert('Paises no encontrados...');
        }
    } catch (error) {
        console.log(error);
    }
};



const cargaInicial = async () => {
    await obtenerInfo();

    const btnI = document.getElementById('btnI');
    btnI.addEventListener('click', () => {
        // Mostrar la información de países
        const contenedor = document.getElementById("contenedor-principal");
        contenedor.innerHTML = paisesHTML;
        contenedor.style.display = 'block';
    });

    const btnII = document.getElementById('btnII');
    btnII.addEventListener('click', () => {
        // Mostrar la información de ciudades
        const contenedor = document.getElementById("contenedor-principal");
        contenedor.innerHTML = ciudadesHTML;
        contenedor.style.display = 'block';
    });


    const contenedor = document.getElementById("contenedor-principal");

    // Delegación de eventos
    contenedor.addEventListener('click', (event) => {
        if (event.target && event.target.tagName === 'A' && event.target.id.startsWith('btn')) {
            const buttonId = event.target.id;
            alert(`${buttonId} clicado`);
            console.log(`${buttonId} clicado`);
        }
    });


};



window.addEventListener("load", async () => {
    await cargaInicial();
});




