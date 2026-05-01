import { motion, AnimatePresence } from "motion/react";
import { BLOG_POSTS } from "../constants";
import { ArrowRight, X, Calendar } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section id="blog" className="py-24 border-y border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-md">
            <h2 className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Latest Updates</h2>
            <h3 className="text-5xl font-bold uppercase tracking-tight">Medical Journal</h3>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm mb-2">Technical insights into precision manufacturing and clinical applications.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedPost(post)}
              className="group p-10 bg-neutral-900/50 border border-white/5 rounded-sm hover:border-brand-red/20 transition-all cursor-pointer"
            >
              <div className="text-[10px] font-bold text-neutral-600 mb-6 uppercase tracking-widest">{post.date}</div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight group-hover:text-brand-red transition-colors leading-snug">{post.title}</h4>
              <p className="text-neutral-500 text-sm mb-8 leading-relaxed line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em] text-white group-hover:gap-5 transition-all">
                Full Article <ArrowRight size={14} className="text-brand-red" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-sm shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <div className="flex items-center gap-3 text-[10px] font-bold text-brand-red uppercase tracking-widest mb-6 border-b border-brand-red/20 pb-4">
                  <Calendar size={14} />
                  {selectedPost.date}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8 leading-tight">
                  {selectedPost.title}
                </h2>
                
                <div className="space-y-6 text-neutral-400 text-sm leading-relaxed tracking-wide italic border-l-2 border-brand-red/20 pl-6 mb-8 uppercase text-[11px]">
                  {selectedPost.excerpt}
                </div>

                <div className="prose prose-invert max-w-none text-neutral-300">
                  {selectedPost.content?.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-6 leading-relaxed whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                  <p className="text-[9px] text-neutral-600 font-bold tracking-[0.3em] uppercase">SF-INSTRUMENT JOURNAL • VOL 04</p>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-[9px] font-bold text-white uppercase tracking-widest border border-white/10 px-6 py-2 hover:bg-brand-red hover:border-brand-red transition-all"
                  >
                    CLOSE ARTICLE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
