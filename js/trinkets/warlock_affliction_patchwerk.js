Highcharts.chart('warlock_affliction_patchwerk', 
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
                156136,
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
                6617,
                10094,
                8540,
                8175,
                8933,
                8289,
                7738,
                9032,
                8195,
                7791,
                9586,
                6915,
                7017,
                7680,
                6891,
                8470,
                5592,
                6717,
                7074,
                6836,
                0,
                6537,
                4939,
                5243,
                5016,
                4314,
                8613,
                0,
                5288,
                9404,
                3540,
                4442,
                7804,
                8666,
                4754,
                7677,
                4023,
                4547,
                0,
                5162,
                3596,
                4300,
                2538,
                5269,
                2082,
                2513,
                2243,
                1793,
                1668
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                6099,
                9013,
                5854,
                6912,
                8732,
                7086,
                9089,
                5569,
                6955,
                6521,
                7752,
                6462,
                6612,
                5033,
                7419,
                7183,
                6836,
                5653,
                4701,
                5455,
                5943,
                4825,
                5707,
                4672,
                5076,
                5304,
                6250,
                0,
                3792,
                7001,
                7125,
                4982,
                6768,
                5675,
                4514,
                7225,
                3897,
                6091,
                0,
                2762,
                3121,
                2888,
                3642,
                2329,
                3463,
                2640,
                4479,
                3253,
                2285
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                3063,
                8488,
                6256,
                6908,
                6027,
                5768,
                5321,
                8797,
                5512,
                6663,
                6670,
                7394,
                6334,
                7029,
                5030,
                3938,
                5905,
                7264,
                5254,
                3128,
                4874,
                5172,
                5252,
                6567,
                6688,
                5004,
                6970,
                0,
                4653,
                5463,
                3409,
                4927,
                6561,
                6322,
                3318,
                4550,
                4730,
                8010,
                0,
                4347,
                4290,
                2653,
                4766,
                4110,
                3953,
                3607,
                1635,
                1006,
                432
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                6938,
                6595,
                6975,
                5399,
                5329,
                6900,
                4510,
                4148,
                7764,
                5374,
                7551,
                5527,
                5775,
                6965,
                6719,
                6392,
                6989,
                6278,
                5799,
                4571,
                4852,
                5164,
                5669,
                5541,
                3050,
                3613,
                4385,
                0,
                3442,
                5558,
                2765,
                4267,
                4912,
                5193,
                5632,
                5303,
                4115,
                3443,
                0,
                2974,
                1745,
                4521,
                3231,
                2992,
                4381,
                3627,
                2596,
                2384,
                2619
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                4972,
                6113,
                5901,
                5430,
                7061,
                4973,
                5870,
                5464,
                4260,
                5901,
                79196,
                4560,
                4941,
                5666,
                4375,
                4798,
                5423,
                3408,
                5740,
                3597,
                4495,
                4629,
                3221,
                2821,
                4234,
                4447,
                7016,
                3548,
                5592,
                4261,
                5177,
                3407,
                4479,
                5495,
                3434,
                4999,
                3151,
                5549,
                6104,
                3302,
                3402,
                1741,
                2587,
                2634,
                2395,
                1436,
                1532,
                2394,
                0
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                4740,
                94541,
                4462,
                4918,
                5735,
                81284,
                5139,
                5485,
                6248,
                4289,
                0,
                5790,
                6649,
                76610,
                5194,
                4711,
                4357,
                6502,
                2476,
                4699,
                70570,
                4275,
                4006,
                4466,
                65196,
                2782,
                4861,
                6840,
                4186,
                5848,
                3729,
                4213,
                5291,
                4979,
                3380,
                4749,
                2251,
                4438,
                3577,
                3002,
                1610,
                4137,
                3541,
                3895,
                1391,
                2903,
                1774,
                0,
                2381
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                122784,
                0,
                77713,
                77733,
                73347,
                0,
                75300,
                74000,
                72421,
                74624,
                0,
                73436,
                71723,
                0,
                72619,
                69641,
                68837,
                63175,
                64951,
                66182,
                0,
                59592,
                60896,
                60238,
                0,
                63576,
                49878,
                76630,
                58882,
                48121,
                59867,
                57351,
                46696,
                45829,
                56623,
                46604,
                56634,
                45087,
                65637,
                52051,
                54534,
                51730,
                49713,
                47548,
                49286,
                49136,
                45146,
                47754,
                36507
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Warlock - Affliction - Patchwerk"
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
            "Tarnished Sentinel Medallion",
            "Stat Stick (Mastery)",
            "Dreadstone of Endless Shadows",
            "Whispers in the Dark",
            "Terror From Below",
            "Padawsen's Unlucky Charm",
            "Erratic Metronome",
            "Eyasu's Mulligan",
            "Stat Stick (Crit)",
            "Tome of Unraveling Sanity",
            "Stat Stick (Haste)",
            "Stormsinger Fulmination Charge",
            "Charm of the Rising Tide",
            "Chrono Shard",
            "Infernal Writ",
            "Stat Stick (Versatility)",
            "PVP Badge of Dominance",
            "Moonlit Prism",
            "Naraxas' Spiked Tongue",
            "Astral Alchemist Stone",
            "Horn of Valor",
            "Obelisk of the Void",
            "PVP Insignia of Dominance",
            "Spectral Thurible",
            "Fury of the Burning Sky",
            "Reality Breacher",
            "Darkmoon Deck: Hellfire",
            "Icon of Rot",
            "Star Gate",
            "Devilsaur Shock-Baton",
            "Oakheart's Gnarled Root",
            "Twisting Wind",
            "Deteriorated Construct Core",
            "Swarming Plaguehive",
            "Bough of Corruption",
            "Aran's Relaxing Ruby",
            "Portable Manacracker",
            "Infernal Alchemist Stone",
            "Pharameres Forbidden Grimoire",
            "Corrupted Starlight",
            "Caged Horror",
            "Mrrgria's Favor",
            "Toe Knee's Promise",
            "Wriggling Sinew",
            "Eye of Skovald",
            "Elementium Bomb Squirrel Generator",
            "Unstable Horrorslime",
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
                    text: "mean at 93310",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 93310.44,
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