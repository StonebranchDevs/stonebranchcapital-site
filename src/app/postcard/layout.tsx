import RevealInit from "@/components/RevealInit";
import PostcardHeader from "@/components/PostcardHeader";
import PostcardFooter from "@/components/PostcardFooter";

export default function PostcardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="postcard-layout">
      <RevealInit />
      <PostcardHeader />

      {children}

      <PostcardFooter />
    </div>
  );
}
