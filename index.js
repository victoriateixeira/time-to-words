// expecting time to be a string in the format like '8:15' or '12:30'

const writtenNumber = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'midday', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half'];

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  // const [minutes, hours] = time.split(':').map((el) => parseInt(el, 10));
  const minutes = parseInt(time.split(':')[1], 10);
  const hours = parseInt(time.split(':')[0], 10);

  if (minutes === 0) {
    return `${writtenNumber[hours]} o'clock`;
  }

  if (minutes <= 30) {
    return `${writtenNumber[minutes]} past ${writtenNumber[hours]}`;
  }

  if (minutes > 30) {
    const remainingMinutes = 60 - minutes;
    return `${writtenNumber[remainingMinutes]} to ${writtenNumber[hours + 1]}`;
  }

  return 'half past eight';
}

module.exports = { convertTimeToWords };
