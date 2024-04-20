import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircleHeart } from "lucide-react";
import { Link } from "react-router-dom";

const BlogItem = ({ id }: { id: number }) => {
  return (
    <Link to={`/blog/${id}`}>
      <Card className="hover:border-accent-foreground transition-colors hover:shadow-lg cursor-pointer">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Card Title</CardTitle>
            <MessageCircleHeart
              className="h-5 w-5 hover:scale-110 transition-transform hover:text-accent-foreground"
              color="#475569"
              strokeWidth={1}
            />
          </div>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default BlogItem;
