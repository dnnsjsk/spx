/**
 * Parse string to Object.
 *
 * @param {string} value String to decode and maybe parse.
 * @returns {object} Parsed object.
 */
function parse(value) {
  const base64Encode = (encodedData) => {
    const decodeUTF8string = function (str) {
      return decodeURIComponent(str
        .split('')
        .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
        .join(''));
    };
    if (typeof window !== 'undefined') {
      if (typeof window.atob !== 'undefined') {
        return decodeUTF8string(window.atob(encodedData));
      }
    }
    else {
      // eslint-disable-next-line node/no-deprecated-api
      return new Buffer(encodedData, 'base64').toString('utf-8');
    }
    const b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let o1;
    let o2;
    let o3;
    let h1;
    let h2;
    let h3;
    let h4;
    let bits;
    let i = 0;
    let ac = 0;
    let dec = '';
    const tmpArr = [];
    if (!encodedData) {
      return encodedData;
    }
    encodedData += '';
    do {
      h1 = b64.indexOf(encodedData.charAt(i++));
      h2 = b64.indexOf(encodedData.charAt(i++));
      h3 = b64.indexOf(encodedData.charAt(i++));
      h4 = b64.indexOf(encodedData.charAt(i++));
      bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;
      o1 = (bits >> 16) & 0xff;
      o2 = (bits >> 8) & 0xff;
      o3 = bits & 0xff;
      if (h3 === 64) {
        tmpArr[ac++] = String.fromCharCode(o1);
      }
      else if (h4 === 64) {
        tmpArr[ac++] = String.fromCharCode(o1, o2);
      }
      else {
        tmpArr[ac++] = String.fromCharCode(o1, o2, o3);
      }
    } while (i < encodedData.length);
    dec = tmpArr.join('');
    return decodeUTF8string(dec.replace(/\0+$/, ''));
  };
  if (value) {
    if (/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/.test(value)) {
      return JSON.parse(base64Encode(value).replace(/&quot;/g, '"'));
    }
    else {
      return JSON.parse(value);
    }
  }
}

export { parse as p };
