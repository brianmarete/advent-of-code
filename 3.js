async function solution() {
  const input = await fetch("https://adventofcode.com/2022/day/3/input", {
    "headers": {
      "accept": "text/html",
      "cookie": "_ga=GA1.2.1329851348.1671023811; _gid=GA1.2.27293810.1671023811; session=53616c7465645f5fc6a1d2ab42ad038ef1c3a28875a72de12fda94345bfef89915b5429bcbc7ddb1abc6709aba49623047fb92900aae9e83a1eefc7c734da1e1",
    },
    "method": "GET"
  });
  const body = await input.text();

  const bodyArr = body.split("\n");

  const output = [];
  for (let index = 0; index < bodyArr.length; index += 3) {
    output.push(bodyArr.slice(index, index + 3))
  }

  return output
    .map((items) => {
      const duplicates = []

      for(let i in items[0]) {
        if(items[1].includes(items[0][i]) && items[2].includes(items[0][i])) {
          duplicates.push(items[0][i])
        }
      }

      return Array.from(new Set(duplicates))
    })
    .map((duplicate) => {
      if (!duplicate.length) {
        return 0;
      }

      const code = duplicate[0].charCodeAt(0);

      if (code >= 97 && code <= 122) {
        return code - 96;
      }

      if (code >= 65 && code <= 90 ) {
        return code - 38;
      }
      return code;
    })
    .reduce((a,b) => {
      return a + b;
    },0)

}

solution().then((a) => console.log(a));