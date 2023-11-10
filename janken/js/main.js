

    $(document).ready(function() {
      let janken = ["グー", "チョキ", "パー"];
      let userChoice = "";

      $("button").on("click", function() {
        userChoice = $(this).text(); // ユーザーの選択を取得

        const p_choice = Math.floor(Math.random() * 3); // ユーザーの選択を数値に変換
        const c_choice = Math.floor(Math.random() * 3); // コンピュータの選択をランダムに生成




        // コンピュータの選択を表示
        if (c_choice === 0) {
          $("#c_choice").text("COM: グー");
        } else if (c_choice === 1) {
          $("#c_choice").text("COM: チョキ");
        } else {
          $("#c_choice").text("COM: パー");
        }

        // 判定と結果を表示
        if (userChoice === janken[c_choice]) {
          $("#janken_result").text("引き分け");
        } else if (
          (userChoice === "グー" && c_choice === 1) ||
          (userChoice === "チョキ" && c_choice === 2) ||
          (userChoice === "パー" && c_choice === 0)
        ) {
            $("#janken_result").text("勝ち");
            nt_button();
            
        } else {
          $("#janken_result").text("負け");
          }
          
         


      });

     
    });

//選択した手を保存
$(function () {
  $("#rock, #scissors, #paper").on("click", function () {
     hand = "";
    if ($(this).attr("id") === "rock") {
      hand = "グー";
    } else if ($(this).attr("id") === "scissors") {
      hand = "チョキ";
    } else if ($(this).attr("id") === "paper") {
      hand = "パー";
    }
    localStorage.setItem("jankenhand", hand);
    
  });

});

      function nt_button() {
          $("#nt_button").show();

        $("#nt_button").on("click", function () {

          window.location.href = "http://127.0.0.1:5500/html/second.html";
          console.log(location.href)
          })
        };
              
  
        
          
          console.log("#nt_button");
        