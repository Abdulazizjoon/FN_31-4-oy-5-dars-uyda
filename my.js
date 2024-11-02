//Ternary operator
//1-misol
// let son1 = +prompt("son-1");
// let son2 = +prompt("son-2");
// son1 == son2 ? console.log("Teng") : console.log("Teng emas");

//2-misol
// let son1 = +prompt("son-1");

// son1>0 ? console.log("musbat") : son1<0? console.log("manfiy"):console.log('nol');

//3-misol
// let son = +prompt("yoshingizni kirting");

// son >= 18
//   ? console.log("Kirish ruxsat etilgan")
//   : console.log("Ruxsat etilmagan");

//4-misol
// let son = +prompt('son')

// son%2==0?console.log('juft'):console.log('toq');

//5-misol
// let temp = +prompt("haroratni kirting");
// temp < 0
//   ? console.log("Sovuq")
//   : temp < 30
//   ? console.log("iliq")
//   : console.log("issiq");

//Switch case
//1-misol
// let son = +prompt("hafta kunini kirting");
// switch (son) {
//   case 1:
//     console.log("dushanba");
//     break;
//   case 2:
//     console.log("seshanba");
//     break;
//   case 3:
//     console.log("choranba");
//     break;
//   case 4:
//     console.log("payshanba");
//     break;
//   case 5:
//     console.log("juma");
//     break;
//   case 6:
//     console.log("shanba");
//     break;
//   case 7:
//     console.log("yakshanba");
//     break;

//   default:
//     console.log("bunday hafta mavjud emas");
//     break;
// }

//2-misol

// let mesa = +prompt('oy')

// switch (mesa) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;

//     default:
//         console.log('bunday oy mavjud emas');

//     break;
// }

//3-misol
// let baho = prompt("bahoyingizni kirting");

// switch (baho) {
//   case 'a':
//     console.log("alo");
//     break;
//   case 'b':
//     console.log("yahshi");
//     break;
//   case 'b':
//     console.log("yahshi");
//     break;
//   case 'c':
//     console.log("qoniqarli");
//     break;
//   case 'd':
//     console.log("yomon");
//     break;
//   case 'f':
//     console.log("juda yomon");
//     break;
//     default:
//         console.log('bunday baho turi yoq');

//     break;
// }

//4-misol
// let str = prompt("kun vaqti");

// switch (str) {
//   case "tong":
//     console.log("Yaxshi tong!");
//     break;
//   case "kun":
//     console.log("Yaxshi kun!");
//     break;
//   case "kech":
//     console.log("Yaxshi kech!");
//     break;
//   case "tun":
//     console.log("Yaxshi tun!");
//     break;

//   default:
//     console.log("bunday kun vaqti yoq");

//     break;
// }

//5-misol
// let valyuta = prompt("valyuta");

// switch (valyuta) {
//   case "usd":
//     console.log("AQSh dollari");
//     break;
//   case "eur":
//     console.log("Yevro");
//     break;
//   case "gbp":
//     console.log("Funt Sterling");
//     break;

//   default:
//     console.log("bunday valyuta mavjud emas");

//     break;
// }

//Break/continue
//1-misol
// for (let i = 1; i <=10; i++) {
//     console.log(i);
//         if (i==5) {
//             break
//         }
// }

//2-misol
//  for (let i = 1; i <=10; i++) {
//         if (i==5) {
//             continue
//      }
//     console.log(i);
// }

//3-misol
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
//     if (i == 15) {
//         break
//     }
// }

//4-misol
// for (let i = 1; i <= 10; i++) {
//   if (i%2==0) {
//     console.log(i);
//   } else {
//       continue
//   }
// }

//5-misol
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0) {
//     continue
//   } else {
//     console.log(i);
//   }
// }

//while, do…while
//1-misol
// let i=1
// while (i<=10) {
//     console.log(i);
//     i++;
// }

//2-misol
// let i=1
// do {
//     console.log(i);
//     i++
// } while (i<=10);

//3-misol
// let i=10
// while (i>=1) {
//     console.log(i);
//     i--;
// }

//4-misol
let i=10
do {
    console.log(i);
    i--
} while (i>=1);

