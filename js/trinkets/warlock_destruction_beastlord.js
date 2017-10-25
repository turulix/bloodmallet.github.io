Highcharts.chart('warlock_destruction_beastlord', 
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
                229465,
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
                13855,
                1473,
                17249,
                14563,
                14598,
                14053,
                18723,
                13862,
                10674,
                13727,
                9296,
                11240,
                4966,
                11044,
                9404,
                8515,
                7622,
                10420,
                14267,
                8684,
                12922,
                8455,
                9220,
                3826,
                9690,
                5307,
                6895,
                5769,
                7397,
                6151,
                8746,
                0,
                0,
                2981,
                4131,
                1701,
                7666,
                4025,
                10373,
                5051,
                0,
                7190,
                3417,
                4858,
                870,
                2337,
                0,
                0,
                0
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                14177,
                10239,
                14358,
                15306,
                8952,
                11584,
                12267,
                6508,
                9484,
                5800,
                13362,
                10027,
                9554,
                7723,
                7094,
                10232,
                4213,
                10704,
                10649,
                6600,
                5964,
                7906,
                4546,
                8318,
                8209,
                7890,
                3874,
                3834,
                9869,
                9584,
                6832,
                0,
                5736,
                5925,
                3605,
                9092,
                4236,
                5472,
                0,
                5102,
                0,
                4976,
                194,
                5477,
                8368,
                4678,
                5030,
                1259,
                5124
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                15429,
                11940,
                9881,
                5629,
                9441,
                15226,
                9482,
                1715,
                7375,
                8906,
                7292,
                8855,
                10434,
                5932,
                5403,
                9116,
                11102,
                5575,
                9707,
                6318,
                7066,
                8279,
                6597,
                8047,
                9691,
                5620,
                8102,
                9903,
                7449,
                11389,
                4678,
                0,
                4560,
                3363,
                6282,
                0,
                6395,
                4015,
                5728,
                6822,
                0,
                4679,
                8136,
                8045,
                1812,
                4000,
                1990,
                6358,
                0
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                11072,
                0,
                4683,
                10594,
                9315,
                7002,
                3439,
                19035,
                6559,
                10804,
                5920,
                3229,
                3383,
                14285,
                11119,
                4149,
                4712,
                10133,
                9459,
                9795,
                6843,
                1481,
                13337,
                6480,
                5513,
                7801,
                7305,
                7523,
                10049,
                3524,
                11333,
                0,
                8555,
                8209,
                1207,
                10974,
                3998,
                3878,
                5899,
                3355,
                0,
                7858,
                5452,
                0,
                3338,
                5619,
                997,
                0,
                2747
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                13952,
                7770,
                9174,
                5720,
                9816,
                8122,
                13401,
                780,
                6070,
                4849,
                9783,
                15084,
                12139,
                3266,
                4647,
                8893,
                5841,
                89825,
                5626,
                3716,
                10082,
                14183,
                0,
                6926,
                5869,
                4275,
                5881,
                3679,
                5085,
                9230,
                6270,
                2468,
                6944,
                2840,
                4807,
                5851,
                3417,
                1773,
                987,
                3892,
                9062,
                3848,
                2110,
                1864,
                5736,
                3626,
                7059,
                2780,
                2960
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                142404,
                4052,
                3362,
                10065,
                5761,
                10858,
                9084,
                98569,
                2492,
                5671,
                4715,
                1670,
                2648,
                6384,
                12226,
                5329,
                9975,
                0,
                7703,
                87997,
                2478,
                5691,
                9042,
                1917,
                6460,
                3577,
                73250,
                1047,
                7077,
                4432,
                676,
                12913,
                73566,
                2846,
                1626,
                407,
                5361,
                4463,
                4544,
                4624,
                1174,
                4239,
                0,
                5597,
                3589,
                0,
                0,
                3814,
                3900
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                141833,
                104853,
                101413,
                99400,
                83670,
                76708,
                0,
                94197,
                86734,
                85890,
                85500,
                92273,
                85811,
                84203,
                84994,
                83395,
                0,
                66218,
                0,
                76153,
                75402,
                77247,
                72294,
                62338,
                71126,
                0,
                72895,
                57063,
                58410,
                62500,
                84772,
                0,
                67872,
                70118,
                64365,
                59124,
                64191,
                58578,
                55558,
                72408,
                48234,
                57625,
                51497,
                48051,
                50973,
                43140,
                39148,
                34620
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Warlock - Destruction - Beastlord"
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
            "Spectral Thurible",
            "Unstable Arcanocrystal",
            "Aran's Relaxing Ruby",
            "Fury of the Burning Sky",
            "Icon of Rot",
            "Star Gate",
            "Deteriorated Construct Core",
            "Charm of the Rising Tide",
            "Erratic Metronome",
            "Eyasu's Mulligan",
            "Whispers in the Dark",
            "Stat Stick (Mastery)",
            "Padawsen's Unlucky Charm",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Stat Stick (Crit)",
            "Tome of Unraveling Sanity",
            "Reality Breacher",
            "Tarnished Sentinel Medallion",
            "Infernal Writ",
            "Stat Stick (Versatility)",
            "Stormsinger Fulmination Charge",
            "Moonlit Prism",
            "PVP Badge of Dominance",
            "Eye of Skovald",
            "Terror From Below",
            "Horn of Valor",
            "Bough of Corruption",
            "Twisting Wind",
            "PVP Insignia of Dominance",
            "Darkmoon Deck: Hellfire",
            "Astral Alchemist Stone",
            "Caged Horror",
            "Unstable Horrorslime",
            "Corrupted Starlight",
            "Obelisk of the Void",
            "Toe Knee's Promise",
            "Elementium Bomb Squirrel Generator",
            "Devilsaur Shock-Baton",
            "Infernal Alchemist Stone",
            "Portable Manacracker",
            "Swarming Plaguehive",
            "Mrrgria's Favor",
            "Wriggling Sinew",
            "Oakheart's Gnarled Root",
            "Naraxas' Spiked Tongue",
            "Pharameres Forbidden Grimoire",
            "Figurehead of the Naglfar"
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
                    text: "mean at 114981",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 114981.82,
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