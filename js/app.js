angular.module('irricrops', ['ngSanitize'])
  .controller('tableController', function() {
    var vm = this;
    vm.items = {
      datos:{
        et_promedio:123,
      },
      header:[
        {
          title: "Riego",
          subitems:[
            {
              title: "m<sup>3</sup> total",
              col: "col-2",
              v: "volumen_total"
            },
            {
              title: "cant",
              col: "col-2",
              v:"riego_cantidad",
            },
            {
              title: "prom",
              col: "col-2",
              v:"riego_promedio",
            },
            {
              title: "frec",
              col: "col-2",
              v:"riego_frecuencia",
            },
          ]
        },



        {
          title: "Kc",
          subitems:[
            {
              title: "teorico",
              col: "col-2",
              v:"kc_teorico",
            },
            {
              title: "Real",
              col: "col-2",
              v: "kc_real"
            },
            {
              title: "si riego hoy",
              col: "col-3",
              v:"kc_hoy",
            },
          ]
        },






        {
          title: "Último Riego",
          subitems:[
            {
              title: "Fecha",
              col: "col-2",
              v: "fecha_ultimo_riego"
            },
            {
              title: "mm",
              col: "col-2",
              v:"mm_ultimo_riego",
            },
          ]
        },



        {
          title: "Estanque",
          subitems:[
            {
              title: "total",
              col: "col-2",
              v: "estanque"
            },
            {
              title: "actual",
              col: "col-2",
              v:"estanque_restante",
            },
          ]
        },



        {
          title: "Proximo Riego",
          subitems:[
            {
              title: "Fecha",
              col: "col-2",
              v: "fecha_proximo_riego"
            },
            {
              title: "dias",
              col: "col-2",
              v:"dias_proximo_riego",
            },
          ]
        },







        {
          title: "Scholander",
          subitems:[
            {
              title: "promedio",
              col: "col-3",
              v: "scholander_promedio"
            }
          ]
        },






        {
          title: "Clima",
          subitems:[
            {
              title: "Grados Dia",
              col: "col-3",
              v: "grados_dia"
            },
            {
              title: "horas Frio",
              col: "col-3",
              v: "horas_frio"
            }
          ]
        },


















      ],
      equipos:[
        {
          id: 234,
          nombre: "Equipo 1",
          sectores:[
            {
              id: 123,
              color: "red",
              nombre: "nombre Test",
              variedad:"variedad",
              calidad: "calidad",
              volumen_total: 123,
              riego_cantidad:234, 
              riego_promedio:345,
              riego_frecuencia:456,
              kc_real: 567,
              kc_teorico:678,
              kc_hoy:678,
              estanque:789,
              estanque_restante: 134,
              scholander_promedio:245,
              fecha_proximo_riego: "31 Ene",
              dias_proximo_riego:467,
              grados_dia: 578,
              horas_frio: 689,
              fecha_ultimo_riego: "12 Dic",
              mm_ultimo_riego: 123,
              mensaje: {
                msj: "Ipsum possimus dolore blanditiis neque praesentium",
                fecha: "2018-05-02"
              }
            }
          ]
        }

      ]

    };


    var colors = ["red", "green", "yellow"];

    for(var i = 0; i < 10; i++){
      var s = angular.copy(vm.items.equipos[0].sectores[0]);
      var index = _.random(0, 2, false);
      s.color = colors[index];
      vm.items.equipos[0].sectores.push(s);
    }


    for(var i = 0; i < 10; i++){
      var s = angular.copy(vm.items.equipos[0]);
      s.nombre = "Equipo "+(i+2);
      vm.items.equipos.push(s);
    }




  });
