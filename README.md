# Hasil

Saya sudah mengusahakan semirip mungkin dengan yang ada pada design. namun jujur saya agak kesulitan untuk membuatnya _responsive_.

Saya menyimpan data form kedalam _local storage_ dengan _key_ "checkout_data", jadi ketika user memuat ulang atau saat berkunjung kembali, kondisi terakhir pada halaman masih tetap terjaga seperti sebelumnya.

Metode yang saya gunakan untuk menyimpan data form adalah dengan menggunakan _debounce_ setiap 2 detik ketika ada perubahan. hal ini dilakukan agar saat user sedang mengisi form pada halaman _delivery page_, setiap perubahan (walau hanya 1 huruf) pada _input_ tidak langsung disimpan secara terus menerus.

## Delivery Page

Pada `text area` _address_ ada ketentuan untuk menampilkan _counter_ angka jumlah karakter yang tersisa, dikarenakan saya agak bingung harus ditampilkan dimana, akhirnya saya improvisasi dengan menampilkannya di kanan atas. saya juga menjadikan _email_ dan _phone number_ menjadi _required_ dikarenakan menurut saya kedua data ini penting ketika akan melakukan sebuah pembayaran online.

_user_ tidak akan bisa melanjutkan ke halaman _payment_ apabila semua _input_ belum terisi (kecuali _input_ dropshipper dapat dikosongkan juga dropshipper tidak dicentang).

## Payment Page

_Shipment_ dan _payment_ secara _default_ sudah memiliki _default value_ yaitu opsi pertama masing-masing. jadi user dapat langsung lanjut ke halaman _finish_ atau dapat menggantinya sesuai kebutuhan.

## Finish Page

Pada halaman ini jika user menekan navigasi _go to homepage_ maka semua data akan di _reset_ kembali dan kembali ke halaman _delivery_.
