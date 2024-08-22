//- Podemos usar un alert para generar un pront y probar que este archivo se está cargando correctamente.
// alert("Hola, esto es una prueba para corroborar que se esta cargando correctamente el archivo js")



let ciudades = [];

const listarCiudades = async (idPais) => {
    try {
        const response = await fetch(`./ciudades/${idPais}`);
        const data = await response.json();

        //- Usar el consolge.log para ver los datos, es muy util para debugear.
        // console.log(data);

        if(data.mensaje === "Exito"){

            ciudades = data.ciudades;

            let opciones = ``;
            ciudades.forEach((ciudad) => {
                opciones += `<option value="${ciudad.id}">${ciudad.nombre}</option>`;
            });
            cboxCiudad.innerHTML = opciones;
            //- Seleccionar la primera ciudad por defecto.
            mostrarAlcalde(ciudades[0].id);
        } else {
            alert('Paises no encontrados...');
        }
    } catch (error) {
        console.log(error);
    }
};



const listarPaises = async () => {
    try {
        const response = await fetch('./paises');
        const data = await response.json();

        console.log(data);

        if(data.mensaje === "Exito"){
            let opciones = ``;
            data.paises.forEach((pais) => {
                opciones += `<option value="${pais.id}">${pais.nombre}</option>`;
            });
            cboxPais.innerHTML = opciones;

            //- Seleccionar el primer pais por defecto.
            listarCiudades(data.paises[0].id);

        } else {
            alert('Paises no encontrados...');
        }
    } catch (error) {
        console.log(error);
    }
};




const mostrarAlcalde = (idCiudad) => {
    let ciudadEncontrada = ciudades.filter((ciudad) => ciudad.id == idCiudad)[0];
    console.log(ciudadEncontrada);
    let alcalde = ciudadEncontrada.alcalde;
    txtAlcalde.innerText = `EL Gobernador es ${alcalde}`;
};


const cargaInicial = async () => {
    await listarPaises();

    cboxPais.addEventListener("change", (event) => {
        listarCiudades(event.target.value);

        //- Usar el consolge.log para ver los datos, es muy util para debugear.
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);

    });

    cboxCiudad.addEventListener("change", (event) => {
        mostrarAlcalde(event.target.value);
    });
};


window.addEventListener("load", async () => {
    await cargaInicial();
});