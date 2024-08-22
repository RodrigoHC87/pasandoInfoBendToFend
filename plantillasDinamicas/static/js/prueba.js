

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
                opc_paises += `<li>${pais.nombre}</li>`;
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

    const btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', () => {
        // Mostrar la información de países
        const contenedor = document.getElementById("contenedor-principal");
        contenedor.innerHTML = paisesHTML;
        contenedor.style.display = 'block';
    });

    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () => {
        // Mostrar la información de ciudades
        const contenedor = document.getElementById("contenedor-principal");
        contenedor.innerHTML = ciudadesHTML;
        contenedor.style.display = 'block';
    });
};

window.addEventListener("load", async () => {
    await cargaInicial();
});























// const obtenerInfo = async () => {
//     try {
//         const response = await fetch('./pais');
//         const data = await response.json();

//         console.log(data);

//         if(data.mensaje === "Exito"){

//             let opc_paises = ``;
//             data.paises.forEach((pais) => {
//                 opc_paises += `<li>${pais.nombre}</li>`;
//             });

//             var paises_info = document.getElementById("contenedor-principal");
//             paises_info.innerHTML = `
//                 <h1 class="h1">PAISES</h1>
//                 <ul>
//                     ${opc_paises}
//                 </ul>`;

//             // ------------------------------------------------------

//             let opc_ciudades = ``;
//             data.ciudades.forEach((ciudad) => {
//                 opc_ciudades += `<li>${ciudad.nombre}</li>`;
//             });

//             console.log(opc_ciudades);

//             var ciudades_info = document.getElementById("contenedor-principal");
//             ciudades_info.innerHTML = `
//                 <h1 class="h1">ciudades</h1>
//                 <ul>
//                     ${opc_ciudades}
//                 </ul>`;


//         } else {
//             alert('Paises no encontrados...');
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// const cargaInicial = async () => {
//     await obtenerInfo();

//     const btn1 = document.getElementById('btn1');
//     btn1.addEventListener('click', () => {
//         alert('¡Botón1 clicado!');
//         // Mostrar el contenedor principal cuando se hace clic en el botón
//         var paises_info = document.getElementById("contenedor-principal");
//         paises_info.style.display = 'block';
//     });

//     // ------------------------------------------------------

//     const btn2 = document.getElementById('btn2');
//     btn2.addEventListener('click', () => {
//         alert('¡Botón2 clicado!');
//         // Mostrar el contenedor principal cuando se hace clic en el botón
//         var opc_ciudades = document.getElementById("contenedor-principal");
//         opc_ciudades.style.display = 'block';
//     });
// };




// window.addEventListener("load", async () => {
//     await cargaInicial();
// });
