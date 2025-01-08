export type Category = {
    name: string;
};


export type Hobby = {
    id: string;
    title: string;
    category: {
      name: string;
    };
    publishedAt: string;
    createdAt: string;
};