var myHttp = new XMLHttpRequest()
var apiContainer;
myHttp.open('GET','https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=84c8c86570e24764bde95b1a88242570')
myHttp.send()

myHttp.addEventListener('readystatechange',function(){

    if( myHttp.readyState==4){
        var myres = JSON.parse(myHttp.response).articles
        apiContainer = myres
        desplay()
    }

})

function desplay(){
    var cartoon =``
    for(var i=0; i<apiContainer.length;i++){
        cartoon+=`
        <div class="col-md-4">
        <div class="post bg-light p-3">
        <img class='w-100' src='${apiContainer[i].urlToImage}'/>
            <h2>${apiContainer[i].title}</h2>
            <p>${apiContainer[i].description}</p>
            <a href="${apiContainer[i].url}" class="btn btn-outline-dark">..المزيد</a>
        </div>
    </div>`
    }
    document.getElementById('showData').innerHTML=cartoon
}













