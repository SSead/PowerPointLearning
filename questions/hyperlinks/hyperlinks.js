const data = [
    {
        q: "Insert Hyperlink",

        data: [
            {
                q: "Screen tip",
                again: [1,2,3,5],

                data: [
                    {q: "Djes"},
                    {q: "Fejsbuk"},
                    {q: "Kugla"},
                    {q: "3D Printer"}
                ]
            },

            {
                q: "Web Page",

                data: [
                    {q: "www.youtube.com"},
                    {q: "www.facebook.com"},
                    {q: "www.uquest.com"},
                    {q: "www.linkedin.com"}
                ]
            },
            {
                q: "To File",

                data: [
                    {q: "outline.docx"},
                    {q: "ppt2.pptx"}
                ]
            },

            {
                q: "Create Documnet",
                again: [4],

                data: [
                    {q: "text.txt"},
                    {q: "myFile.pptx"}
                ]
            },

            {
                q: "Edit",

                data: [
                    {q: "Edit Now"},
                    {q: "Edit Later"}
                ]
            },

            {
                q: "Place in This Document",

                data: [
                    {q: "First Slide"},
                    {q: "Last Slide"},
                    {q: "Next Slide"},
                    {q: "Previous Slide"},

                    {
                        q: "Slide",

                        data: [
                            {q: "1. Ac tortor dignissim"},
                            {q: "2. Lorem Ipsum"},
                            {q: "3. Business Team"},
                            {q: "4. Facilisis leo vel fringilla"},
                            {q: "5. Charts"},
                            {q: "6. Table"},
                            {q: "7. Video"}
                        ]
                    },

                    {q: "Custom Shows - CustomShow"}
                ]
            }

        ]
    },

    {
        q: "Insert Action",

        data: [
            {
                q: "On",
                again: [1],
                 
                data: [
                    {q: "Mouse Click"},
                    {q: "Mouse Over"}
                ]
            },

            {
                q: "Hyperlink",
                again: [2],

                data: [
                    {q: "Next Slide"},
                    {q: "Previous Slide"},
                    {q: "First Slide"},
                    {q: "Last Slide"},
                    {q: "Last Slide Viewed"},
                    {q: "End Show"},

                    {
                        q: "Slide",

                        data: [
                            {q: "1. Ac tortor dignissim"},
                            {q: "2. Lorem Ipsum"},
                            {q: "3. Business Team"},
                            {q: "4. Facilisis leo vel fringilla"},
                            {q: "5. Charts"},
                            {q: "6. Table"},
                            {q: "7. Video"}
                        ]
                    },

                    {q: "Custom Shows - CustomShow"},

                    {
                        q: "URL",
        
                        data: [
                            {q: "www.youtube.com"},
                            {q: "www.facebook.com"},
                            {q: "www.uquest.com"},
                            {q: "www.linkedin.com"}
                        ]
                    },

                    {
                        q: "Other PowerPoint Presentation - ppt2.pptx",

                        data: [
                            {q: "1. Ac tortor dignissim"},
                            {q: "2. Lorem Ipsum"},
                            {q: "3. Business Team"},
                        ]
                    },

                    {
                        q: "Ohter File",

                        data: [
                            {q: "outline.docx"}
                        ]        
                    }
                ]
            },

            {
                q: "Play Sound",

                data: [
                    {q: "Applauz"},
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
            }
        ]
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
                text += " - " + d[num].tag.text + " " + (randBetween(0, 4));
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