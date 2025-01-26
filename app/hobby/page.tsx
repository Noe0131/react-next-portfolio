
import { hobbyList  } from "@/app/_libs/microcms";
import HobbyList from "@/app/_components/HobbyList"; 
import PageTransition from "@/app/_components/PageTransition";

type Props = {
    children: React.ReactNode;
};

export default async function Page() {
    const { contents: hobby } = await hobbyList(); 
    return (
    <>  
        <PageTransition>
        <HobbyList hobbies={hobby} />
        </PageTransition>
    </>
    );
};