// Odev cevabi :

// var computer = Math.floor(Math.random() * 20) + 1;
// console.log(computer);

// var times = window.prompt('Kac tahmin hakkiniz olsun istersiniz :');
// var newTimes = parseInt(times);


// if (isNaN(times) || (newTimes < 0)) {
//     window.alert(`Rakam olan bir sayi giriniz! Girdiginiz karakter : ${times}`);
    
// } else {
//     for (var i = 1 ; i <= newTimes; i++ ) {
//         var tahmin;
    
//         tahmin = window.prompt(`${i}. sayinizi giriniz :`);
//         tahmin = parseInt(tahmin);
    
//         if ( tahmin === computer ) {
            
//             document.getElementById('sonuc').src = 'smile.png';
//             document.getElementById('text').innerHTML = 'Tebrikler bildiniz';
//             document.body.style.backgroundColor = 'lightgreen';

//             window.alert(`Tebrikler ${i}. hakkinizda bildiniz.`);
//             break;
//         } else if (tahmin < computer) {
//             if ( i === newTimes ) {
//                 document.getElementById('sonuc').src = 'sad.png';
//                 document.getElementById('text').innerHTML = 'Üzgunum bilemediniz';
//                 document.body.style.backgroundColor = 'red';

//                 window.alert(`Uzgunum bilemediniz, tutulan sayi ${computer} idi.`);
//             } else {
//                 window.alert('Sayiniz kucuk kaldi, lütfen sayinizi artiriniz!');
//             }
//         } else {
//             if ( i === newTimes ) {
//                 document.getElementById('sonuc').src = 'sad.png';
//                 document.getElementById('text').innerHTML = 'Üzgunum bilemediniz';
//                 document.body.style.backgroundColor = 'red';

//                 window.alert(`Uzgunum bilemediniz, tutulan sayi ${computer} idi.`);
//             } else {
//                 window.alert('Sayiniz buyuk kaldi, lütfen sayinizi azaltiniz!')
//             }
//         }
//     }
// }


// var x = "100";
// var y = "10";

// var z = x/y;
// // bölme, cikartma ve carpma islemlerinde direk olarak datatype number oluyor.

// z = x * y;
// z = x - y;

// z = x + y;

// console.log(z); 
// console.log(typeof(z));


// ----------------------------

// NaN : not a number

// var x = 100 / "apple";

// console.log(x);
// console.log(typeof(x));

// console.log(typeof(NaN));

// // isNaN() : sonucun number olup olmadigini kontrol eder

// console.log(isNaN(100/"apple"));
// console.log(isNaN(100/"10"));
// console.log(isNaN(100/10));


// ----------------------------

// Infinity veya -Infinity : sinirsiz

// var x = 100 / 0;
// x = -100 / 0;

// console.log(x);
// console.log(typeof x)



// --------------------------
// .toString() metodu
// from number to string

// var x = 10;
// x = x.toString();

// console.log(x);
// console.log(typeof x);



// --------------------------
// .toFixed() metodu
// ondalik sayilarda virgulden kac basamak yazdirmak istersek kullaniyoruz.

// var x = 10.57896;

// x = x.toFixed(3);

// console.log(x);
// console.log(typeof x);



// --------------------------
// .toPrecision() metodu
// toplamda kac basamak sayi gostermek istiyor isek.


// var x = 10.57896;

// // x = x.toPrecision(3);
// // x = x.toPrecision(5);

// console.log(x.toPrecision(5));



// --------------------------

// Number() : number'a ceviriyor
// parseInt() : tamsayi yapiyor
// parseFloat() : ondalik sayi yapiyor


// var x = "100";

// x = Number(x);

// console.log(x)
// console.log(typeof x);

// var y = "10.0567";

// // y = parseInt(y);
//  y = parseFloat(y);

// console.log(y);
// console.log(typeof y);


// UYGULAMALAR

// 1. verilen sayi veya string ifadenin tersini ekrana yazdiran fonksiyon
// array metodu olan reverse()' ü ögrenmek

function reverseStr (str) {

    console.log(str);

    // var newStr = str.split('');
    // console.log(newStr);

    // newStr = newStr.reverse();
    // console.log(newStr);

    // newStr = newStr.join('');
    // console.log(newStr);

    // var newStr = str.split('').reverse().join('');
    // return newStr;
    var newStr;

    if (typeof(str) !== "string" ) {
        str = str.toString();
        newStr = str.split('').reverse().join('');
    } else {
        newStr = str.split('').reverse().join('');
    }

    return newStr;
}

//reverseStr('hamburg');

//console.log(reverseStr('hamburg'))

console.log(reverseStr(34567));
console.log(reverseStr('köln'));
console.log(reverseStr(false));




// var car = '';

// function araba () {
//     var car = 'toyota';
//     console.log(car);
// }

// araba();
// console.log(car);