var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`);
if(hora < 12 && hora > 6) {
    console.log('Bom dia')
} else if(hora <= 18 && hora >= 7) {
    console.log('Boa tarde');
} else if(hora <= 24 && hora >=19) {
    console.log('Boa noite')
} else if(hora >= 1) {
    console.log('Boa madrugada');
}