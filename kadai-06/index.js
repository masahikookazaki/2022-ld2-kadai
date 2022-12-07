// (0) data.jsonを用意して、count: 0をセットする
// (1) 0を読み込んで JSON -> JavaScriptにパースする
const fs = require("fs")
const json = fs.readFileSync("./kadai-06/data.json").toString()


// (2) (1)でエラーが出たら終了
// (3) (1)でエラーが出なかったら、
    //countに１を足す
    //オブジェクトに updateAt というプロパティを足して現在時刻を表示
let object
try {
    object = JSON.parse(json)
} catch (error) {
    console.log("不正なJSONフォーマットです")
    process.exit(1)
}
object.count = object.count + 1
object.updateAt = new Date().toISOString()


// (4) オブジェクトをJSONに変換し、data.jsonとして上書き保存
fs.writeFileSync("./kadai-06/data.json", JSON.stringify(object))
