const data = [
    {
        q: "Insert table",
        tag: {text: "Table Size", tag: "tableSize"},
        again: [1]
    },

    {
        q: "Format table",

        data: [
            {
                q: "Set Header Row",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
            },
            {
                q: "Set Total Row",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
            },
            {
                q: "Set Banded Rows",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
            },
            {
                q: "Set First Column",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
            },
            {
                q: "Set Last Column",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
            },
            {
                q: "Set Banded Columns",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
            },
            {
                q: "Set Table Style",
                tag: {text: "", tag: "tableStyle"},
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
            },
            {
                q: "Set Cell Shading",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],

                data: [
                    {
                        q: "Color",
                        data: [
                            {q: "Backgroud 1"},
                            {q: "Text 1"},
                            {q: "Backgroud 2"},
                            {q: "Text 2"},
                            {q: "Accent 1"},
                            {q: "Accent 2"},
                            {q: "Accent 3"},
                            {q: "Accent 4"},
                            {q: "Accent 5"},
                            {q: "Accent 6"},
                            {q: "Backgroud 1 - Darker 5%"},
                            {q: "Backgroud 1 - Darker 15%"},
                            {q: "Backgroud 1 - Darker 25%"},
                            {q: "Backgroud 1 - Darker 35%"},
                            {q: "Backgroud 1 - Darker 50%"},
                            {q: "Text 1 - Lighter 5%"},
                            {q: "Text 1 - Lighter 15%"},
                            {q: "Text 1 - Lighter 25%"},
                            {q: "Text 1 - Lighter 35%"},
                            {q: "Text 1 - Lighter 50%"},
                            {q: "Backgroud 2 - Darker 10%"},
                            {q: "Backgroud 2 - Darker 25%"},
                            {q: "Backgroud 2 - Darker 50%"},
                            {q: "Backgroud 2 - Darker 75%"},
                            {q: "Backgroud 2 - Darker 90%"},
                            {q: "Text 2 - Lighter 80%"},
                            {q: "Text 2 - Lighter 60%"},
                            {q: "Text 2 - Lighter 40%"},
                            {q: "Text 2 - Darker 25%"},
                            {q: "Text 2 - Darker 50%"},
                            {q: "Accent 1 - Lighter 80%"},
                            {q: "Accent 1 - Lighter 60%"},
                            {q: "Accent 1 - Lighter 40%"},
                            {q: "Accent 1 - Darker 25%"},
                            {q: "Accent 1 - Darker 50%"},
                            {q: "Accent 2 - Lighter 80%"},
                            {q: "Accent 2 - Lighter 60%"},
                            {q: "Accent 2 - Lighter 40%"},
                            {q: "Accent 2 - Darker 25%"},
                            {q: "Accent 2 - Darker 50%"},
                            {q: "Accent 3 - Lighter 80%"},
                            {q: "Accent 3 - Lighter 60%"},
                            {q: "Accent 3 - Lighter 40%"},
                            {q: "Accent 3 - Darker 25%"},
                            {q: "Accent 3 - Darker 50%"},
                            {q: "Accent 4 - Lighter 80%"},
                            {q: "Accent 4 - Lighter 60%"},
                            {q: "Accent 4 - Lighter 40%"},
                            {q: "Accent 4 - Darker 25%"},
                            {q: "Accent 4 - Darker 50%"},
                            {q: "Accent 5 - Lighter 80%"},
                            {q: "Accent 5 - Lighter 60%"},
                            {q: "Accent 5 - Lighter 40%"},
                            {q: "Accent 5 - Darker 25%"},
                            {q: "Accent 5 - Darker 50%"},
                            {q: "Accent 6 - Lighter 80%"},
                            {q: "Accent 6 - Lighter 60%"},
                            {q: "Accent 6 - Lighter 40%"},
                            {q: "Accent 6 - Darker 25%"},
                            {q: "Accent 6 - Darker 50%"},
                            {q: "Dark Red"},
                            {q: "Red"},
                            {q: "Orange"},
                            {q: "Yellow"},
                            {q: "Light Green"},
                            {q: "Green"},
                            {q: "Light Blue"},
                            {q: "Blue"},
                            {q: "Dark Blue"},
                            {q: "Purple"},
                            {q: "No Fill"},
                            {q: "RGB", tag: {text: "", tag: "rgb"}},
                            {q: "HSL", tag: {text: "", tag: "hsl"}}
                        ]
                    },
                    {q: "Picture - example.jpg"},
                    {
                        q: "Gradient",
                        data: [
                            {
                                q: "Gradient Varionts",
                                data: [
                                    {q: "Light - Linear Diagonal - Top Left to Bottom Right"},
                                    {q: "Light - Linear Diagonal - Top Right to Bottom Left"},
                                    {q: "Light - Linear Diagonal - Bottom Right to Top Left"},
                                    {q: "Light - Linear Diagonal - Bottom Left to Top Right"},
                                    {q: "Light - Linear Down"},
                                    {q: "Light - Linera Right"},
                                    {q: "Light - Linear Left"},
                                    {q: "Light - Linear Up"},
                                    {q: "Light - From Bottom Left Corner"},
                                    {q: "Light - From Bottom Right Corner"},
                                    {q: "Light - From Top Left Corner"},
                                    {q: "Light - From Top Right Corner"},
                                    {q: "Dark - Linear Diagonal - Top Left to Bottom Right"},
                                    {q: "Dark - Linear Diagonal - Top Right to Bottom Left"},
                                    {q: "Dark - Linear Diagonal - Bottom Right to Top Left"},
                                    {q: "Dark - Linear Diagonal - Bottom Left to Top Right"},
                                    {q: "Dark - Linear Down"},
                                    {q: "Dark - Linera Right"},
                                    {q: "Dark - Linear Left"},
                                    {q: "Dark - Linear Up"},
                                    {q: "Dark - From Bottom Left Corner"},
                                    {q: "Dark - From Bottom Right Corner"},
                                    {q: "Dark - From Top Left Corner"},
                                    {q: "Dark - From Top Right Corner"},

                                ]
                            },
                            {
                                q: "Gradient Preset",
                                tag: {text: "", tag: "gradientPreset"}
                            }
                        ]
                    },
                    {
                        q: "Texture",
                        data: [
                            {q: "Papyrus"},
                            {q: "Canvas"},
                            {q: "Denim"},
                            {q: "Woven mat"},
                            {q: "Water droplets"},
                            {q: "Paper bag"},
                            {q: "Fish fosil"},
                            {q: "Sand"},
                            {q: "Green marble"},
                            {q: "White marble"},
                            {q: "Brown marble"},
                            {q: "Granite"},
                            {q: "Newsprint"},
                            {q: "Recycled paper"},
                            {q: "Parchment"},
                            {q: "Stationery"},
                            {q: "Blue tissue paper"},
                            {q: "Pink tissue paper"},
                            {q: "Purple mesh"},
                            {q: "Bouquet"},
                            {q: "Cork"},
                            {q: "Walnut"},
                            {q: "Oak"},
                            {q: "Medium wood"},
                        ]
                    },
                    {
                        q: "Pattern",
                        data: [
                            {q: "5%"},
                            {q: "10%"},
                            {q: "20%"},
                            {q: "25%"},
                            {q: "30%"},
                            {q: "40%"},
                            {q: "50%"},
                            {q: "60%"},
                            {q: "70%"},
                            {q: "75%"},
                            {q: "80%"},
                            {q: "90%"},
                            {q: "Light downward diagonal"},
                            {q: "Light upward diagonal"},
                            {q: "Dark downward diagonal"},
                            {q: "Dark upward diagonal"},
                            {q: "Wide downward diagonal"},
                            {q: "Wide upward diagonal"},
                            {q: "Light vertical"},
                            {q: "Light horizontal"},
                            {q: "Narrow vertical"},
                            {q: "Narrow horizontal"},
                            {q: "Dark vertical"},
                            {q: "Dark horizontal"},
                            {q: "Dashed downward diagonal"},
                            {q: "Dashed upward diagonal"},
                            {q: "Dashed vertical"},
                            {q: "Dashed horizontal"},
                            {q: "Small confetti"},
                            {q: "Large confetti"},
                            {q: "ZigZag"},
                            {q: "Wave"},
                            {q: "Diagonal brick"},
                            {q: "Horizontal brick"},
                            {q: "Weave"},
                            {q: "Plaid"},
                            {q: "Divot"},
                            {q: "Doted grid"},
                            {q: "Doted diamond"},
                            {q: "Shingle"},
                            {q: "Trellis"},
                            {q: "Sphere"},
                            {q: "Small grid"},
                            {q: "Large grid"},
                            {q: "Outolined diamond"},
                            {q: "Solid diamond"},
                        ]
                    }
                ]
            },
            {
                q: "Set borders",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                
                data: [
                    {q: "No Borders"},
                    {q: "All Borders"},
                    {q: "Outside Borders"},
                    {q: "Inside Borders"},
                    {q: "Top Border"},
                    {q: "Bottom Border"},
                    {q: "Left Border"},
                    {q: "Right Border"},
                    {q: "Inside Horizontal Border"},
                    {q: "Inside Vertical Border"},
                    {q: "Diagonal Down Border"},
                    {q: "Diagonal Up Border"},
                ]
            },
            { 
                q: "Cell Bevel",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],

                data: [
                    {q: "Circle"},
                    {q: "Relaxed Insert"},
                    {q: "Cross"},
                    {q: "Cool Slunt"},
                    {q: "Angle"},
                    {q: "Soft Round"},
                    {q: "Convex"},
                    {q: "Slope"},
                    {q: "Divot"},
                    {q: "Riblet"},
                    {q: "Hard Edge"},
                    {q: "Art Deco"},
                ]
            },
            {
                q: "Shadow",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
                
                data: [
                    {
                        q: "Shadow Preset",
                        data: [
                            {q: "Offset Diagonal Top Right"},
                            {q: "Offset Diagonal Top Left"},
                            {q: "Offset Diagonal Bottom Right"},
                            {q: "Offset Diagonal Bottom Left"},
                            {q: "Offset Bottom"},
                            {q: "Offset Top"},
                            {q: "Offset Left"},
                            {q: "Offset Right"},
                            {q: "Offset Center"},
                            {q: "Inner Diagonal Top Right"},
                            {q: "Inner Diagonal Top Left"},
                            {q: "Inner Diagonal Bottom Right"},
                            {q: "Inner Diagonal Bottom Left"},
                            {q: "Inner Bottom"},
                            {q: "Inner Top"},
                            {q: "Inner Left"},
                            {q: "Inner Right"},
                            {q: "Inner Center"},
                            {q: "Perspective Diagonal Upper Right"},
                            {q: "Perspective Diagonal Upper Left"},
                            {q: "Perspective Diagonal Lower Right"},
                            {q: "Perspective Diagonal Lower Left"},
                            {q: "Below"},

                        ]
                    }
                ]
            },
            {
                q: "Reflection",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],

                data: [
                    {
                        q: "Reflection Preset",
                        data: [
                            {q: "Tight Reflection, touching"},
                            {q: "Half Reflection, touching"},
                            {q: "Full Reflection, touching"},
                            {q: "Tight Reflection, 4pt offset"},
                            {q: "Half Reflection, 4pt offset"},
                            {q: "Full Reflection, 4pt offset"},
                            {q: "Tight Reflection, 8pt offset"},
                            {q: "Half Reflection, 8pt offset"},
                            {q: "Full Reflection, 8pt offset"},
                        ]
                    }
                ]
            },
            {
                q: "Text Style",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],

                data: [
                    {
                        q: "Quick Style",

                        data: [
                            {q: "Fill - Text 1, Shadow"},
                            {q: "Fill - Accent 1, Shadow"},
                            {q: "Fill - Accent 2, Outline - Accent 2"},
                            {q: "Fill - White, Outline - Accent 1, Shadow"},
                            {q: "Fill - Accent 4, Soft Bevel"},
                            {q: "Gradient Fill - Gray"},
                            {q: "Gradient Fill - Accent 1, Reflection"},
                            {q: "Gradient Fill - Accent 4, Outline - Accent 4"},
                            {q: "Fill - White, Outline - Accent 1, Glow - Accent 1"},
                            {q: "Fill - Accent 3, Sharp Bevel"},
                            {q: "Fill - Text 1, Outlinte - Backgroud 1, Hard Shadow - Backgroud 1"},
                            {q: "Fill - Text 1, Outlinte - Backgroud 1, Hard Shadow - Accent 1"},
                            {q: "Fill - Accent 1, Outlinte - Backgroud 1, Hard Shadow - Accent 1"},
                            {q: "Fill - White, Outlinte - Accent 2, Hard Shadow - Accent 2"},
                            {q: "Fill - Backgroud 2, Inner Shadow"},
                            {q: "Pattern Fill - Text 2, Dark Upward Diagonal, Shadow"},
                            {q: "Pattern Fill - Accent 3, Narrow Horizontal, Inner Shadow"},
                            {q: "Pattern Fill - Accent 1, 50%, Hard Shadow - Accent 1"},
                            {q: "Pattern Fill - Accent 1, Light Downward Diagonal, Outline - Accent 1"}
                        ]
                    },
                    {
                        q: "Fill",
                        
                        data: [
                            {
                                q: "Color",
                                data: [
                                    {q: "Backgroud 1"},
                                    {q: "Text 1"},
                                    {q: "Backgroud 2"},
                                    {q: "Text 2"},
                                    {q: "Accent 1"},
                                    {q: "Accent 2"},
                                    {q: "Accent 3"},
                                    {q: "Accent 4"},
                                    {q: "Accent 5"},
                                    {q: "Accent 6"},
                                    {q: "Backgroud 1 - Darker 5%"},
                                    {q: "Backgroud 1 - Darker 15%"},
                                    {q: "Backgroud 1 - Darker 25%"},
                                    {q: "Backgroud 1 - Darker 35%"},
                                    {q: "Backgroud 1 - Darker 50%"},
                                    {q: "Text 1 - Lighter 5%"},
                                    {q: "Text 1 - Lighter 15%"},
                                    {q: "Text 1 - Lighter 25%"},
                                    {q: "Text 1 - Lighter 35%"},
                                    {q: "Text 1 - Lighter 50%"},
                                    {q: "Backgroud 2 - Darker 10%"},
                                    {q: "Backgroud 2 - Darker 25%"},
                                    {q: "Backgroud 2 - Darker 50%"},
                                    {q: "Backgroud 2 - Darker 75%"},
                                    {q: "Backgroud 2 - Darker 90%"},
                                    {q: "Text 2 - Lighter 80%"},
                                    {q: "Text 2 - Lighter 60%"},
                                    {q: "Text 2 - Lighter 40%"},
                                    {q: "Text 2 - Darker 25%"},
                                    {q: "Text 2 - Darker 50%"},
                                    {q: "Accent 1 - Lighter 80%"},
                                    {q: "Accent 1 - Lighter 60%"},
                                    {q: "Accent 1 - Lighter 40%"},
                                    {q: "Accent 1 - Darker 25%"},
                                    {q: "Accent 1 - Darker 50%"},
                                    {q: "Accent 2 - Lighter 80%"},
                                    {q: "Accent 2 - Lighter 60%"},
                                    {q: "Accent 2 - Lighter 40%"},
                                    {q: "Accent 2 - Darker 25%"},
                                    {q: "Accent 2 - Darker 50%"},
                                    {q: "Accent 3 - Lighter 80%"},
                                    {q: "Accent 3 - Lighter 60%"},
                                    {q: "Accent 3 - Lighter 40%"},
                                    {q: "Accent 3 - Darker 25%"},
                                    {q: "Accent 3 - Darker 50%"},
                                    {q: "Accent 4 - Lighter 80%"},
                                    {q: "Accent 4 - Lighter 60%"},
                                    {q: "Accent 4 - Lighter 40%"},
                                    {q: "Accent 4 - Darker 25%"},
                                    {q: "Accent 4 - Darker 50%"},
                                    {q: "Accent 5 - Lighter 80%"},
                                    {q: "Accent 5 - Lighter 60%"},
                                    {q: "Accent 5 - Lighter 40%"},
                                    {q: "Accent 5 - Darker 25%"},
                                    {q: "Accent 5 - Darker 50%"},
                                    {q: "Accent 6 - Lighter 80%"},
                                    {q: "Accent 6 - Lighter 60%"},
                                    {q: "Accent 6 - Lighter 40%"},
                                    {q: "Accent 6 - Darker 25%"},
                                    {q: "Accent 6 - Darker 50%"},
                                    {q: "Dark Red"},
                                    {q: "Red"},
                                    {q: "Orange"},
                                    {q: "Yellow"},
                                    {q: "Light Green"},
                                    {q: "Green"},
                                    {q: "Light Blue"},
                                    {q: "Blue"},
                                    {q: "Dark Blue"},
                                    {q: "Purple"},
                                    {q: "No Fill"},
                                    {q: "RGB", tag: {text: "", tag: "rgb"}},
                                    {q: "HSL", tag: {text: "", tag: "hsl"}}
                                ]
                            },
                            {q: "Picture - example.jpg"},
                            {
                                q: "Gradient",
                                data: [
                                    {
                                        q: "Gradient Varionts",
                                        data: [
                                            {q: "Light - Linear Diagonal - Top Left to Bottom Right"},
                                            {q: "Light - Linear Diagonal - Top Right to Bottom Left"},
                                            {q: "Light - Linear Diagonal - Bottom Right to Top Left"},
                                            {q: "Light - Linear Diagonal - Bottom Left to Top Right"},
                                            {q: "Light - Linear Down"},
                                            {q: "Light - Linera Right"},
                                            {q: "Light - Linear Left"},
                                            {q: "Light - Linear Up"},
                                            {q: "Light - From Bottom Left Corner"},
                                            {q: "Light - From Bottom Right Corner"},
                                            {q: "Light - From Top Left Corner"},
                                            {q: "Light - From Top Right Corner"},
                                            {q: "Dark - Linear Diagonal - Top Left to Bottom Right"},
                                            {q: "Dark - Linear Diagonal - Top Right to Bottom Left"},
                                            {q: "Dark - Linear Diagonal - Bottom Right to Top Left"},
                                            {q: "Dark - Linear Diagonal - Bottom Left to Top Right"},
                                            {q: "Dark - Linear Down"},
                                            {q: "Dark - Linera Right"},
                                            {q: "Dark - Linear Left"},
                                            {q: "Dark - Linear Up"},
                                            {q: "Dark - From Bottom Left Corner"},
                                            {q: "Dark - From Bottom Right Corner"},
                                            {q: "Dark - From Top Left Corner"},
                                            {q: "Dark - From Top Right Corner"},
        
                                        ]
                                    },
                                    {
                                        q: "Gradient Preset",
                                        tag: {text: "", tag: "gradientPreset"}
                                    }
                                ]
                            },
                            {
                                q: "Texture",
                                data: [
                                    {q: "Papyrus"},
                                    {q: "Canvas"},
                                    {q: "Denim"},
                                    {q: "Woven mat"},
                                    {q: "Water droplets"},
                                    {q: "Paper bag"},
                                    {q: "Fish fosil"},
                                    {q: "Sand"},
                                    {q: "Green marble"},
                                    {q: "White marble"},
                                    {q: "Brown marble"},
                                    {q: "Granite"},
                                    {q: "Newsprint"},
                                    {q: "Recycled paper"},
                                    {q: "Parchment"},
                                    {q: "Stationery"},
                                    {q: "Blue tissue paper"},
                                    {q: "Pink tissue paper"},
                                    {q: "Purple mesh"},
                                    {q: "Bouquet"},
                                    {q: "Cork"},
                                    {q: "Walnut"},
                                    {q: "Oak"},
                                    {q: "Medium wood"},
                                ]
                            },
                            {
                                q: "Pattern",
                                data: [
                                    {q: "5%"},
                                    {q: "10%"},
                                    {q: "20%"},
                                    {q: "25%"},
                                    {q: "30%"},
                                    {q: "40%"},
                                    {q: "50%"},
                                    {q: "60%"},
                                    {q: "70%"},
                                    {q: "75%"},
                                    {q: "80%"},
                                    {q: "90%"},
                                    {q: "Light downward diagonal"},
                                    {q: "Light upward diagonal"},
                                    {q: "Dark downward diagonal"},
                                    {q: "Dark upward diagonal"},
                                    {q: "Wide downward diagonal"},
                                    {q: "Wide upward diagonal"},
                                    {q: "Light vertical"},
                                    {q: "Light horizontal"},
                                    {q: "Narrow vertical"},
                                    {q: "Narrow horizontal"},
                                    {q: "Dark vertical"},
                                    {q: "Dark horizontal"},
                                    {q: "Dashed downward diagonal"},
                                    {q: "Dashed upward diagonal"},
                                    {q: "Dashed vertical"},
                                    {q: "Dashed horizontal"},
                                    {q: "Small confetti"},
                                    {q: "Large confetti"},
                                    {q: "ZigZag"},
                                    {q: "Wave"},
                                    {q: "Diagonal brick"},
                                    {q: "Horizontal brick"},
                                    {q: "Weave"},
                                    {q: "Plaid"},
                                    {q: "Divot"},
                                    {q: "Doted grid"},
                                    {q: "Doted diamond"},
                                    {q: "Shingle"},
                                    {q: "Trellis"},
                                    {q: "Sphere"},
                                    {q: "Small grid"},
                                    {q: "Large grid"},
                                    {q: "Outolined diamond"},
                                    {q: "Solid diamond"},
                                ]
                            }
                        ]
                    },
                    {
                        q: "Outline",

                        data: [
                            {
                                q: "Color",
                                again: [2,3,4,5,6],
                                
                                data: [
                                    {q: "Backgroud 1"},
                                    {q: "Text 1"},
                                    {q: "Backgroud 2"},
                                    {q: "Text 2"},
                                    {q: "Accent 1"},
                                    {q: "Accent 2"},
                                    {q: "Accent 3"},
                                    {q: "Accent 4"},
                                    {q: "Accent 5"},
                                    {q: "Accent 6"},
                                    {q: "Backgroud 1 - Darker 5%"},
                                    {q: "Backgroud 1 - Darker 15%"},
                                    {q: "Backgroud 1 - Darker 25%"},
                                    {q: "Backgroud 1 - Darker 35%"},
                                    {q: "Backgroud 1 - Darker 50%"},
                                    {q: "Text 1 - Lighter 5%"},
                                    {q: "Text 1 - Lighter 15%"},
                                    {q: "Text 1 - Lighter 25%"},
                                    {q: "Text 1 - Lighter 35%"},
                                    {q: "Text 1 - Lighter 50%"},
                                    {q: "Backgroud 2 - Darker 10%"},
                                    {q: "Backgroud 2 - Darker 25%"},
                                    {q: "Backgroud 2 - Darker 50%"},
                                    {q: "Backgroud 2 - Darker 75%"},
                                    {q: "Backgroud 2 - Darker 90%"},
                                    {q: "Text 2 - Lighter 80%"},
                                    {q: "Text 2 - Lighter 60%"},
                                    {q: "Text 2 - Lighter 40%"},
                                    {q: "Text 2 - Darker 25%"},
                                    {q: "Text 2 - Darker 50%"},
                                    {q: "Accent 1 - Lighter 80%"},
                                    {q: "Accent 1 - Lighter 60%"},
                                    {q: "Accent 1 - Lighter 40%"},
                                    {q: "Accent 1 - Darker 25%"},
                                    {q: "Accent 1 - Darker 50%"},
                                    {q: "Accent 2 - Lighter 80%"},
                                    {q: "Accent 2 - Lighter 60%"},
                                    {q: "Accent 2 - Lighter 40%"},
                                    {q: "Accent 2 - Darker 25%"},
                                    {q: "Accent 2 - Darker 50%"},
                                    {q: "Accent 3 - Lighter 80%"},
                                    {q: "Accent 3 - Lighter 60%"},
                                    {q: "Accent 3 - Lighter 40%"},
                                    {q: "Accent 3 - Darker 25%"},
                                    {q: "Accent 3 - Darker 50%"},
                                    {q: "Accent 4 - Lighter 80%"},
                                    {q: "Accent 4 - Lighter 60%"},
                                    {q: "Accent 4 - Lighter 40%"},
                                    {q: "Accent 4 - Darker 25%"},
                                    {q: "Accent 4 - Darker 50%"},
                                    {q: "Accent 5 - Lighter 80%"},
                                    {q: "Accent 5 - Lighter 60%"},
                                    {q: "Accent 5 - Lighter 40%"},
                                    {q: "Accent 5 - Darker 25%"},
                                    {q: "Accent 5 - Darker 50%"},
                                    {q: "Accent 6 - Lighter 80%"},
                                    {q: "Accent 6 - Lighter 60%"},
                                    {q: "Accent 6 - Lighter 40%"},
                                    {q: "Accent 6 - Darker 25%"},
                                    {q: "Accent 6 - Darker 50%"},
                                    {q: "Dark Red"},
                                    {q: "Red"},
                                    {q: "Orange"},
                                    {q: "Yellow"},
                                    {q: "Light Green"},
                                    {q: "Green"},
                                    {q: "Light Blue"},
                                    {q: "Blue"},
                                    {q: "Dark Blue"},
                                    {q: "Purple"},
                                    {q: "No Fill"},
                                    {q: "RGB", tag: {text: "", tag: "rgb"}},
                                    {q: "HSL", tag: {text: "", tag: "hsl"}}
                                ]
                            },
                            {
                                q: "Gradient",
                                again: [2,3,4,5,6],

                                data: [
                                    {
                                        q: "Gradient Varionts",
                                        data: [
                                            {q: "Light - Linear Diagonal - Top Left to Bottom Right"},
                                            {q: "Light - Linear Diagonal - Top Right to Bottom Left"},
                                            {q: "Light - Linear Diagonal - Bottom Right to Top Left"},
                                            {q: "Light - Linear Diagonal - Bottom Left to Top Right"},
                                            {q: "Light - Linear Down"},
                                            {q: "Light - Linera Right"},
                                            {q: "Light - Linear Left"},
                                            {q: "Light - Linear Up"},
                                            {q: "Light - From Bottom Left Corner"},
                                            {q: "Light - From Bottom Right Corner"},
                                            {q: "Light - From Top Left Corner"},
                                            {q: "Light - From Top Right Corner"},
                                            {q: "Dark - Linear Diagonal - Top Left to Bottom Right"},
                                            {q: "Dark - Linear Diagonal - Top Right to Bottom Left"},
                                            {q: "Dark - Linear Diagonal - Bottom Right to Top Left"},
                                            {q: "Dark - Linear Diagonal - Bottom Left to Top Right"},
                                            {q: "Dark - Linear Down"},
                                            {q: "Dark - Linera Right"},
                                            {q: "Dark - Linear Left"},
                                            {q: "Dark - Linear Up"},
                                            {q: "Dark - From Bottom Left Corner"},
                                            {q: "Dark - From Bottom Right Corner"},
                                            {q: "Dark - From Top Left Corner"},
                                            {q: "Dark - From Top Right Corner"},
        
                                        ]
                                    },
                                    {
                                        q: "Gradient Preset",
                                        tag: {text: "", tag: "gradientPreset"}
                                    }
                                ]
                            },
                            {
                                q: "Width",
                                again: [2,3,4,5,6],

                                data: [
                                    {
                                        q: "",
                                        
                                        data: [
                                            {q: "1/4 pt"},
                                            {q: "1/2 pt"},
                                            {q: "3/4 pt"},
                                            {q: "1 pt"},
                                            {q: "1 1/2 pt"},
                                            {q: "2 pt"},
                                            {q: "2 1/4 pt"},
                                            {q: "3 pt"},
                                            {q: "4 1/2 pt"},
                                            {q: "6 pt"},
                                        ]
                                    },
                                    {
                                        q: "",
                                        tag: {text: "", tag: "borderWidth"}
                                    }
                                ]
                            },
                            {
                                q: "Compound Type",
                                again: [2,3,4,5,6],

                                data: [
                                    {q: "Simple"},
                                    {q: "Double"},
                                    {q: "Thick Thin"},
                                    {q: "Thin Thick"},
                                    {q: "Triple"}
                                ]
                            },
                            {
                                q: "Dash Type",
                                again: [2,3,4,5,6],

                                data: [
                                    {q: "Solid"},
                                    {q: "Round Dot"},
                                    {q: "Squere Dot"},
                                    {q: "Dash"},
                                    {q: "Long Dash"},
                                    {q: "Dash Dot"},
                                    {q: "Long Dash Dot"},
                                    {q: "Long Dash Dot Dot"}
                                ]
                            },
                            {
                                q: "Cap Type",
                                again: [2,3,4,5,6],

                                data: [
                                    {q: "Squere"},
                                    {q: "Round"},
                                    {q: "Flat"}
                                ]
                            },
                            {
                                q: "Join Type",
                                again: [2,3,4,5,6],

                                data: [
                                    {q: "Round"},
                                    {q: "Bevel"},
                                    {q: "Miter"}
                                ]
                            }
                        ]
                    },
                    {
                        q: "Shadow",
                        data: [
                            {
                                q: "Shadow Preset",
                                data: [
                                    {q: "Offset Diagonal Top Right"},
                                    {q: "Offset Diagonal Top Left"},
                                    {q: "Offset Diagonal Bottom Right"},
                                    {q: "Offset Diagonal Bottom Left"},
                                    {q: "Offset Bottom"},
                                    {q: "Offset Top"},
                                    {q: "Offset Left"},
                                    {q: "Offset Right"},
                                    {q: "Offset Center"},
                                    {q: "Inner Diagonal Top Right"},
                                    {q: "Inner Diagonal Top Left"},
                                    {q: "Inner Diagonal Bottom Right"},
                                    {q: "Inner Diagonal Bottom Left"},
                                    {q: "Inner Bottom"},
                                    {q: "Inner Top"},
                                    {q: "Inner Left"},
                                    {q: "Inner Right"},
                                    {q: "Inner Center"},
                                    {q: "Perspective Diagonal Upper Right"},
                                    {q: "Perspective Diagonal Upper Left"},
                                    {q: "Perspective Diagonal Lower Right"},
                                    {q: "Perspective Diagonal Lower Left"},
                                    {q: "Below"},
        
                                ]
                            }
                        ]
                    },
                    {
                        q: "Reflection",
                        data: [
                            {
                                q: "Reflection Preset",
                                data: [
                                    {q: "Tight Reflection, touching"},
                                    {q: "Half Reflection, touching"},
                                    {q: "Full Reflection, touching"},
                                    {q: "Tight Reflection, 4pt offset"},
                                    {q: "Half Reflection, 4pt offset"},
                                    {q: "Full Reflection, 4pt offset"},
                                    {q: "Tight Reflection, 8pt offset"},
                                    {q: "Half Reflection, 8pt offset"},
                                    {q: "Full Reflection, 8pt offset"},
                                ]
                            }
                        ]
                    },
                    {
                        q: "Glow",

                        data: [
                            {
                                q: "Glow Varient",
                                tag: {text: "", tag: "glow"}
                            }
                        ]
                    },
                    {
                        q: "Text Alignment",

                        data: [
                            {
                                q: "Horizontal",
                                again: [1],

                                data: [
                                    {q: "Left"},
                                    {q: "Center"},
                                    {q: "Right"}
                                ]
                            },
                            {
                                q: "Vertical",
                                again: [0],

                                data: [
                                    {q: "Top"},
                                    {q: "Center"},
                                    {q: "Bottom"}
                                ]
                            }
                        ]
                    },
                    {
                        q: "Text Direction",

                        data: [
                            {q: "Horizontal"},
                            {q: "Rotate 90°"},
                            {q: "Rotate 270°"},
                            {q: "Stacked"}
                        ]
                    }
                ]
            },
            {
                q: "Cell Margins",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],


                data: [
                    {q: "Normal"},
                    {q: "None"},
                    {q: "Narrow"},
                    {q: "Wide"}
                ]
            },
            {
                q: "Cell Width",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],

                tag: {text: "", tag: "borderWidth"}
            },
            {
                q: "Cell Height",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],

                tag: {text: "", tag: "borderWidth"}
            },
            {
                q: "Table Width",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],

                tag: {text: "", tag: "borderWidth"}
            },
            {
                q: "Table Height",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],

                tag: {text: "", tag: "borderWidth"}
            },

            {
                q: "Insert",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],


                data: [
                    {
                        q: "Row Above",
                        again: [1,2,3]
                    },
                    {
                        q: "Column Right",
                        again: [0,2,3]
                    },
                    {
                        q: "Row Below",
                        again: [0,1,3]
                    },
                    {
                        q: "Column Left",
                        again: [0,1,2]
                    }
                ]
            },

            {
                q: "Delete",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],


                data: [
                    {
                        q: "First Column",
                        again: [1,2,3]
                    },
                    {
                        q: "Last Column",
                        again: [0,2,3]
                    },
                    {
                        q: "First Row",
                        again: [0,1,3]
                    },
                    {
                        q: "Last Row",
                        again: [0,1,2]
                    }
                ]
            },

            {
                q: "Distribute Rows",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
            },

            {
                q: "Distribute Columns",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
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
                text += "" + glowL[randBetween(0, 3)] + " pt glow, Accent color" + randBetween(1, 6)
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