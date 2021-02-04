var adjustBands = document.querySelectorAll('.adjust-band');
var documentName = document.querySelector('.document-name');
var title = document.querySelector('title');
var changesMade = false;

documentName.addEventListener('keydown', (e) => {
    if(e.target.value == '') {
        title.innerHTML = 'untitled document';
    }
    title.innerHTML = e.target.value;
});

adjustBands.forEach(element => {
    element.addEventListener('dragstart', (e) => {
        console.log('drag started...');
    });

    element.addEventListener('dragend', () => {
        console.log('drag ended...');
    });
});
