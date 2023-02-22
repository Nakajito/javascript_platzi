let player = "piedra";
let pc = "tijera";

if (player === "piedra" && pc === "piedra") {
    console.log("Empate")
} else if (player == "piedra" && pc === "papel"){
    console.log("Gana PC")
} else if ( player === "piedra" && pc === "tijera"){
    console.log("Gana Player")
} else if ( player === "papel" && pc === "piedra" ){
    console.log("Gana player")
} else if ( player === "papel" && pc === "papel"){
    console.log("Empate")
} else if ( player === "papel" && pc === "tijera" ){
    console.log("Gana PC")
} else if ( player === "tijera" && pc === "piedra"){
    console.log("Gana PC")
} else if ( player ==="tijera" && pc === "papel"){
    console.log("Gana Player")
} else if (player === "tijera" && pc === "tijera"){
    console.log("Empate")
}