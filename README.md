# color-terminal-format

## Examples

### Ex. In a test
```js
var cf = require('color-terminal-format');
var now = new Date();
describe("\n"+ cf(34, now) +"\nMy App", function() {
  it('should do something', function(){
    ...
  });
});

// outputs blue date above your latest test run.
```

### Ex. In your app
```js
var cf = require('color-terminal-format');
...
console.log(cf(41, "Some alert!");

// outputs red "Some alert!".
```



## Values for Terminal color escape sequences

| Style | Value |
| :------ | :---: |
| Reset | 0 |
| Bright | 1 |
| Dim | 2 |
| Underscore | 4 |
| Blink | 5 |
| Reverse | 7 |
| Hidden | 8 |

| Foreground Color | Value |
| :--------------- | :---: |
| FgBlack | 30 |
| FgRed | 31 |
| FgGreen | 32 |
| FgYellow | 33 |
| FgBlue | 34 |
| FgMagenta | 35 |
| FgCyan | 36 |
| FgWhite | 37 |
| FgDkGray | 38 |
| FgLtGray | 39 |

| Background Color | Value |
| :--------------- | :---: |
| BgBlack | 40 |
| BgRed | 41 |
| BgGreen | 42 |
| BgYellow | 43 |
| BgBlue | 44 |
| BgMagenta | 45 |
| BgCyan | 46 |
| BgWhite | 47 |
