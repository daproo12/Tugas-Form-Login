let modal = document.querySelector(".ifmodal");
let salah = document.querySelector(".ifmodalfalse");
let form = document.getElementById("form");
let latar =document.getElementById("background");

function validasi() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "pweb_C" && password == "123123") {
        modal.classList.add('show');
        salah.classList.remove('show');
        rubahbg()
    } else {
        salah.classList.add('show');
        latar.style.background = "#ffce46dd";
    }
}
function rubahbg(){
    latar.style.background = "green";
}
form.addEventListener('submit', (link) => {
    link.preventDefault()

    validasi()
})
modal.addEventListener('click', function () {
    this.classList.remove('show');
});
modal.querySelector('.modal-content').addEventListener('click', function (e) {
    e.stopPropagation();
});

