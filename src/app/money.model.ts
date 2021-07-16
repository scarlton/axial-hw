const regex = /([0-9]*\.?[0-9]*)([a-z]?)/i;

export class Money {
  input: string;
  number: number;
  suffix: string;

  constructor(init: string) {
    this.input = init;
    this.number = 0;
    this.suffix = '';

    let matches = this.input.match(regex)
    if (matches) {
      this.number = parseFloat(matches[1]);
      this.suffix = matches[2];
    }
  }

  value(): number {
    console.log(this.number, this.multiplier());
    return this.number * this.multiplier();
  }

  multiplier(): number {
    switch (this.suffix) {
      case 'b':
      case 'B':
        return 1000000000;

      case 'k':
      case 'K':
        return 1000;

      case 'm':
      case 'M':
        return 1000000;

      default:
        return 1;
    }
  }
}
