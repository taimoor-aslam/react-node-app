import { useQuery } from "react-query";
import { fetchTopStories } from "../../../apis/apis";
import { useMemo, useState } from "react";
import { IStory } from "../../../models/models";

export const useHome = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading } = useQuery("stories", fetchTopStories);
  const stories = useMemo(() => {
    return data?.filter(
      (story: IStory) =>
        story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.abstract.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  return {
    stories,
    isLoading,
    searchQuery,
    setSearchQuery,
  };
};
