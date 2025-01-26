import { hobbyList  } from "@/app/_libs/microcms";
import HobbyList from "@/app/_components/HobbyList"; 

type Props = {
    children: React.ReactNode;
};

export default async function Page() {
    const { contents: hobby } = await hobbyList(); 
    return <HobbyList hobbies={hobby} />;
}
