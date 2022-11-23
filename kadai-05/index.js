//課題５
//オブジェクト profile を作成する
const profile = {
    name: "日本太郎",
    age: 20,
    hobby: "読書",
    major: "法学",
    grade: "A",
}

//オブジェクト dictionary を作成する
const dictionary = {
    name: "名前",
    age: "年齢",
    hobby: "趣味",
    major: "専攻",
    grade: "成績",
}

//ループを使って全てのプロパティを表示
const keys = Object.keys(profile)
for (const key of keys) {
    console.log("私の" + dictionary[key] + "は" + profile[key] + "です")
}
