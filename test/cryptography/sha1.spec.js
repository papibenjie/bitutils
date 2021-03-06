import { expect } from 'chai';
import sha1 from '../../src/cryptography/sha1';

describe('#sha1()', () => {
  it('should return sha1 hash for string `foo bar`', () => {
    expect(sha1('foo bar')).to.equal('3773dea65156909838fa6c22825cafe090ff8030');
  });

  it('should return an empty string in case an empty string was given', () => {
    expect(() => sha1(5)).to.throw();
  });
});