
let nama = 'Zero';
let peran = 'Penyihir';

if (nama === '' && peran === '' ) {
    console.log('Nama harus diisi!');
} else if (nama && peran === '') {
    console.log('halo ' + nama + ',pilih peranmu untuk memulai game!')
} else if (nama && peran === 'Kesatria') {
    console.log('Selamat datang di Dunia Proxitia,' + nama)
    console.log('Halo, ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
} else if (nama && peran === 'Tabib') {
    console.log('Selamat datang di Proxitia,' + nama)
    console.log('Halo, ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka!')
} else if (nama && peran === 'Penyihir') {
    console.log('Selamat datang di Proxitia,' + nama)
    console.log('Halo, ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
}