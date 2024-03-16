
const Header = () => {
    return (
        <header className="container mx-auto mt-12">
            <div className="hero rounded-3xl h-[300px] lg:h-[500px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518291344630-4857135fb581?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay rounded-3xl  h-[300px] lg:h-[500px] bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Discover an cooking
class 
</h1>
      <p className="mb-5">Discover an exceptional cooking
class tailored for you!</p>
      <div className="flex justify-center gap-4">
      <button className="btn rounded-3xl btn-primary">Explore Now</button>
      <button className="btn rounded-3xl bg-transparent text-white">Our Feedback</button>
      </div>
      
    </div>
  </div>
</div>
        </header>
    );
};

export default Header;