const data = [
    {
        q: "Insert",
        again: [1],

        data: [
            {q: "Picture from file - photo.jpg"},
            {q: "Link to file - photo.jpg"},
            {q: "Insert and Link - photo.jpg"}
        ]
    },

    {
        q: "Format",

        data: [
            {
                q: "Sharpen/Soften",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {
                        q: "Preset",

                        data: [
                            {q: "Soften 50%"},
                            {q: "Soften 25%"},
                            {q: "Sharpen 0%"},
                            {q: "Sharpen 25%"},
                            {q: "Sharpen 50%"}
                        ]
                    },
                    {
                        q: "Sharpness",
                        tag: {text: "", tag: "percentage"}
                    }
                ]
            },
            {
                q: "Brightness/Contrast",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {
                        q: "Preset",
                        tag: {text: "", tag: "bcPreset"}
                    },

                    {
                        q: "",
                        data: [
                            {
                                q: "Brightness",
                                again: [1],
                                tag: {text: "", tag: "percentage"}
                            },
                            {
                                q: "Contrast",
                                again: [0],
                                tag: {text: "", tag: "percentage"}
                            }
                        ]
                    }
                ]
            },

            {
                q: "Saturation",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {
                        q: "Preset",

                        data: [
                            {q: "Stauration: 0%"},
                            {q: "Stauration: 33%"},
                            {q: "Stauration: 66%"},
                            {q: "Stauration: 100%"},
                            {q: "Stauration: 200%"},
                            {q: "Stauration: 300%"},
                            {q: "Stauration: 400%"}
                        ]
                    },
                    {
                        q: "",
                        
                        tag: {text: "", tag: "percentage"}
                    }
                ]
            },

            {
                q: "Color Tone",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                
                data: [
                    {
                        q: "Preset",

                        data: [
                            {q: "Temperature: 4700 K"},
                            {q: "Temperature: 5300 K"},
                            {q: "Temperature: 5900 K"},
                            {q: "Temperature: 6600 K"},
                            {q: "Temperature: 7200 K"},
                            {q: "Temperature: 8800 K"},
                            {q: "Temperature: 11200 K"}
                        ]
                    },

                    {
                        q: "Temperature:",
                        tag: {text: "", tag: "colorTemp"}
                    }
                ]
            },

            {
                q: "Recolor",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {
                        q: "Preset",

                        data: [
                            {q: "No Recolor"},
                            {q: "Grayscale"},
                            {q: "Sepia"},
                            {q: "Washout"},
                            {q: "Black and White 25%"},
                            {q: "Black and White 50%"},
                            {q: "Black and White 75%"},
                            {q: "Text color 2 Dark"},
                            {q: "Accent color 1 Dark"},
                            {q: "Accent color 2 Dark"},
                            {q: "Accent color 3 Dark"},
                            {q: "Accent color 4 Dark"},
                            {q: "Accent color 5 Dark"},
                            {q: "Accent color 6 Dark"},
                            {q: "Text color 2 Light"},
                            {q: "Accent color 1 Light"},
                            {q: "Accent color 2 Light"},
                            {q: "Accent color 3 Light"},
                            {q: "Accent color 4 Light"},
                            {q: "Accent color 5 Light"},
                            {q: "Accent color 6 Light"},
                        ]
                    },

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
                            {q: "RGB", tag: {text: "", tag: "rgb"}},
                            {q: "HSL", tag: {text: "", tag: "hsl"}}
                        ]
                    }
                ]
            },

            {
                q: "Artist Effect",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {q: "None"},
                    {q: "Marker"},
                    {q: "Pencil Grayscale"},
                    {q: "Pencil Skech"},
                    {q: "Line Drawing"},
                    {q: "Chalk Skech"},
                    {q: "Paint Strokes"},
                    {q: "Paint Brush"},
                    {q: "Glow Diffused"},
                    {q: "Blur"},
                    {q: "Light Screen"},
                    {q: "Watercolor sponge"},
                    {q: "Film Grain"},
                    {q: "Mosaic Bubbles"},
                    {q: "Glass"},
                    {q: "Cement"},
                    {q: "Texturize"},
                    {q: "Crisscross Etching"},
                    {q: "Pastels Smooth"},
                    {q: "Plastic Wrap"},
                    {q: "Cutout"},
                    {q: "Photocopy"},
                    {q: "Glow Edges"}
                ]
            },

            {
                q: "Compress Photo",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {q: "Use default resolution"},
                    {q: "96 ppi"},
                    {q: "150 ppi"},
                    {q: "220 ppi"},
                    {q: "330 ppi"}
                ]
            },

            {
                q: "Picture Style",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {
                        q: "Preset",

                        data: [
                            {q: "Simple Frame, White"},
                            {q: "Beveled Matte, White"},
                            {q: "Metal Frame"},
                            {q: "Drop Shadow Ractangle"},
                            {q: "Reflected Rounded Rectangle"},
                            {q: "Soft Edge Rectangle"},
                            {q: "Double Frame, Black"},
                            {q: "Thick Matte, Black"},
                            {q: "Simple Frame, Black"},
                            {q: "Beveled Oval, Black"},
                            {q: "Compound Frame, Black"},
                            {q: "Moderate Frame, Black"},
                            {q: "Center Shadow Rectangle"},
                            {q: "Rounded Diagonal Corner, White"},
                            {q: "Snip Diaglonal Corner, White"},
                            {q: "Moderate Frame, White"},
                            {q: "Rotated, White"},
                            {q: "Perspective Shadow, White"},
                            {q: "Relaxed Perspective, White"},
                            {q: "Soft Edge Format"},
                            {q: "Bevel Rectangle"},
                            {q: "Bevel Perspective"},
                            {q: "Reflective Perspective Right"},
                            {q: "Bevel Perspective Left, White"},
                            {q: "Reflected Bevel, Black"},
                            {q: "Reflected Bevel, White"},
                            {q: "Metal Rounded Rectangle"},
                            {q: "Metal Oval"}

                        ]
                    },
                    
                    {
                        q: "Border",

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
                                    {q: "No Outline"},
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
                        q: "Picture Effect",
                        again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                        data: [
                            {
                                q: "Preset",

                                data: [
                                    {q: "Preset 1"},
                                    {q: "Preset 2"},
                                    {q: "Preset 3"},
                                    {q: "Preset 4"},
                                    {q: "Preset 5"},
                                    {q: "Preset 6"},
                                    {q: "Preset 7"},
                                    {q: "Preset 8"},
                                    {q: "Preset 9"},
                                    {q: "Preset 10"},
                                    {q: "Preset 11"},
                                    {q: "Preset 12"},
                                ]
                            },
                            {
                                q: "Shadow",
                                again: [1,2,3,4,5,6],
                                
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
                                again: [1,2,3,4,5,6],
                                
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
                                again: [1,2,3,4,5,6],
        
                                data: [
                                    {
                                        q: "Glow Varient",
                                        tag: {text: "", tag: "glow"}
                                    }
                                ]
                            },
                            {
                                q: "Soft Edges",
                                again: [1,2,3,4,5,6],
                                
                                data: [
                                    {q: "No Soft Edges"},
                                    {q: "1 Point"},
                                    {q: "2.5 Point"},
                                    {q: "5 Point"},
                                    {q: "10 Point"},
                                    {q: "25 Point"},
                                    {q: "50 Point"}
                                ]
                            },
                            {
                                q: "Bevel",
                                again: [1,2,3,4,5,6],
                                
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
                                q: "3D Rotation",
                                again: [1,2,3,4,5,6],
                                
                                data: [
                                    {q: "Isometric Left Down"},
                                    {q: "Isometric Right Up"},
                                    {q: "Isometric Up Down"},
                                    {q: "Isometric Bottom Up"},
                                    {q: "Off Acis 1 Left"},
                                    {q: "Off Acis 1 Right"},
                                    {q: "Off Acis 1 Top"},
                                    {q: "Off Acis 2 Left"},
                                    {q: "Off Acis 2 Right"},
                                    {q: "Off Acis 2 Top"},
                                    {q: "Perspective Front"},
                                    {q: "Perspective Left"},
                                    {q: "Perspective Right"},
                                    {q: "Perspective Below"},
                                    {q: "Perspective Above"},
                                    {q: "Perspective Relaxed Moderately"},
                                    {q: "Perspective Relaxed"},
                                    {q: "Perspective Contrasting Left"},
                                    {q: "Perspective Contrasting Right"},
                                    {q: "Perspeptive Heroic Extreme Left"},
                                    {q: "Perspeptive Heroic Extreme Right"},
                                    {q: "Oblique Top Left"},
                                    {q: "Oblique Top Right"},
                                    {q: "Oblique Bottom Left"},
                                    {q: "Oblique Bottom Right"}
                                ]
                            }
                        ]
                    }
                ]
            },

            {
                q: "Align",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {
                        q: "Vertically",

                        data: [
                            {q: "Top"},
                            {q: "Middle"},
                            {q: "Bottom"}
                        ]
                    },

                    {
                        q: "Horizontally",

                        data: [
                            {q: "Left"},
                            {q: "Center"},
                            {q: "Right"}
                        ]
                    }
                ]
            },
            {
                q: "Z acis",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {q: "Bring Forward"},
                    {q: "Bring to Front"},
                    {q: "Send Backward"},
                    {q: "Send to Back"}
                ]
            },

            {
                q: "Width",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                tag: {text: "", tag: "borderWidth"}
            },
            {
                q: "Height",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
                tag: {text: "", tag: "borderWidth"}
            },

            {
                q: "Rotate",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {
                        q: "Preset",

                        data: [
                            {q: "Right 90"},
                            {q: "Left 90"},
                            {q: "Flip Horizontal"},
                            {q: "Flip Vertical"}
                        ]
                    },

                    {
                        q: "",
                        tag: {text: "", tag: "angle"}
                    }
                ]
            },

           {
               q: "Horizontal Position",
               again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

               data: [
                   {
                       q: "From Top Left",
                       tag: {text: "", tag: "borderWidth"}
                   },
                   {
                    q: "From Center",
                    tag: {text: "", tag: "borderWidth"}
                }
               ]
           },

           {
                q: "Vertical Position",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {
                        q: "From Top Left",
                        tag: {text: "", tag: "borderWidth"}
                    },
                    {
                        q: "From Center",
                        tag: {text: "", tag: "borderWidth"}
                    }
                ]
            },

            {
                q: "Crop",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {q: "Fill"},
                    {q: "Fit"},
                    {
                        q: "Aspect Ratio",

                        data: [
                            {q: "1:1"},
                            {q: "2:3"},
                            {q: "3:4"},
                            {q: "3:5"},
                            {q: "4:5"},
                            {q: "3:2"},
                            {q: "4:3"},
                            {q: "5:3"},
                            {q: "5:4"},
                            {q: "16:9"},
                            {q: "16:10"}
                        ]
                    },

                    {
                        q: "Shape",

                        data: [
                            {q: "Rectangle"},
                            {q: "Rounded Rectangle"},
                            {q: "Snip Single Corner Rectangle"},
                            {q: "Snip Same Corner Rectangle"},
                            {q: "Snip Diaglonal Corner Rectangle"},
                            {q: "Round Single Corner Rectangle"},
                            {q: "Round Same Corner Rectangle"},
                            {q: "Round Diaglonal Corner Rectangle"},
                            {q: "Oval"},
                            {q: "Isosceles Triangle"},
                            {q: "Right Triangle"},
                            {q: "Parallelogram"},
                            {q: "Trapezoid"},
                            {q: "Diamond"},
                            {q: "Regular Pentagon"},
                            {q: "Hexagon"},
                            {q: "Heptagon"},
                            {q: "Octagon"},
                            {q: "Decagon"},
                            {q: "Dodecagon"},
                            {q: "Pie"},
                            {q: "Chord"},
                            {q: "Teardrop"},
                            {q: "Frame"},
                            {q: "Half Frame"},
                            {q: "L-Shape"},
                            {q: "Diagonal Stripe"},
                            {q: "Cross"},
                            {q: "Plaque"},
                            {q: "Can"},
                            {q: "Cube"},
                            {q: "Bevel"},
                            {q: "Donut"},
                            {q: '"No" Symbol'},
                            {q: "Block Arc"},
                            {q: "Folded Corner"},
                            {q: "Smily Face"},
                            {q: "Heart"},
                            {q: "Lightning Bolt"},
                            {q: "Sun"},
                            {q: "Moon"},
                            {q: "Cloud"},
                            {q: "Arc"},
                            {q: "Double Bracet"},
                            {q: "Double Brace"},
                            {q: "Left Bracket"},
                            {q: "Right Bracket"},
                            {q: "Left Brace"},
                            {q: "Right Brace"},
                            {q: "Left Arrow"},
                            {q: "Right Arrow"},
                            {q: "Up Arrow"},
                            {q: "Down Arrow"},
                            {q: "Left-Right Arrow"},
                            {q: "Up-Down Arrow"},
                            {q: "Quad Arrow"},
                            {q: "Left-Right-Up Arrow"},
                            {q: "Bent Arrow"},
                            {q: "U-Turn Arrow"},
                            {q: "Left-Up Arrow"},
                            {q: "Bent-Up Arrow"},
                            {q: "Curved Left Arrow"},
                            {q: "Curved Right Arrow"},
                            {q: "Curved Up Arrow"},
                            {q: "Curved Down Arrow"},
                            {q: "Striped Right Arrow"},
                            {q: "Notched Right Arrow"},
                            {q: "Pentagon"},
                            {q: "Chevron"},
                            {q: "Right Arrow Callout"},
                            {q: "Left Arrow Callout"},
                            {q: "Up Arrow Callout"},
                            {q: "Down Arrow Callout"},
                            {q: "Left-Right Arrow Callout"},
                            {q: "Quad Arrow Callout"},
                            {q: "Circular Arrow"},
                            {q: "Plus"},
                            {q: "Minus"},
                            {q: "Multiply"},
                            {q: "Devision"},
                            {q: "Equal"},
                            {q: "Not Equal"},
                            {q: "Flowchart: Process"},
                            {q: "Flowchart: Alternate Process"},
                            {q: "Flowchart: Decision"},
                            {q: "Flowchart: Data"},
                            {q: "Flowchart: Predefined Process"},
                            {q: "Flowchart: Internal Storage"},
                            {q: "Flowchart: Document"},
                            {q: "Flowchart: Multidocument"},
                            {q: "Flowchart: Terminator"},
                            {q: "Flowchart: Preparation"},
                            {q: "Flowchart: Manual Input"},
                            {q: "Flowchart: Manual Operation"},
                            {q: "Flowchart: Connector"},
                            {q: "Flowchart: Off-page Connector"},
                            {q: "Flowchart: Card"},
                            {q: "Flowchart: Punched Tape"},
                            {q: "Flowchart: Summing Junction"},
                            {q: "Flowchart: Or"},
                            {q: "Flowchart: Collate"},
                            {q: "Flowchart: Sort"},
                            {q: "Flowchart: Extract"},
                            {q: "Flowchart: Stored Data"},
                            {q: "Flowchart: Delay"},
                            {q: "Flowchart: Sequential Access Storage"},
                            {q: "Flowchart: Magnetic Disc"},
                            {q: "Flowchart: Direct Access Storage"},
                            {q: "Flowchart: Display"},
                            {q: "Explosion 1"},
                            {q: "Explosion 2"},
                            {q: "4-point Star"},
                            {q: "5-point Star"},
                            {q: "6-point Star"},
                            {q: "7-point Star"},
                            {q: "8-point Star"},
                            {q: "10-point Star"},
                            {q: "12-point Star"},
                            {q: "16-point Star"},
                            {q: "24-point Star"},
                            {q: "32-point Star"},
                            {q: "Up Ribbon"},
                            {q: "Down Ribbon"},
                            {q: "Curved Up Ribbon"},
                            {q: "Curved Down Ribbon"},
                            {q: "Vertical Scroll"},
                            {q: "Horizontal Scroll"},
                            {q: "Wave"},
                            {q: "Double Wave"},
                            {q: "Rectangular Callout"},
                            {q: "Rounded Rectangular Callout"},
                            {q: "Oval Callout"},
                            {q: "Cloud Callout"},
                            {q: "Lind Callout 1"},
                            {q: "Lind Callout 2"},
                            {q: "Lind Callout 3"},
                            {q: "Lind Callout 1 (Accent Bar)"},
                            {q: "Lind Callout 2 (Accent Bar)"},
                            {q: "Lind Callout 3 (Accent Bar)"},
                            {q: "Lind Callout 1 (No Border)"},
                            {q: "Lind Callout 2 (No Border)"},
                            {q: "Lind Callout 3 (No Border)"},
                            {q: "Lind Callout 1 (Border and Accent Bar)"},
                            {q: "Lind Callout 2 (Border and Accent Bar)"},
                            {q: "Lind Callout 3 (Border and Accent Bar)"},
                            {q: "Action Button: Back or Previous"},
                            {q: "Action Button: Forward or Next"},
                            {q: "Action Button: Beginning"},
                            {q: "Action Button: End"},
                            {q: "Action Button: Home"},
                            {q: "Action Button: Information"},
                            {q: "Action Button: Movie"},
                            {q: "Action Button: Retrun"},
                            {q: "Action Button: Document"},
                            {q: "Action Button: Sound"},
                            {q: "Action Button: Help"},
                            {q: "Action Button: Custom"}
                        ]
                    } 
                ]
            },

            {
                q: "Convert to SmartArt",
                again: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

                data: [
                    {q: "Accented Picture"},
                    {q: "Circular Picture Callout"},
                    {q: "Picture Caption List"},
                    {q: "Snapshot Picture List"},
                    {q: "Spiral Picture"},
                    {q: "Captioned Picture"},
                    {q: "Bending Picture Caption"},
                    {q: "Bending Picture Semi-Transparent Text"},
                    {q: "Bending Picture Blocks"},
                    {q: "Bending Picture Caption List"},
                    {q: "Titled Picture Blocks"},
                    {q: "Picture Grid"},
                    {q: "Pictrue Accent Blocks"},
                    {q: "Picture Stripes"},
                    {q: "Alternating Picture Blocks"},
                    {q: "Ascending Picture Accent Process"},
                    {q: "Alternating Picture Circles"},
                    {q: "Titled Picture Lineup"},
                    {q: "Picture Lineup"},
                    {q: "Framed Text Picture"},
                    {q: "Hexagon Cluster"},
                    {q: "Bubble Picture List"},
                    {q: "Cicle Picture Hierarchy"},
                    {q: "Horizontal Picture List"},
                    {q: "Continues Picture List"},
                    {q: "Vertical Picture List"},
                    {q: "Vertical Pictrue Accent List"},
                    {q: "Bending Picture Accent List"},
                    {q: "Picture Accent List"},
                    {q: "Picture Accent Process"},
                ]
            }
        ]
    },

    {
        q: "Delete Picture",

        data: [
            {q: "Slide 2"},
            {q: "Slide 4"}
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