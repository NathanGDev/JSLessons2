let justMercy = {
    nameOfMovie: "Just Mercy",
    runTime: "2h 30m",
    characters: [
        {
        name: "Bryan Stevenson",
        age: 23,
        items: [{item: "Smart"}, {item:"Noble"}]
        },
        {
        name: "Walter McMillian",
        age: 45,
        items: [{item: "Stubborn"},{ item: "Innocent"}],
        },
    ]   
}

justMercy.name = "Bryan Stevenson";
justMercy.items = "Smart";


for (item in justMercy) {             // Calls the movie info
    console.log(justMercy[item]);
}