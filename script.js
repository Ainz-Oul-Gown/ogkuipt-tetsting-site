const links = document.querySelectorAll('.nav-link');
const toggleButton = document.querySelector('.ham'); // выбираем вашу кнопку-гамбургер
const expandableList = document.getElementById('expandableList'); // выбираем ваш список

let isListExpanded = false;

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(l => l.style.backgroundColor = '');
        this.style.backgroundColor = '#555';
    });
});

function navigateTo(taskNumber) {
    const contentDiv = document.getElementById("content");
    contentDiv.style.opacity = 0;
    setTimeout(function () {
        contentDiv.innerHTML = `<h1>Задание ${taskNumber}</h1><p>Здесь должно быть описание и контент задания ${taskNumber}.</p`;
        contentDiv.style.opacity = 1;
    }, 100);
    
}

function toggleMenu() {
    document.querySelector('.ham1').classList.toggle('active');
    document.querySelector('.ham').classList.toggle('active');
    document.querySelector('.hamRotate').classList.toggle('active');// Добавляем/удаляем активный класс для кнопки-гамбургера
    handleListExpansion(); // Вызываем функцию, которая управляет открытием/закрытием списка
}
function handleListExpansion() {
    if (isListExpanded) {
        expandableList.style.maxHeight = null; // Удаляем установленную максимальную высоту, чтобы вернуть список к скрытому состоянию
    } else {
        expandableList.style.maxHeight = expandableList.scrollHeight + "px"; // Устанавливаем максимальную высоту, чтобы плавно показать список
    }

    isListExpanded = !isListExpanded; // Меняем состояние списка
}

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(l => l.style.backgroundColor = '');
        this.style.backgroundColor = '#555';
        toggleMenu(); // Вызываем функцию для имитации нажатия на кнопку-гамбургер
    });
});