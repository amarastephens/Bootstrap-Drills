document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    h1.className = "h1";
    let h1Text = document.createTextNode("This is an h1");
    h1.appendChild(h1Text);
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode("This is an h2");
    h2.appendChild(h2Text);
    h2.className = "h2";
    div.appendChild(h2);
    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode("This is an h3");
    h3.appendChild(h3Text);
    h3.className = "h3";
    div.appendChild(h3);
    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode("This is an h4");
    h4.appendChild(h4Text);
    h4.className = "h4";
    div.appendChild(h4);
    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode("This is an h5");
    h5.appendChild(h5Text);
    h5.className = "h5";
    div.appendChild(h5);
    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode("This is an h6");
    h6.appendChild(h6Text);
    h6.className = "h6";
    div.appendChild(h6);




    let colors = ["#F4A381", "#01ABA9", "#ffdc40", "#FF5733", "#F333FF", "#33FFE0", "#7433FF", "#33FF36"];
    document.querySelector("h1").addEventListener("dblclick", function () {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        let pickHeader = document.getElementsByTagName("h1")[0];
        pickHeader.style.color = randomColor;
    });

    let counter = 1
    document.querySelector(".btn").addEventListener("click", function () {

        let ul = document.createElement("ul");
        let li = document.createElement('li');
        li.className = "li";
        li.innerText = "This is list item " + counter
        ul.appendChild(li);
        counter++
        document.body.appendChild(ul);
    });


    document.querySelectorAll("li").addEventListener("click", function () {

        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        let pickLi = document.getElementsByTagName("li");
        pickLi.style.color = randomColor;


    });

    document.querySelectorAll("li").addEventListener("dblclick", function () {
        if (li) {

            li.remove();
        }
    })


})




