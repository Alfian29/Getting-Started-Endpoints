const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/siswa', (request, respone)=>{
    respone.end("Menampilkan siswa");
})

app.get('/siswa/:nama', (request, respone)=>{
    let namaSiswa = request.params.nama;

    respone.end("Menampilkan siswa dengan nama : " + namaSiswa);
})

app.post('/siswa', (request, respone)=>{
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    respone.end("Siswa baru! Nama : " + namaSiswa + ", Alamat : " + alamatSiswa);
})

app.delete('/siswa/:nama', (request, respone)=>{
    let namaSiswa = request.params.nama;

    respone.end("Siswa dengan nama " + namaSiswa + " akan dihapus dari sistem!");
})

app.put('/siswa/:id', (request, respone)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    respone.end("Siswa dengan ID " + id + " telah terupdate!");
})

app.listen('1010', (e)=>{
    console.log(e);
})