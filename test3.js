function randomNumberFromAToB(a, b) {
    let randomRange = Math.floor(Math.random() * (b - a));
    return randomRange + a;
}
let limit = 3;
let isTypeWrong = false;
let textType = document.getElementById(`text_type`);
let rollNumberBtn = document.getElementById(`roll_number_btn`);
rollNumberBtn.onclick = () => {
    let randomNum = Number(textType.value);
    if (randomNum > 10 || randomNum < 1) {
        alert(`Bạn đã nhập sai, vui lòng nhập lại`);
        isTypeWrong = true;
    }
    if (!isTypeWrong) {
        let answer = randomNumberFromAToB(1, 10);
        if (randomNum == answer) {
            alert(`Chúc mừng bạn đã đoán đúng số: ${answer}`);
            maxGuess = 3;
        } else {
            alert(`Bạn đã đoán sai, số đúng là: ${answer}`);
            limit--;

            alert(`Số lần quay còn lại là: ${limit}`);
            check();
        }
    }
    textType.value = ``;
}

function check() {
    if (limit < 1) {
        alert(`Bạn đã hết 3 lần quay`);
        limit = 3;
        return;
    }
}