export type Category = {
  name: string; 
};

export type Hobby = {
  id: string; 
  title: string; 
  category: Category; 
  publishedAt: string; 
  createdAt: string; 
};

export type Skill = {
  id: string; 
  imageUrl: string;  
  language: string;  
  category: {
    system: string;
    generalLevel: string; 
  };
  explanation: string;  
};


