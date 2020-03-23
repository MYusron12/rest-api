//mengubah object ke json
// let avian = {
//     produk: ["cat", "pipa", "tiner"],
//     alamat: "balaraja",
//     divisi: {
//         divisi1: "bb",
//         divisi2: "cat"
//     }
// }
// console.log(JSON.stringify(avian));





//mengobah json ke object
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4 && xhr.status == 200) {
//         let avian = JSON.parse(this.responseText);
//         console.log(avian);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();



//memakai jquery
$.getJSON('coba.json', function(data){
    console.log(data);
});