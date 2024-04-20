import MaxWidthShell from "@/components/shared/max-width-shell";
import { useParams } from "react-router-dom";

const BlogArticle = () => {
  const { id } = useParams();
  return <MaxWidthShell>Page for {id}</MaxWidthShell>;
};

export default BlogArticle;
