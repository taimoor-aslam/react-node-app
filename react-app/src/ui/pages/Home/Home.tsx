import { StoryCard, TextField } from "../../components";
import { useHome } from "./useHome";

export const Home = () => {
  const { stories, isLoading, searchQuery, setSearchQuery } = useHome();
  return (
    <div className="container">
      <h1>Top Stories</h1>
      <TextField
        id="search-story"
        additionalClasses="mt-3 w-auto mx-auto"
        defaultValue={searchQuery}
        setValue={setSearchQuery}
        type="text"
        placeholder="Search for top stories"
      />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="d-flex flex-wrap gap-3 mt-5">
          {stories?.map((story) => (
            <StoryCard {...story} />
          ))}
        </div>
      )}

      {!isLoading && !stories?.length && <div>Oops! No stories found.</div>}
    </div>
  );
};
