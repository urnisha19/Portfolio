import coming from '../../assets/blogsBg.gif';

const BlogsPage = () => {
    return (
        <div className='mx-16'>
            <div className="text-center mt-8">
                <h1 className="text-4xl font-bold text-gray-700 mb-6">My Blogs</h1>
                <img src={coming} alt="working" className="w-3/4 mx-auto" />
                <p className="mt-5 text-2xl font-semibold text-gray-800">Blogs coming soon...</p>
            </div>
        </div>
    );
};

export default BlogsPage;
