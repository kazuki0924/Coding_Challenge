/**
 * ある時刻(0時～23時)が、指定した時間の範囲内に含まれるかどうかを調べる
 * プログラムを作ってください。
 * 言語は問いませんが、ライブラリなどを使ってはいけません。

 * 以下のような条件を満たすこと。
 * - ある時刻と、時間の範囲(開始時刻と終了時刻)を受け取る。
 * - 時刻は、6時であれば6のような指定でよく、分単位は問わない。
 * - 範囲指定は、開始時刻を含み、終了時刻は含まないと判断すること。
 * - ただし開始時刻と終了時刻が同じ場合は含むと判断すること。
 * - 開始時刻が22時で終了時刻が5時、というような指定をされても動作すること。
 * }
 */

/**
 * @param {givenTime} 0-23 ある時刻
 * @param {timeFrom} 0-23 時間の範囲(開始時刻)
 * @param {timeTo} 0-23 時間の範囲(終了時刻)
 * @return {boolean} 含まれるかどうか
 */

let isTimeWithin = (givenTime, timeFrom, timeTo) => {
  if (timeFrom > timeTo) {
    let forSwapping = timeFrom;
    timeFrom = timeTo;
    timeTo = forSwapping;
    return !(givenTime < timeTo && givenTime >= timeFrom);
  } else {
    return givenTime < timeTo && givenTime >= timeFrom;
  }
};

console.log(isTimeWithin(1, 22, 0));
