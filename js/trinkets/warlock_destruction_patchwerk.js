Highcharts.chart('warlock_destruction_patchwerk', 
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
                149135,
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
                5146,
                8181,
                9249,
                6738,
                6401,
                7732,
                5611,
                8049,
                7143,
                7737,
                6294,
                7207,
                6924,
                5995,
                6879,
                4684,
                5925,
                5813,
                7612,
                0,
                6543,
                7117,
                5713,
                0,
                4531,
                6553,
                6131,
                4915,
                7851,
                6889,
                5589,
                5526,
                5586,
                5600,
                0,
                5054,
                4516,
                3297,
                4519,
                4656,
                4254,
                4805,
                4058,
                2095,
                1958,
                3480,
                2734,
                1842,
                1669
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                5501,
                7338,
                5709,
                6341,
                7678,
                7465,
                7523,
                8259,
                6627,
                7540,
                7702,
                7966,
                6561,
                7710,
                5841,
                6547,
                6265,
                6349,
                5848,
                5500,
                5788,
                5608,
                4346,
                0,
                3993,
                5786,
                5666,
                4413,
                4961,
                6575,
                3376,
                7759,
                4383,
                6328,
                0,
                4581,
                2879,
                5193,
                3263,
                2552,
                2873,
                2967,
                2205,
                4619,
                1881,
                3511,
                2194,
                2897,
                1229
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                5507,
                7100,
                6486,
                5490,
                5364,
                4614,
                5647,
                7372,
                6761,
                6037,
                5046,
                6745,
                6374,
                5774,
                5434,
                7072,
                6432,
                5724,
                6037,
                6470,
                3851,
                5334,
                4310,
                0,
                4071,
                6593,
                6676,
                4948,
                5908,
                4775,
                5522,
                4913,
                3393,
                5600,
                0,
                2577,
                3821,
                3411,
                4202,
                4096,
                3942,
                3928,
                2772,
                2049,
                3897,
                1966,
                2370,
                1925,
                2196
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                2662,
                7088,
                3715,
                6377,
                5982,
                6340,
                4898,
                4317,
                5503,
                6867,
                5742,
                3945,
                6382,
                3600,
                5413,
                5449,
                5024,
                5649,
                5402,
                6428,
                6393,
                4172,
                4517,
                0,
                5076,
                5888,
                5109,
                2422,
                4237,
                5358,
                2915,
                5259,
                3310,
                4585,
                0,
                3590,
                3750,
                3263,
                2325,
                3163,
                3359,
                3267,
                1065,
                3436,
                2921,
                3451,
                3045,
                1215,
                488
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                6677,
                5577,
                6901,
                6400,
                7041,
                5681,
                7199,
                76103,
                5677,
                3979,
                4596,
                6374,
                4841,
                6332,
                7182,
                4799,
                5870,
                5348,
                2565,
                4273,
                1603,
                4822,
                3211,
                5563,
                4243,
                4196,
                5020,
                4899,
                6290,
                6453,
                3745,
                4984,
                4904,
                4263,
                5086,
                2969,
                4572,
                3134,
                3502,
                2807,
                2085,
                2608,
                4409,
                2408,
                1764,
                1017,
                1364,
                2651,
                762
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                3312,
                83354,
                5796,
                4802,
                4482,
                5287,
                2741,
                0,
                4989,
                3855,
                5007,
                4855,
                4949,
                71164,
                3883,
                4076,
                69652,
                3374,
                4346,
                67456,
                4983,
                3120,
                3642,
                3902,
                3447,
                4192,
                4232,
                902,
                4526,
                3065,
                3093,
                4384,
                53984,
                3803,
                5498,
                4348,
                1298,
                2628,
                2985,
                3114,
                2682,
                531,
                1640,
                2006,
                2402,
                2368,
                2194,
                676,
                3705
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                106568,
                0,
                71077,
                69586,
                68665,
                68173,
                71586,
                0,
                66519,
                66823,
                67991,
                63945,
                64953,
                0,
                65383,
                67193,
                0,
                64766,
                59907,
                0,
                59448,
                57215,
                56572,
                72330,
                55286,
                47071,
                47266,
                56653,
                44125,
                43706,
                51847,
                43174,
                0,
                44847,
                62520,
                48188,
                50432,
                48631,
                48182,
                45145,
                45487,
                44360,
                44697,
                43331,
                44885,
                43010,
                40546,
                39906,
                30082
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Warlock - Destruction - Patchwerk"
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
            "Padawsen's Unlucky Charm",
            "Stat Stick (Crit)",
            "Stormsinger Fulmination Charge",
            "Tome of Unraveling Sanity",
            "Eyasu's Mulligan",
            "Stat Stick (Haste)",
            "Erratic Metronome",
            "Whispers in the Dark",
            "Infernal Writ",
            "Charm of the Rising Tide",
            "Stat Stick (Versatility)",
            "PVP Badge of Dominance",
            "Terror From Below",
            "Chrono Shard",
            "Horn of Valor",
            "Astral Alchemist Stone",
            "PVP Insignia of Dominance",
            "Obelisk of the Void",
            "Naraxas' Spiked Tongue",
            "Darkmoon Deck: Hellfire",
            "Moonlit Prism",
            "Star Gate",
            "Reality Breacher",
            "Fury of the Burning Sky",
            "Deteriorated Construct Core",
            "Portable Manacracker",
            "Devilsaur Shock-Baton",
            "Bough of Corruption",
            "Spectral Thurible",
            "Twisting Wind",
            "Infernal Alchemist Stone",
            "Oakheart's Gnarled Root",
            "Icon of Rot",
            "Aran's Relaxing Ruby",
            "Swarming Plaguehive",
            "Mrrgria's Favor",
            "Wriggling Sinew",
            "Pharameres Forbidden Grimoire",
            "Corrupted Starlight",
            "Toe Knee's Promise",
            "Caged Horror",
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
                    text: "mean at 85529",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 85529.64,
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