const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`;
};
function getTime(){
	 let date=new Date()
	 let year=date.getFullYear()
	 let month=date.getMonth()+1;
	 let day=date.getDate();
	 return `${year}-${month}-${day}`
 }
const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};
function changeTimeToMinute(time){
  if(!time){
    return 0
  }
  return time*60
}
module.exports = {
  formatTime,
  changeTimeToMinute,
  getTime
};
