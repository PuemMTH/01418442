document.addEventListener("DOMContentLoaded", () => {
    const secret = document.querySelector(".secret");
    const check = document.querySelector(".check");
    const message = document.querySelector(".message");
    const score = document.querySelector(".score");
    const highscore = document.querySelector(".highscore");
    const btn = document.querySelector(".btn");
    const game = document.querySelector(".game");
    const gameInfo = document.querySelector(".game-info");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    let secretNumber = Math.ceil(Math.random() * 21);
    const guess = document.querySelector(".guess");

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        
        const guessNumber = Number(guess.value);
        const scoreNumber = Number(score.textContent);

        console.log(`secretNumber: ${secretNumber}`);
        console.log(`guessNumber: ${guessNumber}`);

        if(check.textContent == "เล่นอีกครั้ง") {
            location.reload();
        }

        if(scoreNumber == 1 ) {
            message.textContent = "คุณแพ้แล้ว";
            alert("คะแนนหมดแล้ว ยินดีด้วยคุณแพ้แล้ว");
            message.style.color = "#f00";
            check.textContent = "เล่นอีกครั้ง";
        }
        
        if (guessNumber === secretNumber) {
            message.textContent = "ถูกต้องแล้ว";
            secret.textContent = secretNumber;
            highscore.textContent = scoreNumber;
            // ส่วนของการเปลี่ยนสี 
            secret.style.backgroundColor = "#60b347";
            secret.style.color = "#222";
            game.style.backgroundColor = "#60b347";
            gameInfo.style.backgroundColor = "#60b347";
            left.style.backgroundColor = "#60b347";
            right.style.backgroundColor = "#60b347";

            document.body.style.background = "linear-gradient(180deg, red, orange, yellow)";
            document.body.style.backgroundSize = "100%";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundAttachment = "fixed";
            // จบส่วนของการเปลี่ยนสี

            check.textContent = "เล่นอีกครั้ง";
        }else if (guessNumber != secretNumber) {
            if (guessNumber > 21) {
                message.textContent = "เลขที่ทายมาต้องอยู่ระหว่าง 1 - 21";
                message.style.color = "#f00";
            } else if (guessNumber > secretNumber) {
                message.textContent = "มากไปนะ";
                message.style.color = "#f00";
                score.textContent = scoreNumber - 1;
            } else {
                message.textContent = "น้อยไปนะ";
                message.style.color = "#f00";
                score.textContent = scoreNumber - 1;
            }
        }
    });
}); 