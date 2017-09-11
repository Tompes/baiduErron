var data ;
$.getJSON('data.json')
    .then((res) => {
        data = res;
        $("button").click(somefn)
        $("body").keydown((e)=>{
            if (event.keyCode == "13")
                somefn();
        })
    })

function somefn(){
    var text = $(".searchBox").val().trim();
    $(".show").html("");
    if (text.length >= 1){
        $(".show").html("抱歉，错误库中没有找到该错误.");
        $.each(data,(k,v) => {
            if (text === k)
                var str = "<span>"+k+":</span><span>"+data[k]+"</span>";
                $(".show").html(str);
        })
    }
}
console.log('\n*\t Author : Tompes\n*\t Github : https://github.com/Tompes/baiduErron')