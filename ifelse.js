var nama = 'mikael'
var peran = ''
if (!nama == '' && peran == ''){
    console.log('Nama harus diisi!')
} else if(nama == 'mikael' && peran == ''){
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
} else if(peran === 'Ksatria'){
    var tugas = "kamu dapat menyerang dengan senjatamu!";
    var nama = 'Nana'
    var peran ='Ksatria'
    console.log(`Selamat datang di Dunia Proxytia,${nama}`);
    console.log(`Halo ${peran} ${nama}, ${tugas}`)
}
