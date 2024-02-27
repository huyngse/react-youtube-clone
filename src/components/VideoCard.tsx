import { abbreviateNumber, getTimeAgo } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";

type VideoCardProps = {
  imageURL: string;
  title: string;
  channelName: string;
  channelAvatar?: string;
  views: number;
  uploadDate: Date;
};

const VideoCard = ({
  imageURL,
  title,
  channelName,
  views,
  uploadDate,
  channelAvatar,
}: VideoCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="col-span-4">
      {isLoading ? (
        <Skeleton className="w-full h-[225px] rounded-xl" />
      ) : (
        <img src={imageURL} alt="Video thumbnail" className="rounded-xl" />
      )}
      <div className="pt-2 flex">
        <div className="p-2">
          <Avatar>
            <AvatarImage src={channelAvatar} />
            <AvatarFallback>{channelName.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="font-bold">{title}</h2>
          <h3 className="text-gray-500">{channelName}</h3>
          <p className="text-gray-500">
            {abbreviateNumber(views)} views &bull; {getTimeAgo(uploadDate)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
