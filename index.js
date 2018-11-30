var c = 0;
var t = []
window.onload = function () {
    foo();
    window.addEventListener("scroll", (e) => {
        var g = ((window.innerHeight + window.scrollY) + 100 >= document.body.offsetHeight);
        if (g) {
            foo();
        }
    }
    );
}

function foo() {
    return new Promise((_v) => {
        t = Array.apply(null, {
            length: 15
        }).map(Number.call, (a) => {
            c++;
            return {
                el: document.querySelector(".card_box").cloneNode(true),
                i: "https://avatars1.githubusercontent.com/u/" + c
            };
        }
        );
        t.forEach((v, i) => {
            setTimeout(() => {
                document.querySelector(".flex_card").append(v.el);

            }
                , 500 + (i * 100));
            _v(88);

        }

        );

    }
    ).then((_c) => {
        t.forEach((v, i) => {
            setTimeout(() => {
                v.el.querySelector("img").src = v.i;
            }
                , 500 + (i * 200));
            t = [];
        }
        );
        ;

    }
    );

}
