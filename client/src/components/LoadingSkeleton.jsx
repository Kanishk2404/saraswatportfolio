import { motion } from 'framer-motion';

export default function LoadingSkeleton({ type = 'card', lines = 3 }) {
  const shimmer = "animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 bg-[length:200%_100%]";
  
  if (type === 'card') {
    return (
      <div className="neo">
        <div className="inner p-6 h-full">
          <div className={`h-6 bg-zinc-800 rounded mb-4 ${shimmer}`}></div>
          <div className={`h-4 bg-zinc-800 rounded mb-2 ${shimmer}`}></div>
          <div className={`h-4 bg-zinc-800 rounded mb-2 w-3/4 ${shimmer}`}></div>
          <div className={`h-4 bg-zinc-800 rounded w-1/2 ${shimmer}`}></div>
        </div>
      </div>
    );
  }
  
  if (type === 'text') {
    return (
      <div className="space-y-2">
        {[...Array(lines)].map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-zinc-800 rounded ${shimmer} ${
              i === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          ></div>
        ))}
      </div>
    );
  }
  
  if (type === 'avatar') {
    return (
      <div className={`w-16 h-16 bg-zinc-800 rounded-full ${shimmer}`}></div>
    );
  }
  
  if (type === 'button') {
    return (
      <div className={`h-10 bg-zinc-800 rounded-lg w-32 ${shimmer}`}></div>
    );
  }
  
  return null;
}

export function ProjectCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="neo h-[600px]"
    >
      <div className="inner p-8 h-full flex flex-col">
        {/* Header */}
        <div className="mb-6 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div className="h-8 bg-zinc-800 rounded w-1/2 animate-pulse"></div>
            <div className="h-6 bg-zinc-800 rounded w-16 animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-zinc-800 rounded animate-pulse"></div>
            <div className="h-4 bg-zinc-800 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-zinc-800 rounded w-4/6 animate-pulse"></div>
          </div>
        </div>
        
        {/* Image */}
        <div className="mb-6 flex items-center justify-center">
          <div className="w-64 h-44 bg-zinc-800 rounded-xl animate-pulse"></div>
        </div>
        
        {/* Content */}
        <div className="mb-6 flex-grow">
          <div className="h-5 bg-zinc-800 rounded w-1/3 mb-3 animate-pulse"></div>
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 p-2 bg-zinc-800/50 rounded-md">
                <div className="w-2 h-2 bg-zinc-700 rounded-full"></div>
                <div className="h-4 bg-zinc-700 rounded w-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-auto flex-shrink-0">
          <div className="flex flex-wrap gap-2 mb-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-6 bg-zinc-800 rounded-full w-16 animate-pulse"></div>
            ))}
          </div>
          <div className="h-5 bg-zinc-800 rounded w-32 animate-pulse"></div>
        </div>
      </div>
    </motion.div>
  );
}
