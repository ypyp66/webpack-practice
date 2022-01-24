import members from "./member.csv";

for (const row of members.rows) {
  const name = row[1];
  const age = row[2];
  console.log(`${name} is ${age} years old`);
}

const 가나다 = 123;
console.log(가나다);
