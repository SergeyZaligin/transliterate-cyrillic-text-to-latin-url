### Simple transliterate cyrillic text to latin url
### Enable
to use at server side run:
```
nmp install transliterate-cyrillic-text-to-latin-url
```

to use in browser download this module refer to the file module/index.js using the src attribute in the script tag.


### Usage
The module exposes *transliterate* function which should be called with one parameter of the type String. The function returns an output of the type String with all cyrillic characters replaced
with latin characters. Example:

```javascript
const result = transliterate('Урл на русском языке');
result = url-na-russkom-yazyke
```

a method *.noConflict* is available on *transliterate* object. This method, when invoken, restores the namespace transliterate to the previous value, if any.

