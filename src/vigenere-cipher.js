const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.lengthABC = 26;
    this.startPosition = 65;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];
      if (char.match(/[A-Z]/)) {
        const shift = key[j % key.length].charCodeAt(0) - this.startPosition;
        const encryptedChar = this.shiftChar(char, shift);
        result += encryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];
      if (char.match(/[A-Z]/)) {
        const shift = key[j % key.length].charCodeAt(0) - this.startPosition;
        const decryptedChar = this.shiftChar(char, -shift);
        result += decryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  shiftChar(char, shift) {
    const charCode = char.charCodeAt(0) - this.startPosition;
    const shiftedCharCode = (charCode + shift + this.lengthABC) % this.lengthABC;
    return String.fromCharCode(shiftedCharCode + this.startPosition);
  }
}

module.exports = {
  VigenereCipheringMachine
};
