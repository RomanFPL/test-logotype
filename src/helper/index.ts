const getRoot = (url: string) => {
  const _base = process.env.REACT_APP_BASE_ROOT;
  return _base + url;
};

export default getRoot;
