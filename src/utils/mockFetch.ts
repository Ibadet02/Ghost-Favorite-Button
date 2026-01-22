const mockFetch = (): Promise<"success" | "fail"> => {
  return new Promise((resolve, reject) => {
    const isSuccesful = !Math.round(Math.random());

    setTimeout(() => {
      if (isSuccesful) resolve("success");
      else reject("fail");
    }, 1000);
  });
};

export default mockFetch;
