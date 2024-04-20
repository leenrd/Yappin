import BlogItem from "@/components/blog-item";

const Blogs = () => {
  return (
    <section className="flex flex-col gap-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_, index) => (
        <BlogItem key={index} id={index} />
      ))}
    </section>
  );
};

export default Blogs;
