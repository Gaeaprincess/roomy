export const TestList = [{
  comment_id: 1,
  // 此评论唯一id
  comment_essay_id: 1,
  // 此评论所属的文章id
  root_comment: -1,
  // 根评论
  father_user_nick: '',
  user_info: {
    user_nick: '余欢',
    user_aratar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.4xjOBRgVSMrjC47-FH6qZwHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7'
  },
  date: '2021/9/27  10:30',
  content: '我也想，可以一起吗，我超自律。'
}, {
  comment_id: 2,
  // 此评论唯一id
  comment_essay_id: 1,
  // 此评论所属的文章id
  root_comment: -1,
  // 根评论
  father_user_nick: '',
  // 父级评论  -1 代表一级评论，其他代表上级评论
  user_info: {
    user_nick: '何林是猪',
    user_aratar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.UL4QLUdNZId8G6IvpZLz7AHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7'
  },
  date: '2021/9/27  10:30',
  content: '我也想，可以一起吗，我超自律。'
}, {
  comment_id: 3,
  // 此评论唯一id
  comment_essay_id: 1,
  // 此评论所属的文章id
  root_comment: 1,
  // 根评论
  father_user_nick: '余欢',
  // 父级评论  -1 代表一级评论，其他代表上级评论
  user_info: {
    user_nick: '文艺丹',
    user_aratar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.bAZ-3kualUsee0I2VzjBvwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7'
  },
  date: '2021/9/27  10:30',
  content: '我也想，可以一起吗，我超自律。'
}, {
  comment_id: 4,
  // 此评论唯一id
  comment_essay_id: 1,
  // 此评论所属的文章id
  root_comment: 1,
  // 根评论
  father_user_nick: "余欢",
  // 父级评论  -1 代表一级评论，其他代表上级评论
  user_info: {
    user_nick: '张艳霞',
    user_aratar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.bAZ-3kualUsee0I2VzjBvwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7'
  },
  date: '2021/9/27  10:30',
  content: '加我一个'
}, {
  comment_id: 5,
  // 此评论唯一id
  comment_essay_id: 1,
  // 此评论所属的文章id
  root_comment: 2,
  // 根评论
  father_user_nick: '何林是猪',
  // 回复的那个人  '' 代表一级评论，其他代表上级评论
  user_info: {
    user_nick: '张艳霞',
    user_aratar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.bAZ-3kualUsee0I2VzjBvwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7'
  },
  date: '2021/9/27  10:30',
  content: '加我一个'
}, {
  comment_id: 6,
  // 此评论唯一id
  comment_essay_id: 2,
  // 此评论所属的文章id
  root_comment: -1,
  // 根评论
  father_user_nick: '',
  // 回复的那个人  '' 代表一级评论，其他代表上级评论
  user_info: {
    user_nick: '余欢',
    user_aratar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.bAZ-3kualUsee0I2VzjBvwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7'
  },
  date: '2021/9/27  10:30',
  content: '戈尔贡带我'
}, {
  comment_id: 7,
  // 此评论唯一id
  comment_essay_id: 2,
  // 此评论所属的文章id
  root_comment: -1,
  // 根评论
  father_user_nick: '',
  // 回复的那个人  '' 代表一级评论，其他代表上级评论
  user_info: {
    user_nick: '张艳霞',
    user_aratar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.bAZ-3kualUsee0I2VzjBvwHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7'
  },
  date: '2021/9/27  10:30',
  content: '加我一个'
}];
let len = 5;
export const getMyMessage = userInfo => {
  return new Promise((resolve, reject) => {
    let _1 = [];

    for (let i of TestList) if (i.father_user_nick == userInfo.user_nick) _1.push(i);

    resolve(_1);
  });
};
export function getEssayCommentList(essayId) {
  let _1 = [];

  for (let i of TestList) if (i.comment_essay_id === essayId) _1.push(i);

  return _1;
}
export function addComment(item) {
  return new Promise((resolve, reject) => {
    item.comment_id = ++len; // console.log(item);

    TestList.push(item);
    resolve();
  });
} // Promise.then.catch

export const userInfo = {
  user_nick: "余欢",
  user_aratar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.4xjOBRgVSMrjC47-FH6qZwHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7'
};