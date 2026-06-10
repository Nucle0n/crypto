import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
    
    const sc = new createInterface({input,output});

    let somme   = parseFloat(await sc.question(`\nEntrez le montant initial : `));
    let taux    = parseFloat(await sc.question(`Entrez le taux bénéficiaire quotidien : `)) / 100;
    let nbA     = parseFloat(await sc.question(`Entrez la durée en jours :`));

    let intComp = Math.round(((somme * Math.pow((1 + taux),nbA)) - somme) * 100) / 100;

    let taxe = intComp * 0.3;
    let apTaxe = (intComp + somme) - taxe;

    
    console.log(`\x1b[1;4m\nCALCUL DE INTERETS :\x1b[0m\nIntérêts composés\t= \x1b[3;38;2;255;184;0m${intComp}\x1b[0m\t| Nouveau capital = \x1b[3;38;2;255;184;0m${intComp + somme}\x1b[0m\nBénefice arpès taxation : \x1b[3;38;2;255;184;0m${intComp - taxe}\x1b[0m\t| Capital après taxation : \x1b[3;38;2;255;184;0m${apTaxe}\x1b[0m`);

    sc.close();
}

await main();