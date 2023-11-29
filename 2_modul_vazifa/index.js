const fs = require('fs')
const books = 'books/books.json'

fs.readFile(books, 'utf8', (err, data) => {
    if (err) {
      console.error('Xatolik yuz berdi:', err);
      return;
    }
  const jsonData = JSON.parse(data);

    
///// 1- misol




// const booksData = JSON.parse(data);
// console.log(booksData); 
// })




///// 2 Misol 




//   // ID orqali ma'lumotlarni chiqarish
//   const desiredId = 1;
//   const desiredData = jsonData.find(item => item.id === desiredId);

//   if (desiredData) {
//     console.log('Ma\'lumot topildi:', desiredData);
//     // Ma'lumotni qo'llash
//     // desiredData.id - ID
//     // desiredData.title - sarlavha
//     // desiredData.author - muallif
//   } else {
//     console.log('Ma\'lumot topilmadi');
//   }
// });



///// 3 / 3- Misol


// const newData = {
//     id: uuidv4(),
//     title: 'Ikki eshik orasida',
//     author: 'Hamid Olimjon',
//   };
  
//   // JSON faylni o'qish

  
//     // JSON faylni JavaScript obyektiga aylantirish
  
//     // Yangi ma'lumotni qo'shish
//     jsonData.push(newData);
  
//     // O'zgartirilgan ma'lumotlarni JSON formatiga aylantirish
//     const updatedData = JSON.stringify(jsonData, null, 2);
//     const existingData = jsonData.find(item => item.id === newData.id);
//     if (existingData) {
//       console.log('Bunday ma\'lumot allaqachon mavjud');
//       return;
//     }
//     // JSON faylni yozish
//     fs.writeFile(books, updatedData, 'utf8', err => {
//       if (err) {
//         console.error('Xatolik yuz berdi:', err);
//         return;
//       }
//       console.log('Ma\'lumot qo\'shildi');
//     });
//   });




///// 5-Misol



//   // O'chirish uchun ma'lumotning ID sini belgilang
//   const idToDelete = 4;

//   // Ma'lumotlarni ID bo'yicha tekshirib o'chirish
//   const updatedData = jsonData.filter(item => item.id !== idToDelete);

//   // Yangilangan ma'lumotlarni JSON formatiga aylantirish
//   const updatedDataJSON = JSON.stringify(updatedData, null, 2);

//   // JSON faylni yozish
//   fs.writeFile(books, updatedDataJSON, 'utf8', err => {
//     if (err) {
//       console.error('Xatolik yuz berdi:', err);
//       return;
//     }
//     console.log('Ma\'lumot o\'chirildi');
//   });
// });