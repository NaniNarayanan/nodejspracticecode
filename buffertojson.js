var buf = new Buffer.from("simply easy learning");

var json = buf.toJSON(buf);

console.log(json);