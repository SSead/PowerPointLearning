const data = [
    {
        q: "Theme",

        data: [
            {q: "Atlas"},
            {q: "Badge"},
            {q: "Banded"},
            {q: "Basis"},
            {q: "Berlin"},
            {q: "Celestial"},
            {q: "Cuircut"},
            {q: "Crop"},
            {q: "Damask"},
            {q: "Depht"},
            {q: "Dividend"},
            {q: "Droplet"},
            {q: "Facet"},
            {q: "Feathered"},
            {q: "Frame"},
            {q: "Gallery"},
            {q: "Headlines"},
            {q: "Integral"},
            {q: "Ion"},
            {q: "Ion Boardroom"},
            {q: "Madison"},
            {q: "Main Event"},
            {q: "Mesh"},
            {q: "Metropolitan"},
            {q: "Organic"},
            {q: "Parallax"},
            {q: "Parcel"},
            {q: "Quotable"},
            {q: "Retrospect"},
            {q: "Savon"},
            {q: "Steal"},
            {q: "Slice"},
            {q: "Vapor Trail"},
            {q: "View"},
            {q: "Wisp"},
            {q: "Wood Type"},
            {q: "From File"}
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

            else if (d[num].tag.tag == "trim") {
                var d = randBetween(0, 3)
                text += " " + d + ":00 to " + (d + randBetween(1, 2)) + ":00"
            }

            else if (d[num].tag.tag === "fade") {
                text += " " + randBetween(1,3)
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