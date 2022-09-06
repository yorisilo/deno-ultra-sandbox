type Fnumber = (n: number) => number;

const hoge = (f: Fnumber) => {
  return f(20);
};

hoge((n) => {
  return n + 20;
});
