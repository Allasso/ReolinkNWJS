function mssg(msg) {
  if (typeof(process) != "undefined" && typeof(process.stdout) != "undefined") {
    process.stdout.write(">>p " + msg + "\n");
  } else if (window.dump) {
    dump(">>d " + msg + "\n");
  } else {
    console.log(">>c " + msg);
  }
}

