import { useEffect } from "react";
import { Link, useParams } from "wouter";
import Layout from "@/components/Layout";

// Blog post data (in a real app, this would come from an API)
const blogPosts = {
  "health-tech-ai-moment": {
    title: "Is Health Tech missing its AI moment?",
    date: "May 20, 2025",
    readTime: "4 min read",
    author: "Jose Molina",
    authorTitle: "Founder & CEO",
    content: `
      <p class="text-lg mb-6">
        McKinsey's latest State of AI report reveals something interesting—while AI is transforming industries, health tech companies are still in the early days.
      </p>
      
      <div class="bg-accent/30 p-6 rounded-xl mb-8">
        <h3 class="text-xl font-bold mb-4">Key Insights:</h3>
        <ul class="space-y-4">
          <li class="flex">
            <div class="text-[#005DA5] mr-3 flex-shrink-0">
              <i class="ri-checkbox-circle-fill text-xl"></i>
            </div>
            <div>
              <strong>AI is already driving revenue.</strong>
              <p>66% of marketing and sales teams using GenAI report higher revenue. The impact is real. But here's the catch—most companies aren't just testing AI, they're transforming how they work.</p>
            </div>
          </li>
          <li class="flex">
            <div class="text-[#72A84D] mr-3 flex-shrink-0">
              <i class="ri-checkbox-circle-fill text-xl"></i>
            </div>
            <div>
              <strong>Health Tech has the lowest AI adoption in commercial.</strong>
              <p>Only 29% of healthcare, pharma, and MedTech companies use GenAI in marketing and sales—the lowest of any industry. Tech and retail lead at 55%-46%. Why the gap?</p>
            </div>
          </li>
          <li class="flex">
            <div class="text-[#B32271] mr-3 flex-shrink-0">
              <i class="ri-checkbox-circle-fill text-xl"></i>
            </div>
            <div>
              <strong>Workflow Redesign is Crucial</strong>
              <p>The redesign of workflows has the biggest effect on an organization's ability to see EBIT impact from gen AI.</p>
            </div>
          </li>
          <li class="flex">
            <div class="text-[#EBAA20] mr-3 flex-shrink-0">
              <i class="ri-checkbox-circle-fill text-xl"></i>
            </div>
            <div>
              <strong>Precision beats broad experimentation.</strong>
              <p>Companies are shifting from "let's try AI everywhere" to targeting high-value areas. For healthcare, that means commercial strategy, patient engagement, and R&D acceleration.</p>
            </div>
          </li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-bold mb-4">The AI Adoption Gap in Healthcare</h2>
      <p class="mb-6">
        While industries like technology, financial services, and retail have rapidly integrated AI into their commercial operations, healthcare technology companies have been slower to adopt. This hesitation creates both a challenge and an opportunity.
      </p>
      
      <p class="mb-6">
        The data from McKinsey's report is clear: healthcare is lagging in commercial AI adoption, but the potential for impact is enormous. Companies that successfully implement AI in commercial operations are seeing real revenue growth.
      </p>
      
      <h2 class="text-2xl font-bold mb-4">Why Workflow Redesign Matters</h2>
      <p class="mb-6">
        Simply adding AI tools to existing processes isn't enough. The McKinsey report highlights that organizations seeing the biggest impact are those that redesign their workflows to fully leverage AI capabilities.
      </p>
      
      <p class="mb-6">
        This means rethinking how teams operate, how information flows, and how decisions are made. For healthcare technology companies, this could mean reimagining sales processes, customer engagement strategies, and how teams collaborate.
      </p>
      
      <div class="border-l-4 border-primary pl-6 italic my-8">
        "Companies are shifting from 'let's try AI everywhere' to targeting high-value areas. For healthcare, that means commercial strategy, patient engagement, and R&D acceleration."
      </div>
      
      <h2 class="text-2xl font-bold mb-4">The Path Forward</h2>
      <p class="mb-6">
        For healthcare technology companies looking to catch up, the path forward involves targeted implementation of AI in high-value areas. This means identifying specific workflows and processes where AI can have the most significant impact.
      </p>
      
      <p class="mb-6">
        At Conversia AI, we're helping healthcare technology companies bridge this gap by providing targeted AI solutions that enhance commercial teams' capabilities without requiring massive organizational change all at once.
      </p>
      
      <div class="bg-primary/10 p-6 rounded-xl mb-8">
        <h3 class="text-xl font-bold mb-2">Want to learn more?</h3>
        <p class="mb-4">Read the full McKinsey State of AI report:</p>
        <a href="https://lnkd.in/g86wWhSM" target="_blank" rel="noopener noreferrer" class="text-primary font-medium hover:underline flex items-center">
          <span>Access the report</span>
          <i class="ri-external-link-line ml-1"></i>
        </a>
      </div>
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // If post not found
  if (!post) {
    return (
      <Layout>
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Post not found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            <Link href="/blog">
              <a className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                Return to blog
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Blog post header */}
          <div className="max-w-3xl mx-auto mb-12">
            <Link href="/blog">
              <a className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
                <i className="ri-arrow-left-line mr-2"></i>
                Back to all posts
              </a>
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{post.title}</h1>
            
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                <span className="font-bold">{post.author.split(' ').map(name => name[0]).join('')}</span>
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-muted text-sm">{post.authorTitle}</p>
              </div>
              <div className="ml-auto flex items-center text-sm text-muted">
                <span className="mr-4">{post.date}</span>
                <span className="flex items-center">
                  <i className="ri-time-line mr-1"></i> {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Blog post content */}
          <div className="max-w-3xl mx-auto prose lg:prose-lg prose-slate">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Share and comments section */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <span className="text-muted mr-4">Share this post:</span>
                <div className="inline-flex space-x-4">
                  <a href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                    <i className="ri-facebook-circle-fill text-2xl"></i>
                  </a>
                  <a href="#" className="text-[#1DA1F2] hover:opacity-80 transition-opacity">
                    <i className="ri-twitter-fill text-2xl"></i>
                  </a>
                  <a href="#" className="text-[#0077B5] hover:opacity-80 transition-opacity">
                    <i className="ri-linkedin-fill text-2xl"></i>
                  </a>
                </div>
              </div>
              <div>
                <Link href="/blog">
                  <a className="inline-block bg-highlight hover:bg-highlight/90 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    More articles
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}