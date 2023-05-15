import React from "react"

type VideoCardSkeletonProps = {
  type?: string
}

function VideoCardSkeleton({ type }: VideoCardSkeletonProps) {
  const isList = type === "list"

  return (
    <div className={`animate-pulse ${isList ? "flex m-2 gap-1" : ""}`}>
      <img
        className={`bg-slate-700 border-slate-700 ${
          isList ? "w-60" : "w-full"
        }`}
        width="320px"
        height="180px"
      ></img>
      <div className="flex-1">
        <div className="w-full h-12 mb-4 bg-slate-700 my-2"></div>
        <div className="w-1/2 h-4 mb-2 bg-slate-700"></div>
        <div className="w-1/3 h-4 bg-slate-700"></div>
      </div>
    </div>
  )
}

export default VideoCardSkeleton
