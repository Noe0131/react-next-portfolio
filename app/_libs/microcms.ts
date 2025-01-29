export type Category = {
  name: string;
  } & MicroCMSListContent;

export type Hobby = {
  thumbnail: MicroCMSImage;
  title: string;
  description: string;
  category: Category[]
  } & MicroCMSListContent;


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

export type About = {
  name: string;
  explanation: string;
  imageUrl: string;
}

export type My = {
  imageUrl: string;
  about: string;
  aboutme: string;
  explanation: string; 
}

import exp from "constants";
import dayjs from "dayjs";
import { SrvRecord } from "dns";
import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk"; 
import { title } from "process";

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


export const hobbyList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Hobby>({
      endpoint: "hobby",
      queries, 
    });
    return listData;
  }


export const getHobbyDetail = async (
  contentId :string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Hobby>({
    endpoint: "hobby",
    contentId,
    queries,
  });
  return detailData;
};




