Highcharts.chart('hunter_beast_mastery_beastlord', 
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
                333656,
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
                7308,
                17401,
                13991,
                23858,
                15074,
                20334,
                15945,
                16037,
                5652,
                10166,
                11925,
                12336,
                22324,
                19583,
                18621,
                15407,
                13027,
                10141,
                7320,
                8607,
                16164,
                19533,
                0,
                22781,
                9355,
                8119,
                17325,
                20121,
                5582,
                12509,
                4514,
                7345,
                10300,
                10925,
                9669,
                0,
                14774,
                7202,
                4686,
                3120,
                2549,
                4370,
                4858,
                2417,
                5129,
                1154,
                0
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                16502,
                21813,
                0,
                18578,
                18097,
                13858,
                12712,
                9511,
                23298,
                14779,
                16094,
                8608,
                15772,
                10946,
                9769,
                9698,
                5522,
                13492,
                13214,
                15322,
                16099,
                14695,
                5005,
                6131,
                8567,
                16019,
                9704,
                10331,
                10740,
                14375,
                12854,
                12113,
                5741,
                13978,
                4978,
                0,
                0,
                6238,
                15096,
                4669,
                6019,
                4911,
                3596,
                6234,
                7009,
                2931,
                9355
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                12486,
                9992,
                9132,
                16040,
                9002,
                5751,
                16166,
                20289,
                12890,
                16350,
                10387,
                19677,
                10302,
                7816,
                15025,
                12905,
                15934,
                12146,
                13030,
                18040,
                5426,
                8482,
                14496,
                17722,
                14859,
                13076,
                14835,
                8884,
                12287,
                8042,
                8553,
                13395,
                0,
                13000,
                7482,
                0,
                11528,
                10257,
                9236,
                5303,
                10530,
                7726,
                4893,
                7004,
                5131,
                0,
                0
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                3964,
                11321,
                11927,
                13027,
                15476,
                14510,
                8774,
                11894,
                12483,
                15527,
                9054,
                4499,
                18772,
                15692,
                12604,
                10326,
                14928,
                9580,
                10896,
                4752,
                12539,
                14667,
                20020,
                6146,
                8627,
                3457,
                12591,
                13704,
                7444,
                10609,
                1970,
                6657,
                19734,
                4934,
                9836,
                0,
                499,
                8701,
                12009,
                7451,
                5730,
                1951,
                3987,
                295,
                3686,
                447,
                7196
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                14347,
                16185,
                8897,
                12198,
                13129,
                15919,
                13506,
                11010,
                18717,
                10655,
                14160,
                13897,
                11985,
                149783,
                10114,
                11127,
                7734,
                9268,
                13139,
                10406,
                6305,
                8329,
                2554,
                10114,
                3271,
                7552,
                2409,
                9400,
                3237,
                14684,
                14928,
                10685,
                3332,
                10058,
                4116,
                8461,
                9916,
                6634,
                13650,
                438,
                2226,
                3104,
                0,
                4671,
                4044,
                5874,
                1396
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                8667,
                10298,
                9980,
                168462,
                164360,
                8810,
                5528,
                152645,
                3845,
                3893,
                10470,
                7901,
                10998,
                0,
                12013,
                9102,
                2802,
                9860,
                3280,
                13752,
                9521,
                14133,
                127690,
                7896,
                6674,
                12253,
                11711,
                5573,
                8552,
                4943,
                108830,
                9736,
                104763,
                4751,
                6109,
                10338,
                8895,
                270,
                571,
                3079,
                8756,
                5380,
                2691,
                2258,
                429,
                1037,
                1588
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                208910,
                184204,
                205216,
                0,
                0,
                147238,
                152566,
                0,
                142108,
                141553,
                139857,
                143559,
                116097,
                0,
                120892,
                130316,
                134025,
                128727,
                130083,
                119872,
                118932,
                98542,
                0,
                97940,
                116461,
                106109,
                93223,
                88872,
                107456,
                89709,
                0,
                89700,
                0,
                84779,
                99695,
                116627,
                93526,
                94687,
                75017,
                102271,
                85809,
                79229,
                88160,
                83190,
                71505,
                65753,
                62046
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Hunter - Beast_Mastery - Beastlord"
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
            "Convergence of Fates",
            "Bloodthirsty Instinct",
            "Unstable Arcanocrystal",
            "Spectral Thurible",
            "Cradle of Anguish",
            "Entwined Elemental Foci",
            "Chrono Shard",
            "Engine of Eradication",
            "Stat Stick (Haste)",
            "Stat Stick (Mastery)",
            "Stat Stick (Crit)",
            "Thrice-Accursed Compass",
            "Deteriorated Construct Core",
            "Tome of Unraveling Sanity",
            "Stat Stick (Versatility)",
            "Stormsinger Fulmination Charge",
            "Fury of the Burning Sky",
            "Icon of Rot",
            "Aran's Relaxing Ruby",
            "PVP Badge of Conquest",
            "Horn of Valor",
            "Twisting Wind",
            "Astral Alchemist Stone",
            "Six-Feather Fan",
            "Moonlit Prism",
            "PVP Insignia of Conquest",
            "Void Stalker's Contract",
            "Tirathon's Betrayal",
            "Obelisk of the Void",
            "Tempered Egg of Serpentrix",
            "Tarnished Sentinel Medallion",
            "Nightblooming Frond",
            "Terror From Below",
            "Splinters of Agronax",
            "Eye of Skovald",
            "Infernal Alchemist Stone",
            "Caged Horror",
            "Corrupted Starlight",
            "Arcanogolem Digit",
            "Unstable Horrorslime",
            "Toe Knee's Promise",
            "Mrrgria's Favor",
            "Ley Spark",
            "Elementium Bomb Squirrel Generator",
            "Oakheart's Gnarled Root",
            "Figurehead of the Naglfar",
            "Naraxas' Spiked Tongue"
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
                    text: "mean at 176396",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 176396.41666666666,
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