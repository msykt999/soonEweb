var name1 = "김창열";
        var name2 = "김말숙";
        var pw1 = "0000";
        var pw2 = "1234";

        

        function button1_click() {
            var res1 = document.getElementById("name").value; 
            var res2 = document.getElementById("pw").value;  

            if (res1 == name1 && res2 == pw1) {
               location.href = "https://www.naver.com";
            } 

            else if (res1 == name2 && res2 == pw2) {
                location.href = "https://www.youtube.com";
            } 

            else {
                alert("로그인을 실패하였습니다.")
            }
        }