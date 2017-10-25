Highcharts.chart('rogue_subtlety_patchwerk',
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                0,
                162870,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                12615,
                0,
                7558,
                12257,
                7387,
                11152,
                9368,
                8548,
                9427,
                10429,
                9158,
                8876,
                8417,
                4809,
                8271,
                8606,
                8891,
                9942,
                7952,
                7243,
                5343,
                9641,
                9022,
                0,
                9706,
                9143,
                9923,
                7263,
                8761,
                10999,
                5415,
                10772,
                6710,
                5784,
                0,
                0,
                4454,
                4899,
                2808,
                2485,
                3662,
                9352,
                2539,
                1801,
                2471,
                2820,
                2662,
                3522,
                0,
                1882
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                15151,
                0,
                9194,
                9423,
                8969,
                10025,
                7586,
                6790,
                7808,
                8177,
                7951,
                7067,
                8760,
                5021,
                8626,
                8107,
                10783,
                5091,
                9404,
                7276,
                7455,
                7053,
                8639,
                6346,
                5775,
                8797,
                8398,
                8363,
                7268,
                7171,
                6678,
                6532,
                8158,
                5388,
                0,
                0,
                4819,
                4649,
                3598,
                2757,
                2469,
                4907,
                2671,
                1736,
                4060,
                2451,
                519,
                1559,
                1964,
                863
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                11577,
                0,
                9873,
                10086,
                7214,
                10997,
                8144,
                8133,
                5680,
                7394,
                6083,
                7802,
                8200,
                3299,
                7599,
                6463,
                7518,
                8039,
                5442,
                6544,
                7557,
                7362,
                6752,
                6641,
                4995,
                7440,
                8878,
                7881,
                6815,
                6287,
                7379,
                8895,
                7628,
                6822,
                0,
                0,
                4577,
                2889,
                2290,
                3972,
                2408,
                4341,
                1875,
                3305,
                1471,
                1835,
                2400,
                2146,
                776,
                2375
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                11491,
                0,
                7092,
                9524,
                6614,
                5812,
                7075,
                6598,
                8963,
                6040,
                7824,
                8068,
                5360,
                4283,
                7615,
                7208,
                8600,
                3021,
                7238,
                6011,
                4629,
                5853,
                8238,
                6699,
                4946,
                8193,
                6166,
                3468,
                5884,
                6239,
                5714,
                5383,
                4181,
                4935,
                0,
                0,
                4448,
                3336,
                2832,
                5276,
                2612,
                6327,
                2873,
                3478,
                1220,
                2517,
                1914,
                1353,
                0,
                629
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                112506,
                0,
                5045,
                8046,
                4702,
                7618,
                5888,
                8699,
                6956,
                7485,
                6944,
                5944,
                5790,
                3276,
                4967,
                5711,
                4650,
                7253,
                4811,
                5607,
                7327,
                6323,
                4836,
                7319,
                6737,
                4822,
                6318,
                7977,
                6088,
                6990,
                3066,
                7388,
                7151,
                3926,
                4818,
                6098,
                1384,
                4120,
                3391,
                1685,
                2270,
                4916,
                2440,
                1168,
                1679,
                2550,
                1504,
                2245,
                1478,
                2583
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                6190,
                7081,
                4943,
                77110,
                84433,
                2999,
                4272,
                5847,
                79347,
                4137,
                5239,
                2254,
                4404,
                5061,
                7427,
                6448,
                6039,
                6290,
                73506,
                4398,
                7142,
                75024,
                3483,
                4898,
                4353,
                4046,
                4740,
                6016,
                6754,
                3614,
                2716,
                66258,
                6897,
                5122,
                3332,
                1534,
                3246,
                2586,
                1796,
                3847,
                1472,
                2141,
                3847,
                1362,
                851,
                1128,
                613,
                1380
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                88578,
                75595,
                87624,
                0,
                0,
                79153,
                77270,
                73737,
                0,
                74873,
                73201,
                91659,
                72815,
                72487,
                65237,
                70305,
                68676,
                68101,
                0,
                64403,
                58726,
                0,
                65842,
                58150,
                57301,
                62298,
                61333,
                56505,
                63820,
                54885,
                58256,
                0,
                76117,
                71636,
                52763,
                47646,
                43734,
                42836,
                45482,
                23218,
                37455,
                37308,
                35681,
                35581,
                35351,
                29661,
                34984,
                26800
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Rogue - Subtlety DfA - Patchwerk"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Specter of Betrayal",
            "Kil'jaeden's Burning Wish",
            "Eye of Command",
            "Nightblooming Frond",
            "Convergence of Fates",
            "Vial of Ceaseless Toxins",
            "Engine of Eradication",
            "Stat Stick (Mastery)",
            "Stat Stick (Versatility)",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Stat Stick (Crit)",
            "Entwined Elemental Foci",
            "Unstable Arcanocrystal",
            "Thrice-Accursed Compass",
            "Memento of Angerboda",
            "Six-Feather Fan",
            "Bloodthirsty Instinct",
            "Stat Stick (Haste)",
            "Gift of Radiance",
            "Umbral Moonglaives",
            "PVP Badge of Conquest",
            "Arcanogolem Digit",
            "Astral Alchemist Stone",
            "Horn of Valor",
            "Bloodstained Handkerchief",
            "Void Stalker's Contract",
            "Chrono Shard",
            "Nightmare Egg Shell",
            "Tirathon's Betrayal",
            "PVP Insignia of Conquest",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "Infernal Cinders",
            "Darkmoon Deck: Dominion",
            "Infernal Alchemist Stone",
            "The Devilsaur's Bite",
            "Spontaneous Appendages",
            "Terrorbound Nexus",
            "Faulty Countermeasure",
            "Nature's Call",
            "Draught of Souls",
            "Windscar Whetstone",
            "Mark of Dargrul",
            "Tiny Oozeling in a Jar",
            "Spiked Counterweight",
            "Giant Ornamental Pearl",
            "Toe Knee's Promise",
            "Ley Spark",
            "Ravaged Seed Pod"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 95679",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 95679.58,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});
