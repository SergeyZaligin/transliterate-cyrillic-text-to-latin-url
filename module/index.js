'use strict';

(function(){
  const root = this;
  const prev_module = root.transliterate;

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

  const transliterate = (string) => {
    string = string.replace(/зг/gi, 'zgh');
    let result = '';
    for(let i = 0; i < string.length; i++){
      result += library[string[i]] || library[string[i]] === '' ? library[string[i]] : string[i];
    }
    return result.toLowerCase();
  };

  transliterate.noConflict = function(){
    root.transliterate = prev_module;
  };

  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = transliterate;
    }
    exports.transliterate = transliterate;
  }
  else {
    root.transliterate = transliterate;
  }

}).call(this);
