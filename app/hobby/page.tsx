import { hobbyList } from "@/app/_libs/microcms";
import HobbyList from "@/app/_components/HobbyList";
import BirdIcon from "../_components/BirdIcon";
import PageTransition from "@/app/_components/PageTransition";

type Props = {
    children: React.ReactNode;
};



export default async function Page() {
    const { contents: hobby } = await hobbyList(); 
    return (
        <>  
            <PageTransition>
                <BirdIcon bird="" birdtype_2="" birdtype_3="" />
                <HobbyList hobbies={hobby} />
            </PageTransition>
        </>
    );
}
