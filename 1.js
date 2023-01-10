async function solution() {
  const input = await fetch("https://adventofcode.com/2022/day/1/input", {
    "headers": {
      "accept": "text/html",
      "cookie": "_ga=GA1.2.1329851348.1671023811; _gid=GA1.2.27293810.1671023811; session=53616c7465645f5fc6a1d2ab42ad038ef1c3a28875a72de12fda94345bfef89915b5429bcbc7ddb1abc6709aba49623047fb92900aae9e83a1eefc7c734da1e1"
    },
    "method": "GET"
  });

  const body = await input.text();

  const allCalories = body
    .trim()
    .split("\n\n")
    .map((calories) => calories.split("\n"))
    .map((calories) => calories.reduce((prev, next) => parseInt(prev) + parseInt(next), 0))
    .sort((a,b) => b - a)

  const sumOfTop3 = allCalories
    .slice(0, 3)
    .reduce((a,b) => a + b, 0)

  return sumOfTop3;

}

solution().then((a) => console.log(a));
