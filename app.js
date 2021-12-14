// Title
const nameInput = document.getElementById('name-input');
const nameHeader = document.getElementById('name-header');
nameInput.addEventListener('input', () => {
    nameHeader.textContent = nameInput.value;
});

// photo
const avatarSelect = document.getElementById('avatar-select');
const avatarImage = document.getElementById('avatar-image');
photoSelect.addEventListener('change', () => {
    avatarImage.src = avatarSelect.value;
});s

//Sentence 
const descriptionTextarea = document.getElementById('description-textarea');
const descriptionDisplay = document.getElementById('description-display');
descriptionTextarea.addEventListener('input', () => {
descriptionDisplay.textContent = descriptionTextarea.value;
});

//Theme
//1. name of event (string)
// 2. function to "call us back" when event happens
const themeSelect = document.getElementById('theme-select');
const mood = document.getElementById('mood');
themeSelect.addEventListener('change', () => {
    mood.classList.value = '';
    mood.classList.add(themeSelect.value);
});

//Enter
const enterButton = document.getElementById('enter-button');
enterButton.addEventListener('click', async () => {
    const dataUrl = await domtoimage.toPng(mood);
    const link = document.createElement('b');
    link.download = nameInput.value + '.png';
    link.href = dataUrl;
    link.click();
});