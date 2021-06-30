# js-input-masking-polyfill

A polyfill for the
[`Intl.InputMask`](https://github.com/tomayac/js-input-masking) 🎭 proposal.

## Status

Unstable. Submitted as an [idea](https://es.discourse.group/t/input-masking/835)
to TC39.

## Installation

```bash
npm install --save js-input-masking-polyfill
```

## Usage

```js
import 'js-input-masking-polyfill';

new Intl.InputMask('credit-card-number').format('4012888888881881');
// "4012 8888 8888 1881"

// 15 digits.
new Intl.InputMask('credit-card-number').format('378282246310005');
// "3782 822463 10005"
```

## Demo

You can see `Intl.InputMask` in action in the
[demo](https://tomayac.github.io/js-input-masking-polyfill/demo/).

## License

Apache 2.0
