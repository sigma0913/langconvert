const hira = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","ゐ","ゑ","を","ん","あ","い","う","え","お","か"]
const youon_hira = ["ぁ","ぃ","ぅ","ぇ","ぉ","ゕ","ゖ","っ","ゃ","ゅ","ょ","ゎ","ぁ","ぃ","ぅ","ぇ","ぉ","ゕ"]
const dakuon_hira = ["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ","が","ぎ","ぐ","げ","ご","ば"]
const canhandakuon_hira = ["か","き","く","け","こ","は","ひ","ふ","へ","ほ"]
const handakuon_hira = ["か゚","き゚","く゚","け゚","こ゚","ぱ","ぴ","ぷ","ぺ","ぽ","か゚","き゚","く゚","け゚","こ゚","ぱ"]
const kata = ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヰ","ヱ","ヲ","ン","ア","イ","ウ","エ","オ","カ"]
const youon_kata = ["ァ","ィ","ゥ","ェ","ォ","ヵ","ヶ","ッ","ャ","ュ","ョ","ヮ","ァ","ィ","ゥ","ェ","ォ","ヵ"]
const dakuon_kata = ["ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","ガ","ギ","グ","ゲ","ゴ","バ"]
const canhandakuon_kata = ["カ","キ","ク","ケ","コ","ハ","ヒ","フ","ヘ","ホ"]
const handakuon_kata = ["カ゚","キ゚","ク゚","ケ゚","コ゚","パ","ピ","プ","ペ","ポ","カ゚","キ゚","ク゚","ケ゚","コ゚","パ"]

const inputspace = document.getElementById("inputfield");
const outputspace = document.getElementById("resultfield");
let text;
let beforearray;
let aftertext;

document.getElementById("doconvert").addEventListener("click", convert);

function convert() {
    textsplit();

    if (text == "") {
        outputspace.innerHTML = "変換する文字を入力してください";
    } else if (document.getElementById("converttype").value == "s1") {
        doconvert_s1();
    } else if (document.getElementById("converttype").value == "s2") {
        outputspace.innerHTML = "未実装です";
        //doconvert_s2();
    } else if (document.getElementById("converttype").value == "t1") {
        outputspace.innerHTML = "未実装です";
        //doconvert_t1();
    } else if (document.getElementById("converttype").value == "t2") {
        outputspace.innerHTML = "未実装です";
        //doconvert_t2();
    }
}

function textsplit() {
    text = inputspace.value;
    beforearray = String(text).split("");
    return beforearray;
}

function doconvert_s1() {
    aftertext = "";
    for (let i = 0; i < beforearray.length; i++) {
        if (canhandakuon_hira.indexOf(beforearray[i]) != -1) {
            if (beforearray[i+1] == "゚") {
                aftertext = aftertext + handakuon_hira[canhandakuon_hira.indexOf(beforearray[i]) + 6];
                i++;
            } else {
                aftertext = aftertext + hira[hira.indexOf(beforearray[i]) + 6];
            }
        } else if (hira.indexOf(beforearray[i]) != -1) {
            aftertext = aftertext + hira[hira.indexOf(beforearray[i]) + 6];
        } else if (youon_hira.indexOf(beforearray[i]) != -1) {
            aftertext = aftertext + youon_hira[youon_hira.indexOf(beforearray[i]) + 6];
        } else if (dakuon_hira.indexOf(beforearray[i]) != -1) {
            aftertext = aftertext + dakuon_hira[dakuon_hira.indexOf(beforearray[i]) + 6];
        } else if (handakuon_hira.indexOf(beforearray[i]) != -1) {
            aftertext = aftertext + canhandakuon_hira[handakuon_hira.indexOf(beforearray[i]) - 6] + "゚";
        } else if (canhandakuon_kata.indexOf(beforearray[i]) != -1) {
            if (beforearray[i+1] == "゚") {
                aftertext = aftertext + handakuon_kata[canhandakuon_kata.indexOf(beforearray[i]) + 6];
                i++;
            } else {
                aftertext = aftertext + kata[kata.indexOf(beforearray[i]) + 6];
            }
        } else if (kata.indexOf(beforearray[i]) != -1) {
            aftertext = aftertext + kata[kata.indexOf(beforearray[i]) + 6];
        } else if (youon_kata.indexOf(beforearray[i]) != -1) {
            aftertext = aftertext + youon_kata[youon_kata.indexOf(beforearray[i]) + 6];
        } else if (dakuon_kata.indexOf(beforearray[i]) != -1) {
            aftertext = aftertext + dakuon_kata[dakuon_kata.indexOf(beforearray[i]) + 6];
        } else if (handakuon_kata.indexOf(beforearray[i]) != -1) {
            aftertext = aftertext + canhandakuon_kata[handakuon_kata.indexOf(beforearray[i]) - 6] + "゚";
        } else {
            aftertext = aftertext + beforearray[i];
        }
    }
    outputspace.innerHTML = aftertext.replace(/\n/g, "<br>");

    return aftertext;
}