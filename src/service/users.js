import { urlFetch } from "../constants";

export const getGitHubUser = async (user) => {
  const res = await fetch(`${urlFetch}${user}`, {
    method: "GET",
  });

  const payload = res.json();

  return payload;
};
