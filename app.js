// html에서 값 가져오기
const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
let winningScoreSelect = document.querySelector('#playto');
// finish점수
let winningScore = 3;
// ture 되면 게임 종료
let isGameOver = false;

// 점수 증가
function updateScores(player, opponent) {
  // isGameOver를 ture로 만들어서 if 문 실행
  if (!isGameOver) {
    //플레이어의 점수 높이기
    player.score += 1;
    // 끝나는 점수와 같은 스코어 까지 올라가면 실행
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success')
      opponent.display.classList.add('has-text-danger')
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}


//플레이어1의 버튼을 눌렀을때 updataScores함수 go
p1.button.addEventListener('click', function () {
  updateScores(p1, p2)
})


// 플레이어2의 버튼을 눌렀을때 updataScores함수 go
p2.button.addEventListener('click', function () {
  updateScores(p2, p1)
})

// finish점수 정하면 리셋하기
winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
})


resetButton.addEventListener('click', reset)

function reset() {
  //게임을 다시 시작
  isGameOver = false;
  //스코어,점수색 초기화 버튼 초기화
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}
