var connect = require("connect");
const url = require("url");
var port = 3000;
var app = connect();

app.use("/lab2", function (req, res) {
  try {
    var parsedUrl = url.parse(req.url, true);
    var obj = parsedUrl.query;
    console.log(obj);

    if (obj.x == undefined || obj.y == undefined) {
      res.write("Please, insert both numbers: x and y.");
      return;
    }
    
    if (isNaN(parseInt(obj.x)) || isNaN(parseInt(obj.y))){
      res.write("Please, insert a valid number.");
      return;
    }

    if (obj.method == "divide" && obj.y == 0) {
      res.write("Cannot divide number by 0.");
      return;
    }

    var result;
    switch (obj.method) {
      case "add":
        result = `${obj.x} + ${obj.y} = ${parseInt(obj.x) + parseInt(obj.y)}`;
        break;
      case "subtract":
        result = `${obj.x} - ${obj.y} = ${parseInt(obj.x) - parseInt(obj.y)}`;
        break;
      case "multiply":
        result = `${obj.x} * ${obj.y} = ${parseInt(obj.x) * parseInt(obj.y)}`;
        break;
      case "divide":
        result = `${obj.x} / ${obj.y} = ${parseInt(obj.x) / parseInt(obj.y)}`;
        break;
      default:
        result = null;
        break;
    }

    if (result == null) {
      res.write(
        "Please, insert one of the following methods: add, subtract, multiply or divide."
      );
      return;
    }

    res.write(result);

  } catch (error) {
    console.log(error);
    res.write("error");

  } finally {
    res.end();
  }
});

app.use((req, res) => {
  res.statusCode = 404;
  res.end("404 Not Found.");
});

app.listen(port);
{
  console.log("Server is running on http://localhost:3000");
}
