Highcharts.chart('mage_arcane_patchwerk', 
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
                138733,
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
                13946,
                0,
                7352,
                4288,
                8076,
                8295,
                7817,
                6238,
                6385,
                8910,
                4719,
                7841,
                9253,
                5569,
                6274,
                7449,
                7859,
                5817,
                7051,
                5990,
                7088,
                5020,
                7118,
                0,
                7363,
                5649,
                4713,
                6714,
                6689,
                5692,
                5894,
                5979,
                3687,
                0,
                6690,
                4275,
                4112,
                4121,
                4111,
                0,
                4941,
                3872,
                2937,
                3788,
                3490,
                1683,
                1817,
                1981,
                592,
                1200
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                10645,
                0,
                6536,
                4292,
                6533,
                9754,
                5133,
                6667,
                8145,
                5345,
                7733,
                6672,
                2098,
                8346,
                5001,
                6069,
                4885,
                7247,
                5319,
                5209,
                7273,
                6495,
                8886,
                5108,
                4693,
                6776,
                6022,
                3451,
                6479,
                5560,
                5968,
                7286,
                5325,
                0,
                5658,
                4183,
                4098,
                4170,
                5029,
                0,
                3540,
                4164,
                4542,
                3521,
                2968,
                2207,
                4231,
                1666,
                1320,
                0
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                11241,
                0,
                7060,
                4428,
                7013,
                6142,
                8113,
                8338,
                7519,
                6953,
                6918,
                5164,
                9309,
                4518,
                8773,
                3231,
                5948,
                5738,
                4161,
                6958,
                7040,
                5755,
                5839,
                6396,
                4282,
                4822,
                5361,
                5271,
                6473,
                2245,
                7756,
                4544,
                5406,
                0,
                5923,
                5475,
                4495,
                4695,
                3461,
                0,
                4687,
                4508,
                3080,
                3150,
                2707,
                5776,
                1579,
                1870,
                1687,
                3158
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                10088,
                0,
                6638,
                4969,
                6910,
                5818,
                4741,
                5840,
                4090,
                4268,
                3343,
                5349,
                3917,
                3572,
                4821,
                4531,
                6277,
                5802,
                6586,
                6178,
                6507,
                3418,
                5880,
                4959,
                5317,
                3709,
                5763,
                4238,
                5455,
                6346,
                6402,
                6060,
                3087,
                0,
                4247,
                3107,
                4364,
                3109,
                2796,
                0,
                3606,
                4047,
                1209,
                1864,
                3287,
                1061,
                3611,
                3846,
                2022,
                755
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                9703,
                0,
                4824,
                1043,
                5383,
                77547,
                5133,
                4614,
                4968,
                4012,
                7490,
                5075,
                6379,
                5729,
                3712,
                7009,
                4407,
                4143,
                5537,
                3335,
                3809,
                4335,
                6126,
                4695,
                4808,
                4410,
                1882,
                4593,
                4599,
                1715,
                3246,
                5233,
                3549,
                7545,
                4839,
                5057,
                3080,
                4643,
                3659,
                4371,
                2132,
                1514,
                5441,
                2174,
                1993,
                2271,
                1480,
                2321,
                1774,
                1167
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                114038,
                0,
                88684,
                4535,
                79449,
                0,
                4076,
                5207,
                6733,
                6076,
                3071,
                4872,
                3413,
                4565,
                4307,
                5119,
                3241,
                4280,
                4296,
                3535,
                5489,
                61975,
                4248,
                65210,
                2303,
                2880,
                3402,
                1188,
                4431,
                4654,
                4072,
                4586,
                2839,
                3600,
                4452,
                2632,
                3195,
                2523,
                3351,
                4892,
                3164,
                2958,
                620,
                4798,
                2579,
                3936,
                3296,
                1116,
                1396,
                0
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                93133,
                0,
                0,
                71729,
                66408,
                62729,
                64468,
                65738,
                63539,
                63707,
                64346,
                63236,
                62298,
                61100,
                60370,
                59027,
                57855,
                50539,
                0,
                48295,
                0,
                56967,
                57277,
                57442,
                56262,
                46801,
                54270,
                45341,
                44719,
                53498,
                66104,
                43976,
                50500,
                51712,
                48894,
                48372,
                60575,
                46330,
                45721,
                42349,
                39555,
                40977,
                39451,
                39360,
                36295,
                38040,
                28599
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-10-24 18:22 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/04bdb16ef310da8dd10607d537f94af64966705e\" target=\"blank\">04bdb16</a>"
    },
    title: {
        text: "Mage - Arcane - Patchwerk"
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
            "Tarnished Sentinel Medallion",
            "Kil'jaeden's Burning Wish",
            "Charm of the Rising Tide",
            "Unstable Arcanocrystal",
            "Terror From Below",
            "Tome of Unraveling Sanity",
            "PVP Badge of Dominance",
            "Moonlit Prism",
            "Whispers in the Dark",
            "Stat Stick (Versatility)",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Crit)",
            "Stat Stick (Mastery)",
            "Padawsen's Unlucky Charm",
            "Erratic Metronome",
            "Eyasu's Mulligan",
            "Infernal Writ",
            "Stat Stick (Haste)",
            "Chrono Shard",
            "Stormsinger Fulmination Charge",
            "Star Gate",
            "Spectral Thurible",
            "Reality Breacher",
            "Astral Alchemist Stone",
            "PVP Insignia of Dominance",
            "Naraxas' Spiked Tongue",
            "Horn of Valor",
            "Oakheart's Gnarled Root",
            "Deteriorated Construct Core",
            "Devilsaur Shock-Baton",
            "Bough of Corruption",
            "Twisting Wind",
            "Fury of the Burning Sky",
            "Darkmoon Deck: Hellfire",
            "Portable Manacracker",
            "Wriggling Sinew",
            "Icon of Rot",
            "Obelisk of the Void",
            "Swarming Plaguehive",
            "Infernal Alchemist Stone",
            "Toe Knee's Promise",
            "Aran's Relaxing Ruby",
            "Mrrgria's Favor",
            "Caged Horror",
            "Eye of Skovald",
            "Pharameres Forbidden Grimoire",
            "Corrupted Starlight",
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
                    text: "mean at 85598",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 85598.56,
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