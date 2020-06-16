const gen = document.querySelector("#gen");
const aa = document.querySelector("#aa");
const bb = document.querySelector("#bb");
const cc = document.querySelector("#cc");
const dd = document.querySelector("#dd");
const ee = document.querySelector("#ee");
const ff = document.querySelector("#ff");
const gg = document.querySelector("#gg");
const hh = document.querySelector("#hh");
const ii = document.querySelector("#ii");

gen.addEventListener("click", generate);

function generate(){
  let a = chance.name({ prefix: true });
  let b = chance.birthday({string: true, american: false});
  let c = chance.address();
  let d = chance.email({domain: "gmail.com"});
  let e = chance.state({ country: 'us', full: true  });
  let f = chance.ssn();
  let g = chance.profession({rank: true});
  let h = chance.company();
  let i = chance.phone({ country: "us", mobile: true });

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);
  console.log(g);
  console.log(h);
  console.log(i);

  aa.value = a;
  bb.value = b;
  cc.value = c;
  dd.value = d;
  ee.value = e;
  ff.value = f;
  gg.value = g;
  hh.value = h;
  ii.value = i;
}