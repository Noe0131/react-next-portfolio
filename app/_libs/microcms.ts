
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

import { SrvRecord } from "dns";
import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk"; 

// Later 型の定義
export type Later = {
  imageUrl: {
    url: string,
    height: number,
    width: number,
  };
  language: string;
  system: string;
  generalLevel: string;
  explanation: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});


export const skillList = async (queries?: MicroCMSQueries) => {
  try {
    const listData = await client.getList<Later>({
      endpoint: "skills", 
      queries,
    });
    return listData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};
