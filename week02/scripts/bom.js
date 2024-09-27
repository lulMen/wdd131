const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

function addChapter() {
    if (input.value.trim() !== '') {
        // Create new elements for each chapter
        const chapter = document.createElement('li');
        const deleteButton = document.createElement('button');

        chapter.textContent = input.value;
        deleteButton.textContent = '❌';
        chapter.append(deleteButton);
        list.append(chapter);

        // Add event listener for the delete button
        deleteButton.addEventListener('click', () => {
            chapter.remove();
            input.focus();
        });

        input.value = '';
    }
    input.focus();
}

input.focus();
button.addEventListener('click', addChapter);