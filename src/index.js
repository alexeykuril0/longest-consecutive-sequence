module.exports = function longestConsecutiveLength(array) {
  array.sort( (a, b) => a - b);

  var count = 1, result = 0;


  var length = array.length;
  for(var i = 0;i < length; i++){
    if(length == 0){
      result = 0;
    }
    else if(length == 1){
      result = 1;
    }

    if(array[i] == array[i + 1]){
      continue;
    }
    if(array[i] == array[i + 1] - 1){
      count++;
    }
    else{
      count = 1;
    }

    if(count > result){
      result = count;
    }
  }

  return result;
}