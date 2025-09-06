const hira_s1undo = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","ゐ","ゑ","を","ん","あ","い","う","え","お","か"]
const youon_hira_s1undo = ["ぁ","ぃ","ぅ","ぇ","ぉ","ゕ","ゖ","っ","ゃ","ゅ","ょ","ゎ","ぁ","ぃ","ぅ","ぇ","ぉ","ゕ"]
const dakuon_hira_s1undo = ["が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ","が","ぎ","ぐ","げ","ご","ば"]
const canhandakuon_hira_s1undo = ["か","き","く","け","こ","は","ひ","ふ","へ","ほ","か","き","く","け","こ","は"]
const handakuon_hira_s1undo = ["か゚","き゚","く゚","け゚","こ゚","ぱ","ぴ","ぷ","ぺ","ぽ","か゚","き゚","く゚","け゚","こ゚","ぱ"]
const kata_s1undo = ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヰ","ヱ","ヲ","ン","ア","イ","ウ","エ","オ","カ"]
const youon_kata_s1undo = ["ァ","ィ","ゥ","ェ","ォ","ヵ","ヶ","ッ","ャ","ュ","ョ","ヮ","ァ","ィ","ゥ","ェ","ォ","ヵ"]
const dakuon_kata_s1undo = ["ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","ガ","ギ","グ","ゲ","ゴ","バ"]
const canhandakuon_kata_s1undo = ["カ","キ","ク","ケ","コ","ハ","ヒ","フ","ヘ","ホ","カ","キ","ク","ケ","コ","ハ"]
const handakuon_kata_s1undo = ["カ゚","キ゚","ク゚","ケ゚","コ゚","パ","ピ","プ","ペ","ポ","カ゚","キ゚","ク゚","ケ゚","コ゚","パ"]

document.getElementById("undoconvert").addEventListener("click", unconvert);

function unconvert() {
    textsplit();

    if (text == "") {
        outputspace.innerHTML = "変換する文字を入力してください";
    } else if (document.getElementById("converttype").value == "s1") {
        undoconvert_s1();
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

function undoconvert_s1() {
    aftertext = "";
    for (let i = 0; i < beforearray.length; i++) {
        if (canhandakuon_hira_s1undo.lastIndexOf(beforearray[i]) != -1) {
            if (beforearray[i+1] == "゚") {
                console.log(canhandakuon_hira_s1undo.lastIndexOf(beforearray[i]) - 6);
                aftertext = aftertext + handakuon_hira_s1undo[canhandakuon_hira_s1undo.lastIndexOf(beforearray[i]) - 6];
                i++;
            } else {
                aftertext = aftertext + hira_s1undo[hira_s1undo.lastIndexOf(beforearray[i]) - 6];
            }
        } else if (hira_s1undo.lastIndexOf(beforearray[i]) != -1) {
            aftertext = aftertext + hira_s1undo[hira_s1undo.lastIndexOf(beforearray[i]) - 6];
        } else if (youon_hira_s1undo.lastIndexOf(beforearray[i]) != -1) {
            aftertext = aftertext + youon_hira_s1undo[youon_hira_s1undo.lastIndexOf(beforearray[i]) - 6];
        } else if (dakuon_hira_s1undo.lastIndexOf(beforearray[i]) != -1) {
            aftertext = aftertext + dakuon_hira_s1undo[dakuon_hira_s1undo.lastIndexOf(beforearray[i]) - 6];
        } else if (handakuon_hira_s1undo.lastIndexOf(beforearray[i]) != -1) {
            aftertext = aftertext + handakuon_hira_s1undo[handakuon_hira_s1undo.lastIndexOf(beforearray[i]) - 6];
        } else if (canhandakuon_kata_s1undo.lastIndexOf(beforearray[i]) != -1) {
            if (beforearray[i+1] == "゚") {
                aftertext = aftertext + handakuon_kata_s1undo[canhandakuon_kata_s1undo.lastIndexOf(beforearray[i]) - 6];
                i++;
            } else {
                aftertext = aftertext + kata_s1undo[kata_s1undo.lastIndexOf(beforearray[i]) - 6];
            }
        } else if (kata_s1undo.lastIndexOf(beforearray[i]) != -1) {
            aftertext = aftertext + kata_s1undo[kata_s1undo.lastIndexOf(beforearray[i]) - 6];
        } else if (youon_kata_s1undo.lastIndexOf(beforearray[i]) != -1) {
            aftertext = aftertext + youon_kata_s1undo[youon_kata_s1undo.lastIndexOf(beforearray[i]) - 6];
        } else if (dakuon_kata_s1undo.lastIndexOf(beforearray[i]) != -1) {
            aftertext = aftertext + dakuon_kata_s1undo[dakuon_kata_s1undo.lastIndexOf(beforearray[i]) - 6];
        } else if (handakuon_kata_s1undo.lastIndexOf(beforearray[i]) != -1) {
            aftertext = aftertext + handakuon_kata_s1undo[handakuon_kata_s1undo.lastIndexOf(beforearray[i]) - 6];
        } else {
            aftertext = aftertext + beforearray[i];
        }
    }
    outputspace.innerHTML = aftertext.replace(/\n/g, "<br>");

    return aftertext;
}