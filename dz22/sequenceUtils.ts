export function generateFibonacci(limit: number): number[] {
  const sequence: number[] = [0, 1];

  while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= limit) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }

  return sequence;
}

export function generatePrimeNumbers(limit: number): number[] {
  const primes: number[] = [];

  for (let i = 2; i <= limit; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}
