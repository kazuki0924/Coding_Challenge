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

let isWithinButExcludingTo = (givenNumber: Number, numberFrom: Number, numberTo: Number): Boolean => {
 return givenNumber >= numberFrom && givenNumber < numberTo;
};

let isTimeWithin = (givenTime: Number, timeFrom: Number, timeTo: Number): Boolean => {
  //指定時刻、開始時刻、終了時刻が一致してる場合に対応
  if (givenTime === timeFrom && timeFrom === timeTo) {
    return true;
  } else if (timeFrom > timeTo) {
    //開始の時間と終了の時間を反転させた上で論理否定することで午後から午前の範囲に対応
    return !isWithinButExcludingTo(givenTime, timeTo, timeFrom);
  } else {
    return isWithinButExcludingTo(givenTime, timeFrom, timeTo);
  }
};

console.log(isTimeWithin(23, 22, 0) === true); //開始時刻が午後で終了時刻が午前で真
console.log(isTimeWithin(21, 22, 5) === false); //開始時刻が午後で終了時刻が午前で偽
console.log(isTimeWithin(1, 5, 8) === false); //指定した時間の範囲内に含まれない
console.log(isTimeWithin(6, 5, 9) === true); //指定した時間の範囲内に含まれる
console.log(isTimeWithin(8, 8, 9) === true); //開始時間を含み、終了時刻は含まないで真
console.log(isTimeWithin(10, 9, 10) === false);　//開始時間を含み、終了時刻は含まないで偽
console.log(isTimeWithin(10, 10, 10) === true); //開始時刻と終了時刻が同じ場合で真
console.log(isTimeWithin(11, 10, 10) === false); //開始時刻と終了時刻が同じ場合で偽
