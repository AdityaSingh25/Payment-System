// all three functions are same

function main() {
  // fetch returns a promise so we need that . then syntax
  fetch("nfwefe")
    .then((response) => response.json()) // response.json() is also a async call
    .then((data) => console.log(data));
}

function main2() {
  // fetch returns a promise so we need that . then syntax
  fetch("nfwefe").then(async (response) => {
    const data = await response.json();
  });
}

async function main3() {
  // fetch returns a promise so we need that . then syntax
  const response = await fetch("nfwefe");
  const data = await response.json();
}

// always prefer aync await syntax then .then syntax

// axios -> npm i axios

const axios = require("axios");

async function main4() {
  const response = await axios.get("fefwefdwe");
  // axios is smart enough that the data coming from server is json, so no need to call response.json()
  // and by default the whole data which is coming throug this api will be stored in response.data

  console.log(response.data);
}

//POST requests

async function post() {
  const response = await fetch("https://api.restful-api.dev/objects", {
    method: "GET",
    body: {
      username: "dede",
      password: "dedq",
    },
    headers: {
      Auhorization: "Bearer fmeewfwefw",
    },
  });
  const json = await response.json();
  console.log(json);
}
//post();

async function post2() {
  const response = await axios.post(
    "https://httpdump.app/dumps/0d507701-ff4d-462f-a2d8-20baa4537fd2",
    {
      username: "dede",
      password: "dedq",
    },
    {
      headers: {
        Auhorization: "Bearer fmeewfwefw",
      },
    }
  );
  console.log(response.data);
  console.log("hello");
}
post2();

//so what we learned is -> when we are sending a get request first we need to send is url then header
// in post request first url then body then header
