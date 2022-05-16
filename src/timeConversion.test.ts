import { timeConversion } from "./timeConversion";

describe('timeConversion', () => {
  it('should return AM military time', () => {
    const result = timeConversion('09:58:01AM');
    expect(result).toEqual('09:58:01');
  });

  it('should return PM military time', () => {
    const result = timeConversion('09:58:01PM');
    expect(result).toEqual('21:58:01');
  });
});
