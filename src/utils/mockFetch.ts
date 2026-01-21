const mockFetch = (): Promise<"success" | "fail"> => {
  return new Promise((resolve, reject) => {
    const isSuccesful = !Math.round(Math.random());

    setTimeout(() => {
      if (isSuccesful) resolve("success");
      else reject("fail");
    }, 5000);
  });
};

export default mockFetch;
