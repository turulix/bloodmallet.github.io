Highcharts.chart('shaman_enhancement_patchwerk', 
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
                178791,
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
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                0,
                4373,
                10011,
                9663,
                9179,
                9157,
                11099,
                10974,
                7751,
                5975,
                10942,
                9359,
                11242,
                9590,
                9105,
                8310,
                9911,
                7936,
                7240,
                9920,
                7766,
                8623,
                9910,
                9448,
                7178,
                0,
                7259,
                6812,
                8554,
                8356,
                8583,
                7717,
                8608,
                4116,
                0,
                4240,
                6256,
                0,
                4384,
                4521,
                5921,
                3130,
                3148,
                2733,
                3861,
                6985,
                2059,
                3961,
                4000,
                2347
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                5569,
                8923,
                9398,
                9454,
                8518,
                10808,
                8769,
                9698,
                7192,
                7318,
                8877,
                6872,
                7485,
                9052,
                7701,
                10636,
                6712,
                11424,
                5522,
                7462,
                8386,
                9315,
                9220,
                8813,
                7889,
                4493,
                7091,
                7921,
                8469,
                7609,
                8414,
                6723,
                3356,
                0,
                1226,
                4357,
                0,
                3496,
                6493,
                3389,
                3414,
                1667,
                4304,
                1959,
                5842,
                2482,
                1573,
                2479,
                3847
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                4588,
                7342,
                9111,
                6837,
                7063,
                9000,
                13983,
                4673,
                8655,
                6457,
                7745,
                7665,
                6868,
                7934,
                6958,
                9269,
                9336,
                9146,
                9099,
                8012,
                8215,
                8241,
                8694,
                7169,
                5232,
                6510,
                5074,
                7430,
                8168,
                5951,
                5584,
                8374,
                3892,
                0,
                9782,
                5109,
                0,
                3029,
                2496,
                5003,
                1123,
                0,
                1784,
                927,
                5105,
                3713,
                3958,
                2151,
                1288
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                5226,
                8764,
                6176,
                6691,
                8016,
                9904,
                7767,
                8261,
                3764,
                7134,
                5304,
                6977,
                7588,
                5449,
                7011,
                7437,
                5220,
                9411,
                6862,
                6442,
                4740,
                6893,
                7228,
                4097,
                8512,
                5201,
                6365,
                7305,
                7087,
                6486,
                7052,
                4477,
                3064,
                0,
                3293,
                4764,
                0,
                3151,
                4334,
                4460,
                4202,
                1502,
                2953,
                3668,
                5914,
                2971,
                1610,
                1872,
                1389
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                3067,
                6231,
                7325,
                6605,
                8848,
                7341,
                4890,
                5189,
                6106,
                5353,
                6268,
                6404,
                3516,
                5713,
                7041,
                83490,
                7066,
                7560,
                5633,
                5683,
                5213,
                5348,
                5951,
                6190,
                5239,
                5644,
                5102,
                4854,
                3759,
                5070,
                7290,
                5855,
                4378,
                7448,
                3468,
                2307,
                5426,
                3727,
                3079,
                2357,
                2056,
                381,
                4464,
                668,
                4749,
                2949,
                0,
                2096,
                157
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                5516,
                8994,
                98856,
                6725,
                5077,
                8458,
                4720,
                6457,
                6588,
                7415,
                6414,
                84950,
                7118,
                6464,
                6736,
                0,
                7414,
                5950,
                4571,
                7352,
                6099,
                71654,
                4084,
                6294,
                77137,
                4751,
                69667,
                6857,
                6442,
                4660,
                4884,
                5377,
                2551,
                3429,
                701,
                5303,
                6011,
                2576,
                3534,
                56739,
                2585,
                2408,
                1845,
                3704,
                3584,
                999,
                3991,
                2192,
                3543
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                115627,
                93606,
                0,
                92507,
                90994,
                75296,
                80419,
                88107,
                87703,
                80159,
                80712,
                0,
                79791,
                77447,
                77350,
                0,
                76843,
                69763,
                78055,
                76456,
                74407,
                0,
                64695,
                67872,
                0,
                66258,
                0,
                56247,
                56610,
                59781,
                56505,
                54912,
                70616,
                80752,
                64541,
                56847,
                71924,
                59498,
                54550,
                0,
                57028,
                54561,
                44072,
                46446,
                28897,
                43450,
                42428,
                39265,
                36914
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Shaman - Enhancement - Patchwerk"
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
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Bloodthirsty Instinct",
            "Cradle of Anguish",
            "Chaos Talisman",
            "Eye of Command",
            "Six-Feather Fan",
            "Thrice-Accursed Compass",
            "Stat Stick (Haste)",
            "Convergence of Fates",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Engine of Eradication",
            "Chrono Shard",
            "Stat Stick (Versatility)",
            "PVP Badge of Conquest",
            "Specter of Betrayal",
            "Stat Stick (Mastery)",
            "Nightblooming Frond",
            "Nightmare Egg Shell",
            "Stat Stick (Crit)",
            "Horn of Valor",
            "Vial of Ceaseless Toxins",
            "Tempered Egg of Serpentrix",
            "Gift of Radiance",
            "Astral Alchemist Stone",
            "PVP Insignia of Conquest",
            "Infernal Cinders",
            "Tirathon's Betrayal",
            "Bloodstained Handkerchief",
            "Splinters of Agronax",
            "Arcanogolem Digit",
            "Void Stalker's Contract",
            "Spontaneous Appendages",
            "Darkmoon Deck: Dominion",
            "Nature's Call",
            "Faulty Countermeasure",
            "Infernal Alchemist Stone",
            "Toe Knee's Promise",
            "The Devilsaur's Bite",
            "Umbral Moonglaives",
            "Spiked Counterweight",
            "Ley Spark",
            "Terrorbound Nexus",
            "Ravaged Seed Pod",
            "Draught of Souls",
            "Tiny Oozeling in a Jar",
            "Mark of Dargrul",
            "Giant Ornamental Pearl",
            "Windscar Whetstone"
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
                    text: "mean at 103861",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 103861.92,
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