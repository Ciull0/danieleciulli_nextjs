import Block from "../components/Block";
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
    const data = require('./assets/content/'+params.handle+'.json');
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            data,
        },
    }
}

export default function page({ data }) {
    const routes = require('./assets/routes.json');
    return(
        <main>
            
            <ul>
                <li>
                    {data.map((item, index) => {
                        switch (item) {
                            case 'Experiences':
                                return(
                                    item.blocks.map((data, index)=>{
                                        return(
                                            <Block data={data} key={index}>
                                            </Block>
                                        )
                                    })
                                );
                        }
                    })}
                </li>
            </ul>
            <Navbar routes={routes} />
        </main>
    )
}