import Post from "./models/post";

export default function createFakeData(){
  const posts = [...Array(40).keys()].map(i => ({
    title: `포스트 ${i}`,
    body: 'Velit in aliquip anim elit culpa magna. Est duis pariatur excepteur non ex laborum id amet. Nostrud adipisicing duis amet qui Lorem ullamco ullamco.',
    tags: ['가짜', '데이터']
  }));

  Post.insertMany(posts, (err, docs)=> {
    console.log(docs);
  });
}