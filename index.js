

const onClickAdd = () => {
    //テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value ="";   
    
    //div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //liタグ生成し、生成されたタグに入力された値を挿入
    const li = document.createElement("li");
    li.innerText = inputText;
    console.log(li)

    //buttonタグ作成(完了、削除の2つ)
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const completeTarget = completeButton.parentNode;
        document.getElementById("incomplete-list").removeChild(completeTarget);
    });
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        //押された削除ボタンの親タグを未完了リストから削除
        const deleteTarget = deleteButton.parentNode;
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    console.log(div);

    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());