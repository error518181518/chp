/*bài 1*/
function student01(name, age, address) {
    dataStudent = [name= "2 Thư", age= 13, address= "Ho Chi Minh"];
    console.log(dataStudent);
}

/*phones*/
var smartphones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy S6', price: 576 },
    { name: 'Galaxy Note 5', price: 489 }
];

function getprc() {
    prc_data = []
    for (i = 0; i<smartphones.length;i++) {
        prc_data.push(smartphones[i].price)
    }
    console.log(prc_data);
}

/*bài 3, chuyển func -> esc6*/ 
const foo = (x,y,z) =>{ 
    console.log(x,y,z); 
}

const foo01 = () =>{
    alert("Hello")
}

const foo02 = (a,b) => {
    let m = a+b*100
    return m
}

/*Sign in*/
let user = [

    {
        username: "toan",
        password: "123"
    },

    {
        name: "2 bạn Thư",
        username: "Thu",
        password: "456"
    },

    {
        name: "2 bạn Thư",
        username: "2 Thu",
        password: "789"
    },
]

/*sign in*/
function subm(link) {
    var username = document.getElementById("name").value
    var password = document.getElementById("pass").value

    for (i = 0; i < user.length; i++) {
        if (username == user[i].username && password == user[i].password) {
                console.log(link.value)
                location.href = 'https://www.youtube.com'
            alert(username + " logged in")
            return
        } else {   
             alert("incorrect! Check agin.")
    }
        }
    }



