export const dongtai = [{
  dongtai_id: 1,
  touxiang: "https://tse2-mm.cn.bing.net/th/id/OIP-C.6RMkLazqoJZhaP1MOJQDawHaLH?w=200&h=300&c=7&r=0&o=5&pid=1.7",
  name: "文文",
  yuedushunum: 567,
  neirong: "有没有一起考研的朋友？",
  photo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.Agioz3aXz_FYkGN4uocCKAHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7",
  quanzi: "#备考考研",
  pinglunshu: 520,
  dianzanshu: "1.2K",
  isDianZan: false
}, {
  dongtai_id: 2,
  touxiang: "https://uploadfile.bizhizu.cn/2015/1202/20151202021418437.jpg",
  name: "雪雪",
  yuedushunum: 1667,
  neirong: "大家一起来讨论考教资的注意事项",
  photo: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/00/ChMkJlbKw4SIGAYwAAL2D92xCwYAALG4QJogqsAAvYn014.jpg",
  quanzi: "#备考教资",
  pinglunshu: 789,
  dianzanshu: "13.2K",
  isDianZan: true
}];
let len = 2;
export function getDongTai(idx) {
  for (let i of dongtai) {
    if (i.dongtai_id === idx) return i;
  }
}
export function updateDianZan(id) {
  dongtai[id - 1].isDianZan = !dongtai[id - 1].isDianZan;
}
export function addDongTai(item) {
  return new Promise((resolve, reject) => {
    item.dongtai_id = ++len;
    dongtai.push(item);
    console.log(dongtai);
    resolve();
  });
}