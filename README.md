### Simple module for transliteration of cyrillic text into latin under the rules of Yandex transit
### Enable
to use at server side run:
```
nmp install transliterate-cyrillic-text-to-latin-url
yarn add transliterate-cyrillic-text-to-latin-url
```

to use in browser download this module refer to the file module/index.js using the src attribute in the script tag.


### Usage
The module exposes *transliterate* function which should be called with one or two parameters of the type String and Boolean. The function returns an output of the type String with all cyrillic characters replaced
with latin characters. Example:

```javascript
const result = transliterate('Урл;; на ру@сск13ом \    яз?ыке!!!', false);
result = url-na-russkom-yazyke

or

const result = transliterate('Урл;; на ру@сск13ом \    яз?ыке!!!');
result = url-na-russk13om-yazyke
```

a method *.noConflict* is available on *transliterate* object. This method, when invoken, restores the namespace transliterate to the previous value, if any.

