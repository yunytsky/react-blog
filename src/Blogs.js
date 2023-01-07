import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([{ name: "Blog number 1", id: 1 }, { name: "Blog number 2", id: 2 }, { name: "Blog number 2", id: 3 }]);
    const deleteBlog = (id) => {
        const renewedBlogs = blogs.filter((blog) => id !== blog.id);
        setBlogs(renewedBlogs);
    }

    return (
        <div className="blogs">
            <h1>Blogs</h1>

            {blogs.map((blog) => (
                <div className="blfog">
                    <a href="/" className="blogs__blog blog">
                        <div className="blog__image">
                            <div className="hover" src="/img/hover.png" alt="hover" />
                            <img src="/img/blog_1.jpg" alt="man travelling" />
                        </div>
                        <span>{blog.name}</span>
                    </a>
                    <button onClick={() => { deleteBlog(blog.id) }}>Delete</button>
                </div>
            ))}
            


            {/* <a href="/" className="blogs__blog blog">
                <div className="blog__image">
                    <div className="hover" src="/img/hover.png" alt="hover" />
                    <img src="/img/blog_1.jpg" alt="man travelling" />
                </div>
                <span>Blog number 1</span>
            </a>
            <a href="/" className="blogs__blog blog">
                <div className="blog__image">
                    <div className="hover" src="/img/hover.png" alt="hover" />
                    <img src="/img/blog_2.jpg" alt="people camping" />
                </div>
                <span>Blog number 2</span>
            </a>
            <a href="/" className="blogs__blog blog">
                <div className="blog__image">
                    <div className="hover" src="/img/hover.png" alt="hover" />
                    <img src="/img/blog_3.jpg" alt="city" />
                </div>
                <span>Blog number 3</span>
            </a> */}

        </div>
    );
}
 
export default Blogs;