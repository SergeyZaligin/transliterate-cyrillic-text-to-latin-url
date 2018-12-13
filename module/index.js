'use strict';

(function(){
    
  const that = this;
  const prev_module = that.transliterate;

  // https://yandex.ru/support/nmaps/app_transliteration.html
  const library = {
    'A': 'А',
    'а': 'a',
    'Б': 'B',
    'б': 'b',
    'В':'V',
    'в':'v',
    'Г':'G',
    'г':'g',
    'Д':'D',
    'д':'d',
    'Е':'E',
    'е':'e',
    'Ё':'Yo',
    'ё':'yo',
    'Ж':'Zh',
    'ж':'zh',
    'З':'Z',
    'з':'z',
    'И':'I',
    'и':'i',
    'Й':'Y',
    'й':'y',
    'К':'K',
    'к':'k',
    'Л':'L',
    'л':'l',
    'М':'M',
    'м':'m',
    'Н':'N',
    'н':'n',
    'О':'O',
    'о':'o',
    'П':'P',
    'п':'p',
    'Р':'R',
    'р':'r',
    'С':'S',
    'с':'s',
    'Т':'T',
    'т':'t',
    'У':'U',
    'у':'u',
    'Ф':'F',
    'ф':'f',
    'Х':'Kh',
    'х':'kh',
    'Ц':'Ts',
    'ц':'ts',
    'Ч':'Ch',
    'ч':'ch',
    'Ш':'Sh',
    'ш':'sh',
    'Щ':'Sch',
    'щ':'sch',
    'Ъ':'',
    'ъ':'',
    'Ы':'Y',
    'ы':'y',
    'Ь':'',
    'ь':'',
    'Э':'E',
    'э':'e',
    'Ю':'Yu',
    'ю':'yu',
    'Я':'Ya',
    'я':'ya',
    '’':'',
    ' ': '-',
    '?': '',
    '!': '',
    '.': '',
    '/': '',
    '\\': '',
    '%': '',
    '&': '',
    '@': '',
    '(': '',
    ')': '',
    '_': '',
    '^': '',
    '*': '',
    '#': '',
    '№': '',
    '"': '',
    ':': '',
    ';': ''
  };

  const transliterate = (str, numberInUrl = true) => {

    const string = str.replace(/зг/gi, 'zgh');
    
    const pre = string.trim();
    let result = '';
    let cnt = pre.length;

    for (let i = 0; i < cnt; i++) {
      result += library[pre[i]] || library[pre[i]] === '' ? library[pre[i]] : pre[i];
    }

    const finallyResult = numberInUrl ? result.match(/-{0,1}[A-Za-z0-9]+/gi).join('') : result.match(/-{0,1}[A-Za-z]+/gi).join('');
    
    return finallyResult.toLowerCase();

  };

  transliterate.noConflict = function () {
    that.transliterate = prev_module;
  };

  if ( typeof exports !== 'undefined' ) {

    if ( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = transliterate;
    }

    exports.transliterate = transliterate;

  } else {
    that.transliterate = transliterate;
  }

}).call(this);
