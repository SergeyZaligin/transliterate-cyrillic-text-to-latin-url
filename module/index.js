'use strict';

(function(){
    
  const that = this;
  const prev_module = that.transliterate;

  const library = {
    'A': 'А',
    'а': 'a',
    'Б': 'B',
    'б': 'b',
    'В':'V',
    'в':'v',
    'Г':'G',
    'г':'g',
    'Ґ':'Ģ',
    'ґ':'ģ',
    'Д':'D',
    'д':'d',
    'Е':'E',
    'е':'e',
    'Ё':'Yo',
    'ё':'yo',
    'Є':'E',
    'є':'e',
    'Ж':'Zh',
    'ж':'zh',
    'З':'Z',
    'з':'z',
    'И':'I',
    'и':'i',
    'І':'I',
    'і':'i',
    'Ї':'Yi',
    'ї':'yi',
    'Й':'J',
    'й':'j',
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
    'Х':'H',
    'х':'h',
    'Ц':'C',
    'ц':'c',
    'Ч':'Ch',
    'ч':'ch',
    'Ш':'Sh',
    'ш':'sh',
    'Щ':'Shh',
    'щ':'shh',
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
    ' ': '-'
  };

  const transliterate = (str) => {

    const string = str.replace(/зг/gi, 'zgh');
    
    var pre = string.trim();
    let result = '';
    let cnt = pre.length;

    for (let i = 0; i < cnt; i++) {
      result += library[pre[i]] || library[pre[i]] === '' ? library[pre[i]] : pre[i];
    }

    return result.toLowerCase();

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
