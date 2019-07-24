const data = [
    {
        q: "Apply transition",
        again: [0,1,2,3,4,5],

        tag: {text: "to slide ", tag: "slide"},
        data: [
            {
                q: "Cut",

                data:[
                    {q: "None"},
                    {q: "Through Black"}
                ]
            },
            {
                q: "Fade",

                data:[
                    {q: "Smoothly"},
                    {q: "Through Black"}
                ]
            },
            {
                q: "Push",

                data:[
                    {q: "From Bottom"},
                    {q: "From Top"},
                    {q: "From Left"},
                    {q: "From Right"}
                ]
            },
            {
                q: "Wipe",

                data:[
                    {q: "From Bottom"},
                    {q: "From Top"},
                    {q: "From Left"},
                    {q: "From Right"},
                    {q: "From Bottom-Right"},
                    {q: "From Top-Left"},
                    {q: "From Bottom-Left"},
                    {q: "From Top-Right"}
                ]
            },
            {
                q: "Split",

                data:[
                    {q: "Vertical Out"},
                    {q: "Vertical In"},
                    {q: "Horizontal Out"},
                    {q: "Horizontal In"},
                ]
            },
            {
                q: "Reveal",

                data:[
                    {q: "Smoothly From Right"},
                    {q: "Through Black From Right"},
                    {q: "Smoothly From Left"},
                    {q: "Through Black From Right"}
                ]
            },
            {
                q: "Random Bars",

                data:[
                    {q: "Vertical"},
                    {q: "Horizontal"}
                ]
            },
            {
                q: "Shape",

                data:[
                    {q: "Circle"},
                    {q: "Diamond"},
                    {q: "Plus"},
                    {q: "In"},
                    {q: "Out"}
                ]
            },
            {
                q: "Uncover",

                data:[
                    {q: "From Bottom"},
                    {q: "From Top"},
                    {q: "From Left"},
                    {q: "From Right"},
                    {q: "From Bottom-Right"},
                    {q: "From Top-Left"},
                    {q: "From Bottom-Left"},
                    {q: "From Top-Right"}
                ]
            },
            {
                q: "Cover",

                data:[
                    {q: "From Bottom"},
                    {q: "From Top"},
                    {q: "From Left"},
                    {q: "From Right"},
                    {q: "From Bottom-Right"},
                    {q: "From Top-Left"},
                    {q: "From Bottom-Left"},
                    {q: "From Top-Right"}
                ]
            },
            {
                q: "Flash"
            },
            {
                q: "Fall Over",

                data:[
                    {q: "Left"},
                    {q: "Right"}
                ]
            },
            {
                q: "Drape",

                data:[
                    {q: "Left"},
                    {q: "Right"}
                ]
            },
            {
                q: "Curtains"
            },
            {
                q: "Wind",

                data:[
                    {q: "Left"},
                    {q: "Right"}
                ]
            },
            {
                q: "Prestige"
            },
            {
                q: "Fracture"
            },
            {
                q: "Crush"
            },
            {
                q: "Peel Off",

                data:[
                    {q: "Left"},
                    {q: "Right"}
                ]
            },
            {
                q: "Page Curl",

                data:[
                    {q: "Double Left"},
                    {q: "Double Right"},
                    {q: "Single Left"},
                    {q: "Single Right"}
                ]
            },
            {
                q: "Airplane",

                data:[
                    {q: "Left"},
                    {q: "Right"}
                ]
            },
            {
                q: "Origami",

                data:[
                    {q: "Left"},
                    {q: "Right"}
                ]
            },
            {
                q: "Dissolve"
            },
            {
                q: "Checkerboard",

                data:[
                    {q: "From Left"},
                    {q: "From Top"}
                ]
            },
            {
                q: "Blinds",

                data:[
                    {q: "Vertical"},
                    {q: "Horizontal"}
                ]
            },
            {
                q: "Clock",

                data:[
                    {q: "Clockwise"},
                    {q: "Counterclockwise"},
                    {q: "Wedge"}
                ]
            },
            {
                q: "Ripple",

                data:[
                    {q: "Center"},
                    {q: "From Bottom-Right"},
                    {q: "From Top-Left"},
                    {q: "From Bottom-Left"},
                    {q: "From Top-Right"}
                ]
            },
            {
                q: "Honeycomb"
            },
            {
                q: "Blitter",

                data:[
                    {q: "Hexagons from Bottom"},
                    {q: "Hexagons from Top"},
                    {q: "Hexagons from Left"},
                    {q: "Hexagons from Right"},
                    {q: "Diamonds from Bottom"},
                    {q: "Diamonds from Top"},
                    {q: "Diamonds from Left"},
                    {q: "Diamonds from Right"},
                ]
            },
            {
                q: "Vortex",

                data:[
                    {q: "From Bottom"},
                    {q: "From Top"},
                    {q: "From Left"},
                    {q: "From Right"},
                ]
            },
            {
                q: "Shred",

                data:[
                    {q: "Snips In"},
                    {q: "Snips Out"},
                    {q: "Particles In"},
                    {q: "Particles Out"}
                ]
            },
            {
                q: "Switch",

                data:[
                    {q: "Left"},
                    {q: "Right"}
                ]
            },
            {
                q: "Flip",

                data:[
                    {q: "Left"},
                    {q: "Right"}
                ]
            },
            {
                q: "Gallery",

                data:[
                    {q: "From Left"},
                    {q: "From Right"}
                ]
            },
            {
                q: "Cube",

                data:[
                    {q: "From Bottom"},
                    {q: "From Top"},
                    {q: "From Left"},
                    {q: "From Right"},
                ]
            },
            {
                q: "Doors",

                data:[
                    {q: "Vertical"},
                    {q: "Horizontal"}
                ]
            },
            {
                q: "Box",

                data:[
                    {q: "From Bottom"},
                    {q: "From Top"},
                    {q: "From Left"},
                    {q: "From Right"},
                ]
            },
            {
                q: "Comb",

                data:[
                    {q: "Vertical"},
                    {q: "Horizontal"}
                ]
            },
            {
                q: "Zoom",

                data:[
                    {q: "In"},
                    {q: "Out"},
                    {q: "Zoom and Rotate"}
                ]
            },
            {
                q: "Random"
            },
            {
                q: "Pan",

                data:[
                    {q: "From Bottom"},
                    {q: "From Top"},
                    {q: "From Left"},
                    {q: "From Right"},
                ]
            },
            {
                q: "Ferris Wheel",

                data:[
                    {q: "From Left"},
                    {q: "From Right"},
                ]
            },
            {
                q: "Conveyor",

                data:[
                    {q: "From Left"},
                    {q: "From Right"},
                ]
            },
            {
                q: "Rotate",

                data:[
                    {q: "From Bottom"},
                    {q: "From Top"},
                    {q: "From Left"},
                    {q: "From Right"},
                ]
            },
            {
                q: "Window",

                data:[
                    {q: "Vertical"},
                    {q: "Horizontal"}
                ]
            },
            {
                q: "Orbit",

                data:[
                    {q: "From Bottom"},
                    {q: "From Top"},
                    {q: "From Left"},
                    {q: "From Right"},
                ]
            },
            {
                q: "Fly Through",

                data:[
                    {q: "In"},
                    {q: "Out"},
                    {q: "In with Bounce"},
                    {q: "Out with Bounce"}
                ]
            }
        ]
    },

    {
        q: "Sound",
        again: [0,1,2,3,4,5],

        data: [
            {q: "Applause"},
            {q: "Arrow"},
            {q: "Bomb"},
            {q: "Brezze"},
            {q: "Camera"},
            {q: "Cash Register"},
            {q: "Chime"},
            {q: "Click"},
            {q: "Coin"},
            {q: "Drum Roll"},
            {q: "Explotion"},
            {q: "Hammer"},
            {q: "Laser"},
            {q: "Push"},
            {q: "Suction"},
            {q: "Typewriter"},
            {q: "Voltage"},
            {q: "Woosh"},
            {q: "Wind"}
        ]
    },

    {
        q: "Duration",
        again: [0,1,2,3,4,5],

        tag: {text: "", tag: "time"}
    },

    {
        q: "Apply To All",
        again: [0,1,2,3,4,5],
    },

    {
        q: "On Mouse Click",
        again: [0,1,2,3,4,5],
    },

    {
        q: "After",
        again: [0,1,2,3,4,5],

        tag: {text: "", tag: "time"}
    }
]

const sections = ["Intro", "Main"]
const tableStyles = [{name: "Light", s: 3}, {name: "Medium", s: 4}, {name: "Dark", s: 2}]
const gradientPresets = ["Light Gradient", "Top Spotlight", "Medium Gradient", "Bottom Spotlight", "Radial Gradient"]
const glowL = [5, 8, 11, 18]

randBetween = (begin, end) => {
    return Math.round(Math.random() * (end - begin)) + begin
}

genQeustion = () => {
    document.getElementById("question").textContent = rGenerate(data)
}

rGenerate = (d) => {

    console.log(d)
    var done = []
    var num = randBetween(0, d.length - 1)

    var text = ""
    while(1) {
        text += d[num].q

        if (d[num].tag != null) {
            if (d[num].tag.tag === "slide") {
                text += " - " + d[num].tag.text + " " + (randBetween(0, 7));
            }

            else if (d[num].tag.tag === "section") {
                text += " - " + d[num].tag.text + " " + sections[randBetween(0, 1)]
            }

            else if (d[num].tag.tag === "tableSize") {
                text += " - " + d[num].tag.text + " " + randBetween(1, 10) + "x" + randBetween(1, 10)
            }

            else if (d[num].tag.tag === "tableStyle") {
                var ts = randBetween(0, 2)
                text += " - " + tableStyles[ts].name + " Style " + randBetween(1, tableStyles[ts].s - 1) 
                ts = randBetween(0, 6)

                if (ts != 0) text += " - Accent " + ts
            }

            else if (d[num].tag.tag === "rgb" || d[num].tag.tag == "hsl") {
                text += " - " + "(" + randBetween(0, 255) + ", " + randBetween(0, 255) + ", " + randBetween(0, 255) + ")"
            }

            else if (d[num].tag.tag === "gradientPreset") {
                text += " - " + gradientPresets[randBetween(0, 5)] + " - Accent " + randBetween(1, 6) 
            }

            else if (d[num].tag.tag === "borderWidth") {
                text += " " + (randBetween(0, 1000) / 100) + " pt"
            }

            else if (d[num].tag.tag === "glow") {
                text += " " + glowL[randBetween(0, 3)] + " pt glow, Accent color" + randBetween(1, 6)
            }

            else if (d[num].tag.tag === "percentage") {
                text += " " + randBetween(1, 100) + "%"
            }

            else if (d[num].tag.tag === "bcPreset") {
                text += " Brightness: " + (randBetween(-2, 2) * 20) + "%, Contrast: " + (randBetween(-2, 2) * 20) + "%"
            }

            else if (d[num].tag.tag === "colorTemp") {
                text += " " + randBetween(1, 11500) + " K"
            }

            else if (d[num].tag.tag == "angle") {
                text += randBetween(0, 360)
            }

            else if (d[num].tag.tag == "trim") {
                var x = randBetween(0, 3)
                text += " " + x + ":00 to " + (x + randBetween(1, 2)) + ":00"
            }

            else if (d[num].tag.tag === "fade") {
                text += " " + randBetween(1,3)
            }

            else if (d[num].tag.tag === "time") {
                text += " " + (randBetween(0, 1000) / 100)
            }
        }
        
        if (d[num].data != null) text += " - " + rGenerate(d[num].data)
        
        if (d[num].again == null) break
        console.log(randBetween(0, d[num].again.length - 1))
        done.push(num)

        var n = d[num].again[randBetween(0, d[num].again.length - 1)]

        if (!done.includes(n)) {
            text += " /// "
            num = n
        } else break
    }
    return text;
    
}

document.getElementById("next").onclick = genQeustion