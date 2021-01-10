var seances = [
    {
        titre: "FRACTIONNÉ PMA 30SEC/30SEC",
        zone: 5,
        type: "serieAndRep",
        serie: 2,
        rep: 10,
        imgHref: "/img/PMA30_30Graph.PNG"
    },
    {
        titre: "FRACTIONNÉ PMA 1MIN/1MIN",
        zone: 5,
        type: "serieAndRep",
        serie: 2,
        rep: 4,
        imgHref: "/img/PMA1_1Graph.PNG"
    },
    {
        titre: "FRACTIONNÉ PMA 3MIN/3MIN",
        zone: 5,
        type: "serieAndRep",
        serie: 1,
        rep: 3,
        imgHref: "/img/PMA3_3Graph.PNG"
    },
    {
        titre: "FRACTIONNÉ SEUIL 5MIN/5MIN",
        zone: 4,
        type: "serieAndRep",
        serie: 1,
        rep: 5,
        imgHref: "/img/seuil5_5Graph.PNG"
    },
    {
        titre: "GIMENEZ",
        zone: 4,
        type: "serieAndTime",
        serie: 9,
        rep: [{type: "PMA", time: 60}, {type: "Z3", time: 180}, {type: "RECUP", time: 60}],
        imgHref: "/img/gimenezGraph.PNG"
    },
    {
        titre: "SWEET SPOT",
        zone: 3,
        type: "serieAndTime",
        serie: 2,
        rep: [{type: "SWEET SPOT", time: 1200}, {type: "RECUP", time: 600}],
        imgHref: "/img/sweet spotGraph.PNG"
    },
    {
        titre: "ENDURANCE HAUTE",
        seanceType: "ENDURANCE",
        zone: 2,
        type: "time",
        time: 90,
        imgHref: "/img/enduranceHauteGraph.PNG"
    },
    {
        titre: "ENDURANCE FONDAMENTALE",
        seanceType: "ENDURANCE",
        zone: 1,
        type: "time",
        time: 120,
        imgHref: "/img/enduranceBasseGraph.PNG"
    },
    {
        titre: "DÉBLOQUAGE",
        zone: 1,
        type: "normal",
        imgHref: "/img/debloquageGraph.PNG"
    },
    {
        titre: "TEST FC MAX",
        zone: 5,
        type: "normal",
        imgHref: "/img/testFcmaxGraph.PNG"
    },
    {
        titre: "TEST PMA",
        zone: 5,
        type: "normal",
        imgHref: "/img/testPMAGraph.PNG"
    },
];