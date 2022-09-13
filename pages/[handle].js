import { useForceUpdate } from "@react-spring/shared";
import { useEffect, useState } from "react";
import JsonDisplayer from "../components/JsonDisplayer";
import Navbar from "../components/Navbar";

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const routes = require('./assets/routes.json');
    // Get the paths we want to pre-render based on posts
    const paths = routes.map((route) => ({
      params: { handle: route.handle }
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts
    const startingData = require('./assets/content/'+params.handle+'.json');
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            startingData,
        },
    }
}

export default function page({ startingData }) {
    const routes = require('./assets/routes.json');
    const [data, setData] = useState(startingData);
    const [extraDatas, setExtraDatas] = useState([]);

    useEffect(()=>{
        console.log('aaaa', extraDatas);
    })

    const handleDataUpdate = (newData) =>{
        setData([...newData]);
        return newData;
    }

    function addAFile(event){
        for(let file of event.target.files){
            let reader = new FileReader();
            reader.onload = fileReaderHandler;
            reader.readAsText(file);
        }
    }

    function fileReaderHandler(event){
        console.log('event file reader', event)
        let dataToAdd = JSON.parse(event.target.result);

        setExtraDatas(extraDatas.concat(dataToAdd))
    }

    return(
        <main>
            <JsonDisplayer data={data} onRootChange={handleDataUpdate} isEditEnabled={true}></JsonDisplayer>
            try with your content! Add one or more json files!
            
            {extraDatas.map((extraData)=>{
                <div>
                    aaaaaaaaaaaaaaaaaaa 
                    <JsonDisplayer data={extraData} isEditEnabled={false}></JsonDisplayer>
                </div>
            })}
            <input onChange={addAFile} type="file" accept=".json" multiple/>
            <Navbar routes={routes} />
        </main>
    )
}