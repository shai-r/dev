const xMen = [
    { name: "Scott Summers", alias: "Cyclops", power: "Optic Blast", firstAppearance: 1963, teamAffiliation: "X-Men" },
    { name: "Jean Grey", alias: "Phoenix", power: "Telekinesis/Telepathy", firstAppearance: 1963, teamAffiliation: "X-Men" },
    { name: "Charles Xavier", alias: "Professor X", power: "Telepathy", firstAppearance: 1963, teamAffiliation: "X-Men" },
    { name: "Logan", alias: "Wolverine", power: "Healing Factor/Adamantium Claws", firstAppearance: 1974, teamAffiliation: "X-Men/Avengers" },
    { name: "Ororo Munroe", alias: "Storm", power: "Weather Manipulation", firstAppearance: 1975, teamAffiliation: "X-Men" },
    { name: "Kurt Wagner", alias: "Nightcrawler", power: "Teleportation", firstAppearance: 1975, teamAffiliation: "X-Men" },
    { name: "Raven Darkholme", alias: "Mystique", power: "Shapeshifting", firstAppearance: 1978, teamAffiliation: "Brotherhood of Mutants" },
    { name: "Erik Lehnsherr", alias: "Magneto", power: "Magnetism Manipulation", firstAppearance: 1963, teamAffiliation: "Brotherhood of Mutants/X-Men" },
    { name: "Anna Marie", alias: "Rogue", power: "Power Absorption", firstAppearance: 1981, teamAffiliation: "X-Men" },
    { name: "Hank McCoy", alias: "Beast", power: "Enhanced Agility/Intelligence", firstAppearance: 1963, teamAffiliation: "X-Men/Avengers" }
  ];

// console.log( xMen.filter(x=>x.firstAppearance===1963))
// console.log( xMen.map(x=>x.alias))
// console.log(xMen.every(({power})=>power!=null))
// console.log(xMen.some(({teamAffiliation})=>teamAffiliation.includes("Avengers")))
// console.log(xMen.slice(5))
// console.log(xMen.filter(({power})=>power.includes("Telepathy")).map(({name})=>name))
// console.log(xMen.every(({firstAppearance})=>firstAppearance>1960))
// console.log(xMen.some(({power})=>power.includes("Man"))? xMen.filter(({power})=>power.includes("Man")):"")
// console.log(xMen.slice(xMen.length-4,xMen.length-1).map(({alias})=>alias))
// console.log(xMen.map((x)=>{x.teamAffiliation="X-Men"; return xMen}))
// console.log(xMen.map(({power})=>power.includes("Man")))
// console.log(xMen.filter(({name})=>name.charAt(0)==='S').slice(0,2))
// console.log(xMen.every(({alias})=>!alias.includes(' ')))
// console.log(xMen.filter(({power})=>power.includes("Manipulation")).some(({teamAffiliation})=>teamAffiliation.includes("X-Men")))
// console.log(xMen.filter(({teamAffiliation})=>teamAffiliation.includes("X-Men")).map(({firstAppearance})=>firstAppearance).slice(5))
// console.log(xMen.filter((x=>x.alias.includes("s"))).map(x=>x.name),xMen.filter((x=>x.alias.includes("s"))).every(({power})=>power.charAt(power.length-1)==='n'))
// console.log(xMen.filter(({firstAppearance})=>firstAppearance>=1970&&firstAppearance<1980)? xMen.filter(({firstAppearance})=>firstAppearance>=970&&firstAppearance<1980):"")

console.log(
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
    .reduce(
        (resolt, nextElment) =>
        resolt.length ===  3 
        ? resolt + nextElment + ")-" 
        : resolt.length ===  9 
        ? resolt + "-" + nextElment 
        : resolt + nextElment, 
        "("
    )
);