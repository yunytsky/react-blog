const Blogs = () => {
    return (
        <div className="blogs">

            <a href="/" className="blogs__blog blog">        
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
            </a>
        </div>
    );
}
 
export default Blogs;