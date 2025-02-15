type Post = {
  id: number;
  name: string;
  date: Date;
};

let posts: Post[] = [
  {
    id: 1,
    name: 'Post 1',
    date: new Date('2025-02-01'),
  },
  {
    id: 2,
    name: 'Post 2',
    date: new Date('2025-02-04'),
  },
  {
    id: 3,
    name: 'Post 2',
    date: new Date('2025-02-04'),
  },
  {
    id: 4,
    name: 'Post 2',
    date: new Date('2025-02-07'),
  },
  {
    id: 5,
    name: 'Post 2',
    date: new Date('2025-02-06'),
  },
  {
    id: 6,
    name: 'Post 2',
    date: new Date('2024-12-04'),
  },
];

//fake fetch
export async function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let okResponse = true;
      if (okResponse) {
        resolve({ data: posts });
      } else {
        reject({ message: 'Error' });
      }
    }, 4000);
  });
}
