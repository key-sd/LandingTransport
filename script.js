// Lógica del carrusel de diapositivas
var indiceActual = 0;
var diapositivas = document.querySelectorAll('.diapositiva');
var puntos = document.querySelectorAll('.punto');

function irDiapositiva(n) {
  diapositivas[indiceActual].classList.remove('activa');
  puntos[indiceActual].classList.remove('activo');

  indiceActual = (n + diapositivas.length) % diapositivas.length;

  diapositivas[indiceActual].classList.add('activa');
  puntos[indiceActual].classList.add('activo');
}

function cambiarDiapositiva(direccion) {
  irDiapositiva(indiceActual + direccion);
}
 
// Avance automático de las img del carruseel cada 5 segundos
setInterval(function () {
  cambiarDiapositiva(1);
}, 5000);

// contiene todos los horarios
const horarios = [
  {
    sede: "Ciudad Universitaria",
    titulo: "Horario de transporte para Sede Central",
    nota: "Puedes abordar el transporte enfrente de los salones de salud",
    dias: [
      {
        nombre: "Lunes y Miércoles",
        columnas: [
          {
            titulo: "Mañana",
            datos: [
              ["Primera salida", "06:15 a.m."],
              ["Segunda salida", "07:00 a.m."],
              ["Tercera salida", "08:00 a.m."],
              ["Cuarta salida", "09:25 a.m."],
              ["Quinta salida", "10:40 a.m."],
            ],
          },
          {
            titulo: "Tarde",
            datos: [
              ["Primera salida", "12:10 p.m."],
              ["Segunda salida", "12:20 p.m."],
              ["Tercera salida", "02:40 p.m."],
              ["Cuarta salida", "03:30 p.m."],
              ["Quinta salida", "04:10 p.m."],
              ["Sexta salida", "04:20 p.m."],
              ["Última salida", "05:10 p.m."]
            ]
          }
        ]
      },
      {
        nombre: "Martes y Jueves",
        columnas: [
          {
            titulo: "Mañana",
            datos: [
              ["Primera salida", "06:15 a.m."],
              ["Segunda salida", "07:00 a.m."],
              ["Tercera salida", "07:20 a.m."],
              ["Cuarta salida", "08:00 a.m."],
              ["Quinta salida", "09:25 a.m."],
              ["Sexta salida", "10:40 a.m."]
            ],
          },
          {
            titulo: "Tarde",
            datos: [
              ["Primera salida", "12:10 p.m."],
              ["Segunda salida", "12:20 p.m."],
              ["Tercera salida", "02:40 p.m."],
              ["Cuarta salida", "03:30 p.m."],
              ["Quinta salida", "04:10 p.m."],
              ["Última salida", "04:20 p.m."]
            ]
          }
        ]
      },
      {
        nombre: "Viernes",
        columnas: [
          {
            titulo: "Mañana",
            datos: [
              ["Primera salida", "06:15 a.m."],
              ["Segunda salida", "07:00 a.m."],
              ["Tercera salida", "08:00 a.m."],
              ["Cuarta salida", "09:25 a.m."],
              ["Quinta salida", "10:40 a.m."]
            ]
          },
          {
            titulo: "Tarde",
            datos: [
              ["Primera salida", "12:10 p.m."],
              ["Segunda salida", "12:20 p.m."],
              ["Tercera salida", "02:40 p.m."],
              ["Cuarta salida", "03:30 p.m."],
              ["Quinta salida", "04:10 p.m."],
              ["Última salida", "04:20 p.m."]
            ]
          }
        ]
      },
      {
        nombre: "Sábado",
        columnas: [
          {
            titulo: "Mañana",
            datos: [
              ["Primera salida", "06:15 a.m."],
              ["Segunda salida", "07:00 a.m."],
              ["Tercera salida", "08:00 a.m."],
              ["Cuarta salida", "09:25 a.m."],
              ["Quinta salida", "10:40 a.m."]
            ]
          },
          {
            titulo: "Tarde",
            datos: [
              ["Primera salida", "12:20 p.m."],
              ["Segunda salida", "02:40 p.m."],
              ["Última salida", "04:10 p.m."]
            ]
          }
        ]

      }
    ]
  },
  {
    sede: "Sede Central",
    titulo:"Horario de transporte para Ciudad Universitaria",
    nota: "Puedes abordar el transporte en el parqueo de los estudiantes",
    dias: [
      {
        nombre: "Lunes y Miércoles",
        columnas: [
          {
            titulo: "Mañana",
            datos: [
              ["Primera salida", "06:40 a.m."],
              ["Segunda salida", "07:40 a.m."],
              ["Tercera salida", "08:40 a.m."],
              ["Cuarta salida", "10:00 a.m."],
              ["Quinta salida", "11:10 a.m."]
            ]
          },
          {
            titulo: "Tarde",
            datos: [
              ["Primera salida", "12:30 p.m."],
              ["Segunda salida", "12:50 p.m."],
              ["Tercera salida", "03:15 p.m."],
              ["Cuarta salida", "04:00 p.m."],
              ["Quinta salida", "04:40 p.m."],
              ["Sexta salida", "04:45 p.m."],
              ["Última salida", "05:40 p.m."]
            ]
          }
        ]
      },
      {
        nombre: "Martes y Jueves",
        columnas: [
          {
            titulo: "Mañana",
            datos: [
              ["Primera salida", "06:40 a.m."],
              ["Segunda salida", "07:40 a.m."],
              ["Tercera salida", "08:00 a.m."],
              ["Cuarta salida", "08:40 a.m."],
              ["Quinta salida", "10:00 a.m."],
              ["Sexta salida", "11:10 a.m."]
            ]
          },
          {
            titulo: "Tarde",
            datos: [
              ["Primera salida", "12:30 p.m."],
              ["Segunda salida", "12:50 p.m."],
              ["Tercera salida", "03:15 p.m."],
              ["Cuarta salida", "04:00 p.m."],
              ["Quinta salida", "04:40 p.m."],
              ["Última salida", "04:45 p.m."]
            ]
          }
        ]
      },{
        nombre: "Viernes",
        columnas: [
          {
            titulo: "Mañana",
            datos: [
              ["Primera salida", "06:40 a.m."],
              ["Segunda salida", "07:40 a.m."],
              ["Tercera salida", "08:40 a.m."],
              ["Cuarta salida", "10:00 a.m."],
              ["Quinta salida", "11:10 a.m."]
            ]
          },
          {
            titulo: "Tarde",
            datos: [
              ["Primera salida", "12:30 p.m."],
              ["Segunda salida", "12:50 p.m."],
              ["Tercera salida", "03:15 p.m."],
              ["Cuarta salida", "04:00 p.m."],
              ["Quinta salida", "04:40 p.m."],
              ["Última salida", "04:45 p.m."]
            ]
          }
        ]
      },
      {
        nombre:"Sábado",
        columnas:[
          {
            titulo: "Mañana",
            datos:[
              ["Primera salida", "06:40 a.m."],
              ["Segunda salida", "07:40 a.m."],
              ["Tercera salida", "08:40 a.m."],
              ["Cuarta salida", "10:00 a.m."],
              ["Quinta salida", "11:10 a.m."]
            ]
          },
          {
            titulo: "Tarde",
            datos:[
              ["Primera salida", "12:50 p.m."],
              ["Última salida", "03:45 p.m."]
            ]
          }
        ]
      }
    ]
  },
  {
    sede: "Campus Agronomía y Veterinaria",
    titulo: "Horario de transporte entre Sede Central y Campus Agronomía y Veterinaria",
    dias: [
      {
        nombre: "Martes a Viernes",
        columnas: [
          {
            titulo: "Salida de Sede Central",
            nota: "Puedes abordar el transporte en el parqueo de los estudiantes",
            datos: [
              ["Primera salida", "07:15 a.m."],
              ["Segunda salida", "12:20 p.m."]
            ]
          },
          {
            titulo: "Salida de Campus Agron. y Vet.",
            nota: "Puedes abordar el transporte en el parqueo del campus",
            datos: [
              ["Primera salida", "11:20 a.m."],
              ["Segunda salida", "04:20 p.m."]
            ]
          }
        ]
      },
      {
        nombre: "Sábado",
        columnas: [
          {
            titulo: "Salida de Sede Central", 
            nota: "Puedes abordar el transporte en el parqueo de los estudiantes",
            datos: [
              ["Única salida", "06:20 a.m."]
            ]
          },
          {
            titulo: "Salida de Campus Agron. y Vet.",
            nota: "Puedes abordar el transporte en el parqueo del campus",
            datos: [
              ["Única salida", "02:30 p.m."]
            ]
          }
        ]

      }
    ]
  }
];

const contenedor = document.getElementById("contenedor-horarios");

horarios.forEach(sede => {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta-horario";

  tarjeta.innerHTML = `<div class="encabezado-horario">${sede.sede}</div>`;
  tarjeta.innerHTML += `<div class="titulo-columna">${sede.titulo}</div>`;
  sede.dias.forEach(dia => {
    const bloque = document.createElement("div");
    bloque.className = "dia-des";

    bloque.innerHTML = `
      <button class="btn-des">
        <span class="dia-label">
          <span class="dia-badge">${dia.nombre}</span>
        </span>
        <span class="des-chevron"></span>
      </button>

      <div class="contenido-des">
        <div class="cuerpo-horario">

            ${dia.columnas.map(col => `
              <div class="columna-horario">
                <p class="titulo-columna">${col.titulo}</p>

                <table class="tabla-horario">
                  ${col.datos.map(h => `<tr><td>${h[0]}</td><td>${h[1]}</td></tr>`).join("")}
                </table>

                ${col.nota ? `<p class="nota-horario">${col.nota}</p>` : ""}
              </div>
            `).join("")}
        </div>

        ${sede.nota ? `<p class="nota-horario">${sede.nota}</p>` : ""}
      </div>
    `;

    const btn = bloque.querySelector(".btn-des");
    const contenido = bloque.querySelector(".contenido-des");

    btn.addEventListener("click", () => {
      btn.classList.toggle("abierto");
      contenido.classList.toggle("abierto");
    });

    tarjeta.appendChild(bloque);
  });

  contenedor.appendChild(tarjeta);
});