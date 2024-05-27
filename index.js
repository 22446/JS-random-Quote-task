var empty="";
arr=["“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "A room without books is like a body without a soul."
]
auth=["--NELSON MANDELLA",
    "-- Oscar Wilde",
    "-- Frank Zappa."
]
function newQuete(){
    
        empty=Math.floor(Math.random() *arr.length)
        emptyY=Math.floor(Math.random() *arr.length)
     
    document.getElementById("quete").innerHTML=arr[empty];
    document.getElementById("quete1").innerHTML=auth[emptyY];
      
}