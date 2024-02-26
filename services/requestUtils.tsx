const fetcher = (url: string, options?: RequestInit) =>
  fetch(url, {
    headers: {
      "content-type": "application/json",
    },
    ...options,
  }).then((res) => res.json());

export default fetcher;
