function mssg(msg) {
  process.stdout.write(">> " + msg + "\n");
}

function run() {
  let ta = document.getElementById("textarea_js");
  let code = ta.value;
  window.opener.postMessage(JSON.stringify({ topic: "scratchpad", context: "reolink", code: code }));
}


window.addEventListener('message', (evt) => {
    var data = JSON.parse(evt.data);
mssg("RECEIVING END: SCRATCHPAD: " + evt.data);
});

function testFun() {
  mssg("AAAAA");
}


/*
setTimeout(() => {
  window.opener.postMessage(JSON.stringify({ some: "MESSAGE FROM SCRATCHPAD WINDOW" }));
}, 3000);
*/
