// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

//  *** Declarando as variaveis***
let nome = "Petra";
let jogadorXP = 10002;

switch (true) {
    case jogadorXP < 1000:
        console.log(`O Herói de nome ${nome} está no nível de Ferro`);
        break;
    case jogadorXP >= 1001 && jogadorXP <= 2000:
        console.log(`O Herói de nome ${nome} está no nível de Bronze`);
        break;
    case jogadorXP >= 2001 && jogadorXP <= 5000:
        console.log(`O Herói de nome ${nome} está no nível de Prata`);
        break;
    case jogadorXP >= 5001 && jogadorXP <= 7000:
        console.log(`O Herói de nome ${nome} está no nível de Ouro`);
        break;
    case jogadorXP >= 7001 && jogadorXP <= 8000:
        console.log(`O Herói de nome ${nome} está no nível de Platina`);
        break;
    case jogadorXP >= 8001 && jogadorXP <= 9000:
        console.log(`O Herói de nome ${nome} está no nível de Ascendente`);
        break;
    case jogadorXP >= 9001 && jogadorXP <= 10000:
        console.log(`O Herói de nome ${nome} está no nível de Imortal`);
        break;
    default:
        console.log(`O Herói de nome ${nome} está no nível de Radiante`);
        break;
}
