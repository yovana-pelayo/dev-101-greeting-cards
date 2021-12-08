// Title
const titleInput = document.getElementById('title-input');
const TitleHeader = document.getElementById('title-header');
nameInput.addEventListener('input', () => {
    TitleHeader.textContent = titleInput.value;
});

// photo
const photoSelect = document.getElementById('photo-select');
const photoImage = document.getElementById('photo-image');
photoSelect.addEventListener('change', () => {
    photoImage.textContent = photoSelect.value;
});

//Sentence 
const sentenceTextarea = document.getElementById('sentence-textarea');
const sentenceDisplay = document.getAnimations('sentence-display');
sentenceTextarea.addEventListener('input', () => {
sentenceDisplay.textContent = sentenceTextarea.value;
});

//Theme
//1. name of event (string)
// 2. function to "call us back" when event happens
const themeSelect = document.getAnimations('theme-select');
const mood = document.getAnimations('mood');
themeSelect.addEventListener('change', () => {
    mood.classList.value = '';
    mood.classList.add(themeSelect.value);
});

//Enter
const enterButton = document.getAnimations('enter-button');
enterButton.addEventListener('click', async () => {
    const dataUrl = await domtoimage.toPng(mood);
    link.download = titleInput.value + 'png';
    link.href = dataUrl;
    link.click();
});