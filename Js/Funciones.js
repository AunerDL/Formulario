document.addEventListener("DOMContentLoaded", function() {
    const paises = ["México"];
    const estados = ["Hidalgo", "Baja California", "Oaxaca"];
    const municipios = {
        "Hidalgo": ["Municipio 1 Hidalgo", "Municipio 2 Hidalgo", "Municipio 3 Hidalgo"],
        "Baja California": ["Municipio 1 Baja California", "Municipio 2 Baja California", "Municipio 3 Baja California"],
        "Oaxaca": ["Municipio 1 Oaxaca", "Municipio 2 Oaxaca", "Municipio 3 Oaxaca"]
    };
    const localidades = {
        "Hidalgo": {
            "Municipio 1 Hidalgo": ["Localidad 1 municipio 1 Hidalgo", "Localidad 2 municipio 1 Hidalgo", "Localidad 3 municipio 1 Hidalgo"],
            "Municipio 2 Hidalgo": ["Localidad 1 municipio 2 Hidalgo", "Localidad 2 municipio 2 Hidalgo", "Localidad 3 municipio 2 Hidalgo"],
            "Municipio 3 Hidalgo": ["Localidad 1 municipio 3 Hidalgo", "Localidad 1 municipio 3 Hidalgo", "Localidad 3 municipio 3 Hidalgo"]
        },
        "Baja California": {
            "Municipio 1 Baja California": ["Localidad 1 municipio 1 Baja California", "Localidad 2 municipio 1 Baja California", "Localidad 3 municipio 1 Baja California"],
            "Municipio 2 Baja California": ["Localidad 1 municipio 2 Baja California", "Localidad 2 municipio 2 Baja California", "Localidad 3 municipio 2 Baja California"],
            "Municipio 3 Baja California": ["Localidad 1 municipio 3 Baja California", "Localidad 1 municipio 3 Baja California", "Localidad 3 municipio 3 Baja California"]
        },
        "Oaxaca": {
            "Municipio 1 Oaxaca": ["Localidad 1 municipio 1 Oaxaca", "Localidad 2 municipio 1 Oaxaca", "Localidad 3 municipio 1 Oaxaca"],
            "Municipio 2 Oaxaca": ["Localidad 1 municipio 2 Oaxaca", "Localidad 2 municipio 2 Oaxaca", "Localidad 3 municipio 2 Oaxaca"],
            "Municipio 3 Oaxaca": ["Localidad 1 municipio 3 Oaxaca", "Localidad 1 municipio 3 Oaxaca", "Localidad 3 municipio 3 Oaxaca"]
        }
    };

    llenarDropdown("pais", paises);
    llenarDropdown("estado", estados);
    llenarDropdown("municipio", municipios[estados[0]]);
    llenarDropdown("localidad", localidades[estados[0]][municipios[estados[0]][0]]);

    // Agregar evento de cambio al dropdown de estados
    document.getElementById("estado").addEventListener("change", function () {
        const estadoSeleccionado = document.getElementById("estado").value;
        llenarDropdown("municipio", municipios[estadoSeleccionado]);
    });

    // Agregar evento de cambio al dropdown de municipios
    document.getElementById("municipio").addEventListener("change", function () {
        const estadoSeleccionado = document.getElementById("estado").value;
        const municipioSeleccionado = document.getElementById("municipio").value;
        llenarDropdown("localidad", localidades[estadoSeleccionado][municipioSeleccionado]);
    });

    function llenarDropdown(idDropdown, opciones) {
        const dropdown = document.getElementById(idDropdown);
        
        // Verificar que opciones no sea undefined y sea un array antes de usar forEach
        if (opciones && Array.isArray(opciones)) {
            // Limpiar opciones antiguas
            dropdown.innerHTML = "";
            
            opciones.forEach(opcion => {
                const option = document.createElement("option");
                option.value = opcion;
                option.text = opcion;
                dropdown.add(option);
            });
        }
    }
});

// Declarar la función mostrarDatosUsuario en el ámbito global
function mostrarDatosUsuario() {
    const paisSeleccionado = document.getElementById("pais").value;
    const estadoSeleccionado = document.getElementById("estado").value;
    const municipioSeleccionado = document.getElementById("municipio").value;
    const localidadSeleccionada = document.getElementById("localidad").value;

    const datosUsuario = `
        <p><strong>País:</strong> ${paisSeleccionado}</p>
        <p><strong>Estado:</strong> ${estadoSeleccionado}</p>
        <p><strong>Municipio:</strong> ${municipioSeleccionado}</p>
        <p><strong>Localidad:</strong> ${localidadSeleccionada}</p>
    `;

    // Mostrar los datos del usuario en el div correspondiente
    document.getElementById("datosUsuario").innerHTML = datosUsuario;
}