const data = [
    {
        q: "Insert slide",
        tag: {text: "After slide", tag: "slide"},

        data: [
            {q: "Title Slide"},
            {q: "Title and Content"},
            {q: "Section Header"},
            {q: "Two Content"},
            {q: "Comparison"},
            {q: "Title Only"},
            {q: "Blank"},
            {q: "Content with Caption"},
            {q: "Picture with Caption"}
        ]
    },
    {
        q: "Duplicate slide",
        tag: {text: "Slide", tag: "slide"}
    },
    {
        q: "Hide slide",
        tag: {text: "Slide", tag: "slide"}
    },
    {
        q: "Insert slide from outline",
        tag: {text: "After slide", tag: "slide"}
    },
    {
        q: "Reuse slides",
        tag: {text: "After slide", tag: "slide"},
        data: [
            {q: "Slide 1"},
            {q: "Slide 2"},
            {q: "Slide 3"},
            {q: "Slide 4"},
            {q: "Slides 1,2"},
            {q: "Slides 1,3"},
            {q: "Slides 1,4"},
            {q: "Slides 1,2,3"},
            {q: "Slides 1,2,4"},
            {q: "Slides 1,3,4"},
            {q: "Slides 2,3"},
            {q: "Slides 2,4"},
            {q: "Slides 2,3,4"},
        ]
    },
    {
        q: "Change slide layout",
        tag: {text: "Slide", tag: "slide"},

        data: [
            {q: "Title Slide"},
            {q: "Title and Content"},
            {q: "Section Header"},
            {q: "Two Content"},
            {q: "Comparison"},
            {q: "Title Only"},
            {q: "Blank"},
            {q: "Content with Caption"},
            {q: "Picture with Caption"}
        ]
    },
    {
        q: "Insert Section",
        tag: {text: "Slide", tag: "slide"},

        data: [
            {q: "name: Djes"},
            {q: "name: Introduction"},
            {q: "name: uQuest"},
            {q: "name: TraceBrace"},
            {q: "name: Omar Hurem - 3D printer"},
            {q: "name: Sta ima"}
        ]
    },
    {
        q: "Rename Section",
        tag: {text: "Section", tag: "section"},

        data: [
            {q: "name: Djes"},
            {q: "name: Introduction"},
            {q: "name: uQuest"},
            {q: "name: TraceBrace"},
            {q: "name: Omar Hurem - 3D printer"},
            {q: "name: Sta ima"}
        ]
    },
    {
        q: "Remove Section",
        tag: {text: "Section", tag: "section"},
    },
    {
        q: "Remove all Sections",
    },
]

const sections = ["Intro", "Main"]

randBetween = (begin, end) => {
    return Math.round(Math.random() * (end - begin)) + begin
}

genQeustion = () => {
    //console.log( rGenerate(data))
    document.getElementById("question").textContent = rGenerate(data)
}

rGenerate = (d) => {
    var num = randBetween(0, d.length - 1)
    
    var text = d[num].q

    if (d[num].tag != null) {
        if (d[num].tag.tag === "slide") {
            text += " - " + d[num].tag.text + " " + (randBetween(0, 4));
        }

        if (d[num].tag.tag === "section") {
            text += " - " + d[num].tag.text + " " + sections[randBetween(0, 1)]
        }
    }
    console.log
    if (d[num].data != null) return text + " - " + rGenerate(d[num].data)
    else return text
}

document.getElementById("next").onclick = genQeustion