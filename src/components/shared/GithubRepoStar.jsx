import { useEffect, useState } from 'react';

const GithubRepoStar = ({ username, repo }) => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const fetchRepoStars = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching repository data:', error);
      }
    };

    fetchRepoStars();
  }, [username, repo]);

  return (
    <div>
      <p>{stars}</p>
    </div>
  );
};

export default GithubRepoStar;
