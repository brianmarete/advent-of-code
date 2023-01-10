async function solution() {
  const input = await fetch("https://adventofcode.com/2022/day/2/input", {
    "headers": {
      "accept": "text/html",
      "cookie": "_ga=GA1.2.1329851348.1671023811; _gid=GA1.2.27293810.1671023811; session=53616c7465645f5fc6a1d2ab42ad038ef1c3a28875a72de12fda94345bfef89915b5429bcbc7ddb1abc6709aba49623047fb92900aae9e83a1eefc7c734da1e1",
    },
    "method": "GET"
  });
  const body = await input.text();

  const myChoices = { 'rock': 1, 'paper': 2, 'scissors': 3 }
  const whatToPlay = {
    'A': {
      'X': 'scissors',
      'Y': 'rock',
      'Z': 'paper'
    },
    'B': {
      'X': 'rock',
      'Y': 'paper',
      'Z': 'scissors'
    },
    'C': {
      'X': 'paper',
      'Y': 'scissors',
      'Z': 'rock'
    }
  }

  const points = {
    'X': 0,
    'Y': 3,
    'Z': 6
  }

  const sum = body.trim().split('\n')
      .map((turn) => myChoices[whatToPlay[turn[0]][turn[2]]] + points[turn[2]])
      .reduce((prev, next) => prev + next, 0)

  return sum;
}

solution().then((a) => console.log(a));
