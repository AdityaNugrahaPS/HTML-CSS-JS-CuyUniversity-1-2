console.log('adit')

const namaSaya = 'aditya nugraha'
console.log(namaSaya)

let usia = 18

const biodata = document.getElementById('biodata'); //div dengan id biodata
console.log(biodata);

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = 'generasi remaja'
    } else {
        generasi = 'generasi bayi'
    }

    return biodata.innerHTML = generasi; //memasukkan ke html nya
}

generateBiodata()


