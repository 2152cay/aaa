const searchInput = document.getElementById('search');
const termsList = document.getElementById('terms-list');
const descriptions = {
    'Wukong': 'Сунь Уку́н, иногда ошибочно называемый Сан Вуко́нг — китайский литературный персонаж, являющий из себя царя обезьян, известный по роману «Путешествие на Запад» У Чэнъэня.',
    'Monkey King': 'Этот термин также обозначает героя, Царя Обезьян...',
    'Rod': 'У Вуконга, мифического героя китайской культуры и популярного персонажа в различных играх, фильмах и произведениях, есть характерное оружие, имеющее способность уменьшаться и увеличиваться в размерах.',
    'Гора Черного Ветра': 'Это одна из локаций, упомянутых в китайском классическом романе "Путешествие на Запад".',
    'Хребет Желтого Ветра': 'Одно из опасных мест, упомянутых в классическом китайском романе "Путешествие на Запад".',
    'Горькое озеро': 'Горькое озеро представляется как широкая, бескрайняя водная гладь с мутной, солёной или горькой водой...',
    'Новый храм громовых раскатов': 'Новый храм Громовых раскатов расположен на горной вершине...',
    'Нижняя часть пагоды': 'Нижняя часть пагоды символизирует основу духовной практики...',
    'Верхняя часть пагоды': 'Верхняя часть пагоды играет значимую символическую роль...',
    'Долина Наслаждений': 'Долина наполнена иллюзиями, созданными демоническими или магическими существами...'
};

document.querySelectorAll('.term').forEach(term => {
    term.addEventListener('click', () => {
        const termName = term.getAttribute('data-term');
        const descriptionDiv = term.nextElementSibling;

        if (descriptionDiv.textContent === descriptions[termName]) {
            descriptionDiv.textContent = '';
            descriptionDiv.classList.remove('visible');
        } else {
            descriptionDiv.textContent = descriptions[termName] || 'Описание не найдено';
            descriptionDiv.classList.add('visible');
        }
    });
});

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    document.querySelectorAll('#terms-list li').forEach(item => {
        const termText = item.querySelector('.term').textContent.toLowerCase();
        if (termText.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
