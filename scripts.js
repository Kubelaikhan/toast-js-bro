

let toastBox = document.getElementById('toastBox');

function showToast(){
    let tost = document.createElement('div');
    tost.classList.add('toast');
    tost.innerHTML = 'success';
    toastBox.appendChild(tost);
}
