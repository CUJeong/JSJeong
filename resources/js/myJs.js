// script 태그 내에 작성하던 javaScript 코드 작성
function f_rgbColor(){
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    return "rgb("+red+", "+blue+", "+green+")";
}

const v_phone = "01073987332";

function getParameter(p_key){
    // 현재 주소를 변수에 저장
    let v_url = location.href;

    // 주소 내에 ? 가 존재하는지 확인
    if(v_url.indexOf("?") != -1){
        // 주소에서 ?를 기준으로 오른쪽 부분을 꺼냄
        let v_queryString = v_url.split("?")[1];

        // &를 기준으로 파라미터들을 분리시킨다.
        // ["id=akow283", "pw=a123", "name=zzz"]
        let v_params = v_queryString.split("&");

        for(let i = 0; i < v_params.length; i++){
            let v_key = v_params[i].split("=")[0];
            let v_value = v_params[i].split("=")[1];

            if(v_key == p_key){
                // 한글은 인코딩 되어 전달이 되어오므로 디코딩해서 리턴
                return decodeURIComponent(v_value);
            }
        }
    }
}