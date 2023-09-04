const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Port yang akan digunakan

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`Permintaan: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Selamat datang di aplikasi Express.js sederhana!');
});
  
app.get('/about', (req, res) => {
    res.send('Halaman Tentang Kami');
});

// Menjalankan server dan mendengarkan permintaan HTTP
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
