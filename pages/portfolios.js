import React, { useEffect, useState } from 'react';
import {Link} from '../routes'
import Head from '../components/head';
import Nav from '../components/nav';


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
    <div>
        <Head title="Portfolio"/>
        <Nav />
        <div>Portfolios</div>
        <ol>
            {post ? post.map((item, index) => {
            return <li key={index}>
                <Link route={`/portfolio/${item.id}`}>
                    <a>{item.title}</a>
                </Link></li>
            }): <span>Loading..</span>}
        </ol>
    </div>
 )
 
}

export default Portfolios;