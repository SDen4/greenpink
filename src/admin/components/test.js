// const button1 = document.querySelector("#testbutton");

// // Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'http://localhost/');


// button1.addEventListener("click", () => {
//     console.log("button's working!");

//     xhr.send();
// });

// // Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function () {
//     if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//         console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//     } else { // если всё прошло гладко, выводим результат
//         console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
//     }
// };

const button1 = document.querySelector("#testbutton");
// const url = `http://localhost/`;

const url = new URL(`https://www.cbr-xml-daily.ru/daily_json.js`);

button1.addEventListener("click", () => {
    const request1 = new XMLHttpRequest();
    request1.open('GET', url, false);
    request1.send();

    const data = JSON.parse(request1.response);
    console.log(data);
});