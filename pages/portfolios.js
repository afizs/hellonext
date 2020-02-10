import React, { useEffect, useState } from 'react';
import {Link} from '../routes'
import BaseLayout  from "../components/layouts/BaseLayout";
import Head from '../components/head';
import BasePage from "../components/BasePage";


const Portfolios = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function getPosts() {
          const res = await fetch('/api/posts');
          const newPost = await res.json();
          setPost(newPost);
        }
        getPosts();
      }, []);

 return(
    <BaseLayout>
        <Head title="Portfolio"/>
        <BasePage>
        <div>Portfolios</div>
        <ol>
            {post ? post.map((item, index) => {
            return <li key={index}>
                <Link route={`/portfolio/${item.id}`}>
                    <a>{item.title}</a>
                </Link></li>
            }): <span>Loading..</span>}
        </ol>
        </BasePage>
    </BaseLayout>
 )
 
}

export default Portfolios;